import React, {useEffect, useState, useContext} from 'react'
import {database, FieldValue} from '../lib/firebase'
import {Context} from './Context'


const DatabaseContext = React.createContext(null)

function DatabaseContextProvider({children}) {
    const {currentUser} = useContext(Context)
    const [currentUserData, setCurrentUserData] = useState()
    const [photos, setPhotos] = useState([])
    const [blogs, setBlogs] = useState([])
    const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false)


    useEffect(()=>{
        const unsubUsers = database.users.onSnapshot((doc)=>{
            const blogs = doc.docs.map(doc=>{return {...doc.data(), dataId: doc.id}})
            setBlogs(blogs)
            const user = doc.docs.find(doc=>doc.data().emailAddress===currentUser.email)
            setCurrentUserData({...user.data(), dataId: user.id})
        })
        const unsubPhotos = database.photos.onSnapshot((doc)=>{
            const photos = doc.docs.map(doc=>{return {...doc.data(), postId: doc.id}})
            setPhotos(photos)
        })

        return ()=> {
            unsubUsers()
            unsubPhotos()
        }
     
    // eslint-disable-next-line
    },[currentUser])

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
    function addComment (postId, username, comment){
        database.photos.doc(postId).update({
            comments: FieldValue.arrayUnion({
                comment: comment,
                username: username,
                dateCommented: Date.now() })
            }
        )
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
            isCreateMenuOpen,
            setIsCreateMenuOpen,
            addFavorite,
            removeFavorite,
            follow,
            unfollow,
            addComment

        }}>
            {children}
        </DatabaseContext.Provider>
    )
}

export {DatabaseContextProvider, DatabaseContext}