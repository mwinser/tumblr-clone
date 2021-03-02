import React, {useEffect, useState} from 'react'
import {database} from '../lib/firebase'


function Feed() {
    
    const [feed, setFeed] = useState([])

    const getPhotos = async () => {
        const response = await database.photos.get()
        response.docs.forEach(doc=>setFeed(prevFeed=> [...prevFeed,doc.data()]))
    }

    useEffect(()=>{
        getPhotos();
    },[])
   



    return(
        <div className="FEED w-2/3 flex items-end flex-col">
            <div className="POSTINGMENU text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                <h1 className="text-4xl">Posting Options</h1>
            </div>
            {feed.map((item)=>(
                <div className="POSTS text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                    <h2>Posted by {item.userId}</h2>
                    <img src={item.imageSrc}/>
                    <p>{item.caption}</p>
                </div>
            ))}


        </div>
    )
}

export default Feed