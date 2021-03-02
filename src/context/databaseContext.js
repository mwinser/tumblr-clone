import React, {useEffect, useState} from 'react'
import {database} from '../lib/firebase'

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
        response.docs.forEach(doc=>setPhotos(prevPhotos=> [...prevPhotos,doc.data()]))
    }

    useEffect(()=>{
        getPhotos();
        getBlogs()

    },[])


    return (
        <DatabaseContext.Provider value={{
            photos,
            blogs

        }}>
            {children}
        </DatabaseContext.Provider>
    )
}

export {DatabaseContextProvider, DatabaseContext}