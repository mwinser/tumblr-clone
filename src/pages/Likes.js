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