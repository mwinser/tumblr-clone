import React, {useEffect, useState} from 'react'
import {database, FieldValue} from '../lib/firebase'

const DatabaseContext = React.createContext(null)

function DatabaseContextProvider({children}) {

    const [photos, setPhotos] = useState([])
    const [blogs, setBlogs] = useState([])
    

    const getBlogs = async () => {
        const response = await database.users.get()
        response.docs.forEach(doc=>setBlogs(prevBlogs=> [...prevBlogs,doc.data()]))
    }

    const getPhotos = async () => {
        const response = await database.photos.get()
        response.docs.forEach(doc=>setPhotos(prevPhotos=> [...prevPhotos,{...doc.data(), postId: doc.id}]))
    }

    useEffect(()=>{
        getPhotos();
        getBlogs()

    },[])

    function addFavorite (postId, username) {
        database.photos.doc(postId).update({
            likes: FieldValue.arrayUnion(username)
        })
    }
    function removeFavorite (postId, username) {
        database.photos.doc(postId).update({
            likes: FieldValue.arrayRemove(username)
        })
    }


    return (
        <DatabaseContext.Provider value={{
            photos,
            blogs,
            addFavorite,
            removeFavorite

        }}>
            {children}
        </DatabaseContext.Provider>
    )
}

export {DatabaseContextProvider, DatabaseContext}