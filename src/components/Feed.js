import React, {useContext} from 'react'

import {DatabaseContext} from '../context/databaseContext'
import Post from '../components/Post'
import CreateMenu from './CreatMenu'



function Feed() {
    const {photos, currentUserData} = useContext(DatabaseContext)

    return(
        currentUserData ? (

        
        <div className="FEED flex items-end flex-col w-full max-w-625px">
            <CreateMenu/>
            {photos
                
                .sort((a,b)=>b.dateCreated-a.dateCreated)
                .map((item, index)=>(
                    <Post key={index} item={item} 
                    currentUserData={currentUserData}
                    />
                ))
            }


        </div>
        ) : (
            <div className="text-5xl text-white mr-8">Loading...</div>
        )
    )
}

export default Feed