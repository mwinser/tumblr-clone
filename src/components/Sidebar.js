import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {DatabaseContext} from '../context/databaseContext'
import SidePost from './SidePost'
import Post from './Post'


function Sidebar() {
    const {blogs, photos, currentUserData} = useContext(DatabaseContext)

    return(
        currentUserData ? 
        <div className="SIDEBAR relative flex-1 max-w-320px flex flex-col flex-start ml-8 w-80">
            <div className="BLOGSCARD mb-9">
                <div className="text-xl font-bold px-2.5 pb-2.5 border-b-2">
                    Check out these blogs
                </div>
                <ul className="py-2.5">
                    {blogs.sort((a,b)=>b.followers.length-a.followers.length).slice(0,4).map((blog, index)=>(
                        <SidePost key={`blog${index}`} blog={blog} currentUserData={currentUserData}/>
                    ))}
                </ul>
                <div className="mt-3 pl-2.5 text-blue-400">
                    <Link to={ROUTES.RECOMMENDED}>
                        Explore all of Tumblr
                    </Link>
                </div>
            </div>
            {currentUserData &&
            <div className="RADARCARD mb-9 max-w-320px">
                <div className="text-xl font-bold px-2.5 pb-2.5 border-b-2">
                    Radar
                </div>
                <div className="p-2">
                    {photos
                        .sort((a,b)=>b.likes.length-a.likes.length)
                        .slice(0,1)
                        .map((item, index)=>(
                            <Post key={index} item={item} currentUserData={currentUserData} small={true}/>
                        ))
                    }
                </div>
                
            </div>
            }           
            <div className="SPONSOREDCARD sticku top-16">
                <div className="text-xl font-bold px-2.5 pb-2.5 border-b-2">
                    Sponsored
                </div>
                This space intentionally left blank.
            </div>

        
        </div>
        : <div>Loading...</div>
    )

}

export default Sidebar