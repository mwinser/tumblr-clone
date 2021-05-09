import React, {useContext} from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import {DatabaseContext} from '../context/databaseContext'


function Recommended() {
    const {photos, currentUserData} = useContext(DatabaseContext)
    return (
        <>
            <Header/>
            <div className="bg-navy max-w-990px mx-auto mt-10 px-2 flex items-start text-white">
                
                <div className="FEED flex items-end flex-col w-full max-w-625px">
                    <div className="w-full flex flex-col">
                        <div>
                            <div className="flex font-bold text-lg mb-5">
                                {[
                                    {title: "For You", icon: "💖"},
                                    {title: "Trending", icon: "🚀"},
                                    {title: "Staff Picks", icon: "🌟"}
                                ].map(item => {
                                    return (
                                        <div className="flex px-4 py-3.5 border-b border-blue-300">
                                            <div>
                                                {item.title}
                                            </div>
                                            <div className="ml-2">
                                                {item.icon}
                                            </div>
                                        </div>
                                    )
                                    })
                                }
                                <div className="flex items-center px-4 py-3.5 border-b border-gray-500">
                                    <div>
                                        More
                                    </div>
                                    <svg className="bg-white rounded-full ml-2 p-0.5" viewBox="0 0 13 20.1" style={{transform: "rotate(90deg)"}} width="15" height="15" fill="#001935"><path d="M0 2.9l7.2 7.2-7.1 7.1L3 20.1l7.1-7.1 2.9-2.9L2.9 0 0 2.9"></path></svg>
                                </div>
                                <div className="flex px-4 py-3.5 flex-1 border-b border-gray-500">
                                    <div>
                                        {`      `}
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex justify-between mb-5">
                            {[
                                {tag: "#art", color: "yellow"},
                                {tag: "#illustration", color: "green"},
                                {tag: "#biology", color: "indigo"},
                                {tag: "#space", color: "red"}
                            ].map(item => {
                                return (
                                    <div className={`bg-${item.color||"blue"}-500 flex flex-col p-2 mr-5 rounded mb-5`}>
                                        <div className={`mb-2 ${item.color === "yellow"? `text-black`:null}`}>
                                            {item.tag}
                                        </div>
                                        <div className="flex">
                                            <div className="w-14 h-24 bg-white rounded mr-2">pic</div>
                                            <div className="w-14 h-24 bg-white rounded m1-2">pic</div>
                                        </div>
                                        <div className={`py-2 px-5 mt-2 text-center ${item.color === "yellow"? `bg-black`:`bg-white`} font-bold text-${item.color||"blue"}-500 rounded`}>Follow</div>
                                    </div>
                                    )
                                })
                            }
                        
                        </div>
                    </div>
                {currentUserData && photos
                    .filter((photo)=>photo.username!==currentUserData.username)
                    .sort((a,b)=>b.dateCreated-a.dateCreated)
                    .map((item, index)=>(
                        <Post key={index} item={item} 
                        currentUserData={currentUserData}
                        />
                    ))
                }
                </div>
                <div className="SIDEBAR relative flex-1 max-w-320px flex flex-col flex-start ml-8 w-80">
                    <div className="w-full bg-gray-400 bg-opacity-10 rounded mb-4">
                        <div className="flex justify-between border-b border-gray-600 p-4">
                            <div className="font-bold text-lg">
                                Following
                            </div>
                            <div className="font-bold text-blue-400">
                                Edit
                            </div>
                        </div>
                        {[
                            {tag: "#curators", posts: "5"},
                            {tag: "#design", posts: "740"},
                            {tag: "#movies", posts: "520"},
                            {tag: "#science", posts: "243"}
                        ].map(item=>{
                            return (
                                <div className="flex items-center p-4">
                                    <div className="bg-gray-200 mr-4 w-16 h-11 rounded"></div>
                                    <div className="flex flex-col">
                                        <div className="font-bold">
                                            {item.tag}
                                        </div>
                                        <div className="text-gray-400">
                                            <b>{item.posts}</b> recent posts
                                        </div>
                                    </div>
                                </div>
                            )
                            })
                        }
                                                
                        <div className="flex justify-center border-t border-gray-600 mt-2 p-4">
                            <div className="font-bold text-blue-400">
                                Show more tags
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-gray-400 bg-opacity-10 rounded mt-4 mb-4">
                        <div className="flex border-b border-gray-600 p-4">
                            <div className="font-bold text-lg">
                                Check out these blogs
                            </div>
                        </div>

                        {[
                            "keanuforever", 
                            "danknaturememes", 
                            "justquails", 
                            "winser"
                        ].map((userName)=> {
                            return (
                                <div className="flex justify-between">
                                    <div className="flex items-center p-2">
                                        <div className="bg-gray-200 mr-4 w-16 h-11 rounded"></div>
                                        <div className="flex flex-col">
                                            <div className="font-bold">
                                                {userName}
                                            </div>
                                            <div className="text-gray-400">
                                                Untitled
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center pr-3.5">
                                        <div className="mr-2.5 text-blue-400">Follow</div>
                                    </div>
                                </div>)
                        })}
                        
                        <div className="flex justify-center border-t border-gray-600 mt-2 p-4">
                            <div className="font-bold text-blue-400">
                                Show more blogs
                            </div>
                        </div>
                    </div>
                    
                </div>
                


            </div>
            
        </>
    )
}

export default Recommended