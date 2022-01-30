import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {DatabaseContext} from '../context/databaseContext'
import { database } from '../lib/firebase'
import CommentBox from './CommentBox'


function Post(props){
    const {addFavorite, removeFavorite, follow, unfollow} = useContext(DatabaseContext)

    const item = props.item
    const currentUsername = props.currentUserData.username

    

    const [isUserFavorite, setIsUserFavorite] = useState(item.likes.some(user=>user===currentUsername)) 
    const [isFollowed, setIsFollowed] = useState(props.currentUserData.following.some(user=>user===item.username)) 
    const [showCommentBox, setShowCommentBox] = useState(false)
    


    function handleToggleFavorite() {
        isUserFavorite? removeFavorite(item.postId, currentUsername) : addFavorite(item.postId, currentUsername)
        
        setIsUserFavorite(prevState=>!prevState)
    }

    async function handleRemovePost(){
        try {
            await database.photos.doc(item.postId).delete()
        } catch(error) {
            console.log(error.message)
        }
    }

    function ToggleCommentBox(){
        setShowCommentBox(prevState => !prevState)
    }

    return (
    <div className={`POSTS relative text-black bg-white ${props.small ? "w-full" : "w-10/12"} rounded mb-5`}>
        {!props.small && (
            <div className="AVATAR hidden lg:block absolute top-0 -left-20 w-16 h-full">
                <Link to={`${ROUTES.BLOG}/${item.username}`}>
                    <img 
                        className="sticky top-16 rounded"
                        alt="avatar" 
                        src="https://assets.tumblr.com/images/default_avatar/cube_open_64.png"/>
                </Link>   
            </div>
        ) }
        
        <div className="HEADER flex justify-between px-5 pt-4 mb-4">
            <div className="USERNAME font-bold">
                <Link to={`${ROUTES.BLOG}/${item.username}`}>
                    {item.username}
                </Link>
            </div>
            {isFollowed ? (
                <div 
                    className="UNFOLLOW cursor-pointer ml-2" 
                    onClick={()=>{
                        unfollow(item.username)
                        setIsFollowed(false)
                    }}
                >
                    Unfollow
                </div>
                ) : (
                <div 
                    className="FOLLOW cursor-pointer ml-2 text-blue-400 font-bold" 
                    onClick={()=>{
                        follow(item.username)
                        setIsFollowed(true)
                    }}
                >
                    Follow
                </div>
                )
            }
            <span className="flex-grow"></span>
            <div className="MENU font-bold text-xl">...</div>
        </div>
        {item.type==='image' && (
            <div className="IMAGE">
                <img 
                    className="object-cover max-w-100.01"
                    src={item.imageSrc} 
                    alt="user content"/>
            </div>
        )}
        {!props.small && (
            <>
            <div className="CAPTION my-4 px-5">
                {item.caption}
            </div>
            <div className="HASHTAGS my-2.5 px-5 text-gray-500">
                {item.hashTags.map(tag=> 
                    <Link key={tag} to={`${ROUTES.SEARCH}/${tag}`}>
                        <i className="hover:underline not-italic">
                            #{tag} 
                        </i>
                        {` `}
                    </Link>
                    )}
            </div>
            </>
        )}
        
        <div className="FOOTER flex justify-between mt-3 px-5 pb-3">
            <div className="NOTES font-bold cursor-pointer text-gray-600 text-sm" onClick={ToggleCommentBox}>
                {item.comments.length} Notes
            </div>
            {showCommentBox && <CommentBox toggle={ToggleCommentBox} item={item} currentUsername={currentUsername}/>}
            <div className="ICONS flex justify-between text-gray-500">
                {!props.small && (
                    <>
                    <div className="ml-5 fill-current">
                        <svg viewBox="0 0 17 17" width="21" height="21" ><path d="M2 15l3.17-5.065 4.124-.956c.475-.143.475-.816 0-.96L5.17 7.066 2 2l13 6.5L2 15zm13.894-8.29l-13-6.5A1.996 1.996 0 0 0 .52.655 2 2 0 0 0 .304 3.06L3.71 8.5.303 13.94a2 2 0 0 0 2.59 2.85l13-6.5a2.002 2.002 0 0 0 .001-3.58z"></path></svg>
                    </div>
                    <div className="ml-5 fill-current">
                        <svg viewBox="0 0 17 17" width="21" height="21" ><path d="M8.7 0C4.1 0 .4 3.7.4 8.3c0 1.2.2 2.3.7 3.4-.2.6-.4 1.5-.7 2.5L0 15.8c-.2.7.5 1.4 1.2 1.2l1.6-.4 2.4-.7c1.1.5 2.2.7 3.4.7 4.6 0 8.3-3.7 8.3-8.3C17 3.7 13.3 0 8.7 0zM15 8.3c0 3.5-2.8 6.3-6.4 6.3-1.2 0-2.3-.3-3.2-.9l-3.2.9.9-3.2c-.5-.9-.9-2-.9-3.2.1-3.4 3-6.2 6.5-6.2S15 4.8 15 8.3z"></path></svg>
                    </div>
                    </>
                )}

                <div className="ml-5 fill-current">
                    <svg viewBox="0 0 17 18.1" width="21" height="21" ><path d="M12.8.2c-.4-.4-.8-.2-.8.4v2H2c-2 0-2 2-2 2v5s0 1 1 1 1-1 1-1v-4c0-1 .5-1 1-1h9v2c0 .6.3.7.8.4L17 3.6 12.8.2zM4.2 17.9c.5.4.8.2.8-.3v-2h10c2 0 2-2 2-2v-5s0-1-1-1-1 1-1 1v4c0 1-.5 1-1 1H5v-2c0-.6-.3-.7-.8-.4L0 14.6l4.2 3.3z"></path></svg>
                </div>
                <div 
                    className="FAVORITE ml-5 fill-current cursor-pointer" 
                    onClick={()=>handleToggleFavorite()}
                >
                {isUserFavorite? (
                    <svg width="23" height="21" viewBox="0 0 20 18" fill="red"><path d="M17.888 1.1C16.953.38 15.87 0 14.758 0c-1.6 0-3.162.76-4.402 2.139-.098.109-.217.249-.358.42a12.862 12.862 0 0 0-.36-.421C8.4.758 6.84 0 5.248 0 4.14 0 3.06.381 2.125 1.1-.608 3.201-.44 6.925 1.14 9.516c2.186 3.59 6.653 7.301 7.526 8.009.38.307.851.474 1.333.474a2.12 2.12 0 0 0 1.332-.473c.873-.71 5.34-4.42 7.526-8.01 1.581-2.597 1.755-6.321-.968-8.418"></path></svg>
                ) : (
                    <svg width="23" height="21" viewBox="0 0 20 18" ><path d="M14.658 0c-1.625 0-3.21.767-4.463 2.156-.06.064-.127.138-.197.225-.074-.085-.137-.159-.196-.225C8.547.766 6.966 0 5.35 0 4.215 0 3.114.387 2.162 1.117c-2.773 2.13-2.611 5.89-1.017 8.5 2.158 3.535 6.556 7.18 7.416 7.875A2.3 2.3 0 0 0 9.998 18c.519 0 1.028-.18 1.436-.508.859-.695 5.257-4.34 7.416-7.875 1.595-2.616 1.765-6.376-1-8.5C16.895.387 15.792 0 14.657 0h.001zm0 2.124c.645 0 1.298.208 1.916.683 1.903 1.461 1.457 4.099.484 5.695-1.973 3.23-6.16 6.7-6.94 7.331a.191.191 0 0 1-.241 0c-.779-.631-4.966-4.101-6.94-7.332-.972-1.595-1.4-4.233.5-5.694.619-.475 1.27-.683 1.911-.683 1.064 0 2.095.574 2.898 1.461.495.549 1.658 2.082 1.753 2.203.095-.12 1.259-1.654 1.752-2.203.8-.887 1.842-1.461 2.908-1.461h-.001z"></path></svg>
                )}
                </div>
                {currentUsername===item.username &&
                    <div 
                        className="ml-5 fill-current cursor-pointer"
                        onClick={()=>handleRemovePost()}
                    >
                        <svg viewBox="0 0 14 17" width="21" height="21" ><path d="M12 5v9c.1.7-.3 1-1 1H3c-.5 0-.9-.3-1-1V5c0-.6-.4-1-1-1-.5 0-1 .4-1 1v9.5C0 16.1 1.4 17 3 17h8c1.8 0 3-.8 3-2.5V5c0-.6-.5-1-1-1-.6 0-1 .5-1 1z"></path><path d="M4 12s0 1 1 1 1-1 1-1V5c0-.5-.4-1-1-1-.5 0-1 .5-1 1v7zm4 0s0 1 1 1 1-1 1-1V5c0-.5-.4-1-1-1-.5 0-1 .5-1 1v7zm5-10c.5 0 1-.4 1-1 0-.5-.4-.9-1-1H1C.5.1 0 .5 0 1c0 .6.6 1 1.1 1H13z"></path></svg>
                    </div>
                }
                
            </div>
        </div>
</div>)
}

export default Post