import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import React, {useContext} from 'react'
import {DatabaseContext} from '../context/databaseContext'
import FollowingBanner from '../components/FollowingBanner'
import MainContainer from '../containers/MainContainer'
import LoadingSpinner from '../components/LoadingSpinner'


function Following() {

        const {blogs, currentUserData} = useContext(DatabaseContext)

        return (
        <>
            <Header/>
            <MainContainer>
                {currentUserData 
                    ? 
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
                            {currentUserData.username==='guest' &&
                            <div className="max-w-625px w-10/12 my-4 py-24 px-5 bg-gray-500 bg-opacity-20 text-gray-400 text-center font-bold text-xl rounded">
                                <svg className="w-32 mx-auto mb-2.5" viewBox="0 0 112 112" width="100" height="100" fill="lightgray"><path d="M25 8h31v29.5h31v41.015l-62-62V8zm0 17L13.243 13.243 9 17.485l16 16V95h61.515l8.752 8.752 4.243-4.242L87 87 25 25zm37 7V8l25 24H62z"></path></svg>
                                Guests do not follow/have followers
                            </div>
                            }
                        </div>
                    : 
                        <LoadingSpinner/>
                }
                <Sidebar/>
            </MainContainer>
        </>
    )
}

export default Following