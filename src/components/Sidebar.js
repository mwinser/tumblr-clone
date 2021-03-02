import React, {useContext} from 'react'
import {DatabaseContext} from '../context/databaseContext'


function Sidebar() {
    
    const {blogs} = useContext(DatabaseContext)


    return(
        <div className="SIDEBAR max-w-xs flex flex-col flex-start ml-8">
            <div className="text-xl font-bold px-2.5 pb-2.5 border-b-2">
                Check out these blogs
            </div>
            <ul className="py-2.5">
                {blogs.map(blog=>(
                    <li>{blog.username}</li>
                ))}
            </ul>

            <p>
                Need to add: Check out these blogs, Radar and Sponsored Post
            </p>
        
    </div>
    )

}

export default Sidebar