import React, {useContext} from 'react'

import {DatabaseContext} from '../context/databaseContext'
import Post from '../components/Post'
import CreateMenu from './CreateMenu'
import LoadingSpinner from './LoadingSpinner'



function Feed(props) {
    const {photos, currentUserData} = useContext(DatabaseContext)
    let filteredPhotos = photos
    
    if (props.username) {
        filteredPhotos = filteredPhotos.filter(photo => photo.username===props.username)
    }
    if (props.notUsername) {
        filteredPhotos = filteredPhotos.filter(photo => photo.username!==props.notUsername)
    }
    if (props.hashTag) {
        filteredPhotos = filteredPhotos.filter(photo => photo.hashTags.includes(props.hashTag))
    }
    if (props.likedByUsername) {
        filteredPhotos = filteredPhotos.filter(photo => photo.likes.includes(props.likedByUsername))
    }
    if (props.query) {
        filteredPhotos = filteredPhotos.filter(photo => 
            photo.caption.includes(props.query) ||
            photo.username.includes(props.query) ||
            photo.hashTags.includes(props.query))
    }

    return(
        currentUserData ? (

        
        <div className="FEED flex items-center lg:items-end flex-col w-full max-w-540px lg:max-w-625px">
            {props.children}
            {!props.hideMenu && <CreateMenu/>}
            {filteredPhotos
                
                .sort((a,b)=>b.dateCreated-a.dateCreated)
                .map(item=>(
                    <Post key={item.postId} item={item} 
                    currentUserData={currentUserData}
                    />
                ))
            }
            {filteredPhotos.length===0 && 
                <div className="max-w-625px w-full lg:w-10/12 my-4 py-24 px-5 bg-gray-500 bg-opacity-20 text-gray-400 text-center font-bold text-xl rounded">
                    <svg className="w-32 mx-auto mb-2.5" viewBox="0 0 112 112" width="100" height="100" fill="gray">
                        <path d="M25 8h31v29.5h31v41.015l-62-62V8zm0 17L13.243 13.243 9 17.485l16 16V95h61.515l8.752 8.752 4.243-4.242L87 87 25 25zm37 7V8l25 24H62z"></path>
                    </svg>
                    No Posts Available
                </div>}


        </div>
        ) : (
            <LoadingSpinner/>
        )
    )
}

export default Feed