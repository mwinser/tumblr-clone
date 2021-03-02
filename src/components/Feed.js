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
                <div className="POSTS text-black bg-white w-10/12 rounded mb-5">
                    <div className="HEADER flex justify-between px-5 pt-4 mb-4">
                        <div className="USERNAME font-bold">{item.username}</div>
                        <div className="FOLLOW ml-2">Follow</div>
                        <span className="flex-grow"></span>
                        <div className="MENU">...</div>
                    </div>
                    <div className="IMAGE">
                        <img 
                            className="cover"
                            src={item.imageSrc} 
                            alt="user content"/>
                    </div>
                    <div className="CAPTION my-4 px-5">
                        {item.caption}
                    </div>
                    <div className="HASHTAGS my-2.5 px-5 text-gray-500">
                        #hashtag #post #trending #octothorpe #pound
                    </div>
                    <div className="FOOTER flex justify-between mt-3 px-5 pb-3">
                        <div className="NOTES">
                            3 Notes
                        </div>
                        <div className="ICONS flex justify-between text-gray-500">
                            <div className="ml-5 fill-current">
                            <svg viewBox="0 0 17 17" width="21" height="21" fill="rgba(var(--black), 0.65)"><path d="M2 15l3.17-5.065 4.124-.956c.475-.143.475-.816 0-.96L5.17 7.066 2 2l13 6.5L2 15zm13.894-8.29l-13-6.5A1.996 1.996 0 0 0 .52.655 2 2 0 0 0 .304 3.06L3.71 8.5.303 13.94a2 2 0 0 0 2.59 2.85l13-6.5a2.002 2.002 0 0 0 .001-3.58z"></path></svg>
                            </div>
                            <div className="ml-5 fill-current">
                            <svg viewBox="0 0 17 17" width="21" height="21" fill="rgba(var(--black), 0.65)"><path d="M8.7 0C4.1 0 .4 3.7.4 8.3c0 1.2.2 2.3.7 3.4-.2.6-.4 1.5-.7 2.5L0 15.8c-.2.7.5 1.4 1.2 1.2l1.6-.4 2.4-.7c1.1.5 2.2.7 3.4.7 4.6 0 8.3-3.7 8.3-8.3C17 3.7 13.3 0 8.7 0zM15 8.3c0 3.5-2.8 6.3-6.4 6.3-1.2 0-2.3-.3-3.2-.9l-3.2.9.9-3.2c-.5-.9-.9-2-.9-3.2.1-3.4 3-6.2 6.5-6.2S15 4.8 15 8.3z"></path></svg>
                            </div>
                            <div className="ml-5 fill-current">
                            <svg viewBox="0 0 17 18.1" width="21" height="21" fill="rgba(var(--black), 0.65)"><path d="M12.8.2c-.4-.4-.8-.2-.8.4v2H2c-2 0-2 2-2 2v5s0 1 1 1 1-1 1-1v-4c0-1 .5-1 1-1h9v2c0 .6.3.7.8.4L17 3.6 12.8.2zM4.2 17.9c.5.4.8.2.8-.3v-2h10c2 0 2-2 2-2v-5s0-1-1-1-1 1-1 1v4c0 1-.5 1-1 1H5v-2c0-.6-.3-.7-.8-.4L0 14.6l4.2 3.3z"></path></svg>
                            </div>
                            <div className="ml-5 fill-current">
                            <svg width="23" height="21" viewBox="0 0 20 18" fill="rgba(var(--black), 0.65)"><path d="M14.658 0c-1.625 0-3.21.767-4.463 2.156-.06.064-.127.138-.197.225-.074-.085-.137-.159-.196-.225C8.547.766 6.966 0 5.35 0 4.215 0 3.114.387 2.162 1.117c-2.773 2.13-2.611 5.89-1.017 8.5 2.158 3.535 6.556 7.18 7.416 7.875A2.3 2.3 0 0 0 9.998 18c.519 0 1.028-.18 1.436-.508.859-.695 5.257-4.34 7.416-7.875 1.595-2.616 1.765-6.376-1-8.5C16.895.387 15.792 0 14.657 0h.001zm0 2.124c.645 0 1.298.208 1.916.683 1.903 1.461 1.457 4.099.484 5.695-1.973 3.23-6.16 6.7-6.94 7.331a.191.191 0 0 1-.241 0c-.779-.631-4.966-4.101-6.94-7.332-.972-1.595-1.4-4.233.5-5.694.619-.475 1.27-.683 1.911-.683 1.064 0 2.095.574 2.898 1.461.495.549 1.658 2.082 1.753 2.203.095-.12 1.259-1.654 1.752-2.203.8-.887 1.842-1.461 2.908-1.461h-.001z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Feed