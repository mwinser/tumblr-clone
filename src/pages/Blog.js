import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {DatabaseContext} from '../context/databaseContext'
import Post from '../components/Post'
import Header from '../components/Header'


function Blog() {
    const {photos} = useContext(DatabaseContext)
    const {blogName} = useParams() 
    
    

    return(
        <>
            <Header/>
            <div className="bg-navy max-w-990px mx-auto mt-10 px-2 flex items-start text-white">
                <div className="FEED flex items-end flex-col w-full max-w-625px">
                    {photos
                        .filter(photo=>photo.username===blogName)
                        .sort((a,b)=>b.dateCreated-a.dateCreated)
                        .map((item, index)=>(
                            <Post key={index} item={item}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Blog