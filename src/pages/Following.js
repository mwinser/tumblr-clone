import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import React, {useContext} from 'react'
import {DatabaseContext} from '../context/databaseContext'
import FollowingBanner from '../components/FollowingBanner'


function Following() {

        const {blogs, currentUserData} = useContext(DatabaseContext)

        return (
        <>
            <Header/>
            <div className="bg-navy max-w-990px mx-auto mt-10 px-2 flex items-start text-white">
                {currentUserData ? (
                    <div className="FEED flex items-end flex-col w-full max-w-625px">
                        {blogs
                            .filter((blog)=>currentUserData.following.some(followee=>followee===blog.username))
                            .map((blog, index)=>(
                                <FollowingBanner 
                                    key={index} 
                                    blog={blog} 
                                    currentUserData={currentUserData}
                                    />
                            ))
                        }
                    </div>
                    ) : (
                    <div>Loading Posts...</div>
                )
                }
                <Sidebar/>
            </div>
        </>
    )
}

export default Following