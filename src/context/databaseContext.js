import React, {useEffect, useState, useContext} from 'react'
import {database, FieldValue} from '../lib/firebase'
import {Context} from './Context'


const DatabaseContext = React.createContext(null)

function DatabaseContextProvider({children}) {
    const {currentUser} = useContext(Context)
    const [currentUserData, setCurrentUserData] = useState()
    const [photos, setPhotos] = useState([])
    const [blogs, setBlogs] = useState([])


    const getBlogs = async () => {
        const response = await database.users.get()
        response.docs.forEach(doc=>setBlogs(prevBlogs=> [...prevBlogs,{...doc.data(), dataId: doc.id}]))
        setCurrentUserData(response.docs.find(doc=>doc.data().userId===currentUser.uid).data())

        
    }

    const getPhotos = async () => {
        const response = await database.photos.get()
        response.docs.forEach(doc=>setPhotos(prevPhotos=> [...prevPhotos,{...doc.data(), postId: doc.id}]))
        
    }


    useEffect(()=>{
        getPhotos()
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
            currentUserData,
            addFavorite,
            removeFavorite

        }}>
            {children}
        </DatabaseContext.Provider>
    )
}

export {DatabaseContextProvider, DatabaseContext}