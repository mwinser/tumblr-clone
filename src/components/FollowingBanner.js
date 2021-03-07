import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {DatabaseContext} from '../context/databaseContext'


function FollowingBanner(props){
    const {follow, unfollow} = useContext(DatabaseContext)

    const blog = props.blog
   
    
    
    const [isFollowed, setIsFollowed] = useState(true) 



    return (
    <div className="POSTS relative text-black bg-white w-10/12 rounded">
        <div className="HEADER flex justify-between p-3 text-sm">
            <div className="flex gap-2 items-center">
                <div className="AVATAR w-10 h-10">
                    <img 
                        className="rounded"
                        alt="avatar" 
                        src="https://assets.tumblr.com/images/default_avatar/cube_open_64.png"/>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="USERNAME font-bold">
                        <Link to={`${ROUTES.BLOG}/${blog.username}`}>
                            {blog.username}
                        </Link>
                    </div>
                    <div>
                        Untitled
                    </div>
                </div>
            </div>
            <div className="flex items-center font-bold text-blue-300 gap-2">
                {isFollowed ? (
                    <div 
                        className="UNFOLLOW cursor-pointer ml-2" 
                        onClick={()=>{
                            unfollow(blog.username)
                            setIsFollowed(false)
                        }}
                    >
                        Unfollow
                    </div>
                    ) : (
                    <div 
                        className="FOLLOW cursor-pointer ml-2" 
                        onClick={()=>{
                            follow(blog.username)
                            setIsFollowed(true)
                        }}
                    >
                        Follow
                    </div>
                    )
                }
                
                <div className="MENUDOTS p-2.5">
                    <svg viewBox="0 0 17.5 3.9" style={{transform: "rotate(90deg)"}} width="14" height="8" fill="black"><path d="M17.5 1.9c0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9S14.5 0 15.6 0c1 0 1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 1.9-1.9 1.9-1.1.1-2-.8-2-1.9 0-1 .9-1.9 2-1.9s1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 2-2 2-1 0-1.9-.9-1.9-2S.9 0 1.9 0c1.1 0 2 .9 2 1.9"></path></svg>
                </div>
            </div>
        </div>
       
   
        
        
        
</div>)
}

export default FollowingBanner