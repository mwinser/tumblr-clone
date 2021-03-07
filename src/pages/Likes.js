import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import React, {useContext} from 'react'
import {DatabaseContext} from '../context/databaseContext'
import Post from '../components/Post'


function Likes() {

        const {photos, currentUserData} = useContext(DatabaseContext)

        return (
        <>
            <Header/>
            <div className="bg-navy max-w-990px mx-auto mt-10 px-2 flex items-start text-white">
                {currentUserData ? (
                    <div className="FEED flex items-end flex-col w-full max-w-625px">
                        {photos
                            .filter((photo)=>photo.likes.some(liker=> liker===currentUserData.username))
                            .sort((a,b)=>b.dateCreated-a.dateCreated)
                            .map((item, index)=>(
                                <Post key={index} item={item} 
                                currentUserData={currentUserData}
                                />
                            ))
                        }
                        {currentUserData.username==='guest' &&
                         <div className="max-w-625px w-10/12 my-4 py-24 px-5 bg-gray-500 bg-opacity-20 text-gray-400 text-center font-bold text-xl rounded">
                            <svg className="w-32 mx-auto mb-2.5" viewBox="0 0 112 112" width="100" height="100" fill="lightgray"><path d="M25 8h31v29.5h31v41.015l-62-62V8zm0 17L13.243 13.243 9 17.485l16 16V95h61.515l8.752 8.752 4.243-4.242L87 87 25 25zm37 7V8l25 24H62z"></path></svg>
                            Guests do not like/have likes
                         </div>
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

export default Likes