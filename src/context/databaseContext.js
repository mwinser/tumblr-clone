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
        const dataId = response.docs.find(doc=>doc.data().userId===currentUser.uid).id
            
        setCurrentUserData({...response.docs.find(doc=>doc.data().userId===currentUser.uid).data(), dataId: dataId})

        
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

    function follow (usernameToFollow) {
        const followed = blogs.find(blog=>blog.username===usernameToFollow)
        
        database.users.doc(followed.dataId).update({
            followers: FieldValue.arrayUnion(currentUserData.username)
        })
        database.users.doc(currentUserData.dataId).update({
            following: FieldValue.arrayUnion(usernameToFollow)
        })
    }
    function unfollow (usernameToUnfollow) {
        const unfollowed = blogs.find(blog=>blog.username===usernameToUnfollow)
        
        database.users.doc(unfollowed.dataId).update({
            followers: FieldValue.arrayRemove(currentUserData.username)
        })
        database.users.doc(currentUserData.dataId).update({
            following: FieldValue.arrayRemove(usernameToUnfollow)
        })
    }

    return (
        <DatabaseContext.Provider value={{
            photos,
            blogs,
            currentUserData,
            addFavorite,
            removeFavorite,
            follow,
            unfollow

        }}>
            {children}
        </DatabaseContext.Provider>
    )
}

export {DatabaseContextProvider, DatabaseContext}