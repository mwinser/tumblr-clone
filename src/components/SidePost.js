import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {DatabaseContext} from '../context/databaseContext'


function SidePost(props){
    const {follow, unfollow} = useContext(DatabaseContext)

    

    const [isFollowed, setIsFollowed] = useState(false) 

    function handleFollow (){
        follow(props.blog.username)
        setIsFollowed(true)
    }
    function handleUnfollow (){
        unfollow(props.blog.username)
        setIsFollowed(false)
    }
  
    return (
        <li  className="flex justify-between py-2 px-2.5">
                                
            <div className="flex items-center justify-center">
                <div className="AVATAR mr-3 w-10 h-10">
                        <img 
                            className="rounded"
                            alt="avatar" 
                            src="https://assets.tumblr.com/images/default_avatar/cube_open_64.png"
                        />
                    
                </div>
                <Link to={`${ROUTES.BLOG}/${props.blog.username}`}>
                    <div className="flex-1 flex flex-col justify-center items-start">
                        <div className="font-bold w-44 overflow-hidden overflow-ellipsis">
                            {props.blog.username}
                        </div>
                        <div>Untitled</div>
                    </div>
                </Link>
            </div>
            <div className="flex font-bold items-center mr-2.5 cursor-pointer text-blue-400">
                <span onClick={()=>{isFollowed ? handleUnfollow() : handleFollow()}}>
                    {isFollowed ? "Unfollow" : "Follow"}
                </span>
            </div>
            
        </li>
)
}

export default SidePost