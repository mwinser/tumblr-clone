import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {DatabaseContext} from '../context/databaseContext'
import Post from '../components/Post'
import Header from '../components/Header'


function Search() {
    const {photos, currentUserData} = useContext(DatabaseContext)
    const {query} = useParams() 
    
    

    return(
        currentUserData ? (
            <>
                <Header/>
                <div className="bg-navy max-w-990px mx-auto mt-10 px-2 flex flex-col items-start text-white">
                    <div className="SEARCHTERM w-full text-center text-5xl max-w-625px mb-10">
                        #{query}
                    </div>
                    <div className="FEED flex items-end flex-col w-full max-w-625px">
                        {photos
                            .filter(photo=>
                                photo.caption.includes(query) ||
                                photo.username.includes(query) ||
                                photo.hashTags.includes(query)
                            )
                            .sort((a,b)=>b.dateCreated-a.dateCreated)
                            .map((item, index)=>(
                                <Post key={index} item={item} currentUserData={currentUserData}/>
                            ))
                        }
                    </div>
                </div>
            </>
        ) : (
            <div>Loading...</div>
        )
    )
}

export default Search