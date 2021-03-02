import React, {useContext} from 'react'
import {DatabaseContext} from '../context/databaseContext'


function Sidebar() {
    
    const {blogs} = useContext(DatabaseContext)


    return(
        <div className="SIDEBAR relative flex-1 max-w-320px flex flex-col flex-start ml-8 w-80">
            <div className="BLOGSCARD mb-9">
                <div className="text-xl font-bold px-2.5 pb-2.5 border-b-2">
                    Check out these blogs
                </div>
                <ul className="py-2.5">
                    {blogs.slice(0,4).map(blog=>(
                        <li className="flex justify-between py-2 px-2.5">
                            <div className="flex items-center justify-center">
                                <div className="AVATAR mr-3 w-10 h-10 bg-white rounded"></div>
                                <div className="flex-1 flex flex-col justify-center items-start">
                                    <div className="font-bold">
                                    {blog.username}
                                    </div>
                                    <div>Description</div>
                                </div>
                            </div>
                            <div className="flex font-bold items-center mr-2.5">
                                <span>
                                    Follow
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-3 pl-2.5">
                    Explore all of Tumblr
                </div>
            </div>
            <div className="RADARCARD mb-9">
                <div className="text-xl font-bold px-2.5 pb-2.5 border-b-2">
                    RADAR
                </div>
                INSERT POST HERE
            </div>
            <div className="SPONSOREDCARD sticku top-16">
                <div className="text-xl font-bold px-2.5 pb-2.5 border-b-2">
                    SPONSORED
                </div>
                This space intentionally left blank.
            </div>

        
    </div>
    )

}

export default Sidebar