import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Post from '../components/Post'
import SidePost from '../components/SidePost'
import * as ROUTES from '../constants/routes'
import {DatabaseContext} from '../context/databaseContext'


function Recommended() {
    const {blogs, photos, currentUserData} = useContext(DatabaseContext)
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
                                        <div key={item.title} className="flex px-4 py-3.5 border-b border-blue-300">
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
                            {/*tailwind must include the following classNames or build will not include them when dynamically generating classes as below*/}
                            <div className="bg-yellow-400 bg-green-400 bg-indigo-400 bg-red-400 text-yellow-400 text-green-400 text-indigo-400 text-red-400"></div>
                            {[
                                {tag: "birds", color: "yellow"},
                                {tag: "nature", color: "green"},
                                {tag: "art", color: "indigo"},
                                {tag: "space", color: "red"}
                            ].map(item => {
                                const taggedPhotos = photos.filter(photo => photo.hashTags.includes(item.tag))
                                return (
                                    <div key={item.tag + item.color} className={`bg-${item.color||`blue`}-400 flex flex-col p-2 mr-5 rounded mb-5`}>
                                        <div className={`mb-2 ${item.color === `yellow`? `text-black`:null}`}>
                                            #{item.tag}
                                        </div>
                                        <div className="flex">
                                            <div className="w-14 h-24 bg-white rounded mr-2">
                                                <img 
                                                    className="object-cover w-full h-full rounded"
                                                    src={taggedPhotos[0].imageSrc || null}
                                                    alt="tag preview"
                                                />
                                            </div>
                                            <div className="w-14 h-24 bg-white rounded m1-2">
                                            <img 
                                                className="object-cover w-full h-full rounded"
                                                src={taggedPhotos[1].imageSrc || null}
                                                alt="tag preview"
                                            />
                                            </div>
                                        </div>
                                        <div className={`py-2 px-5 mt-2 text-center ${item.color === `yellow`? `bg-black`:`bg-white`} font-bold text-${item.color||`blue`}-400 rounded`}>Follow</div>
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
                            {tag: "birds", posts: "5"},
                            {tag: "nature", posts: "740"},
                            {tag: "movies", posts: "520"},
                            {tag: "science", posts: "243"}
                        ].map(item=>{
                            const taggedPhotos = photos.filter(photo => photo.hashTags.includes(item.tag))
                            return (
                                <div key={item.tag + item.posts} className="flex items-center p-4">
                                    <div className="bg-gray-200 mr-4 w-16 h-11 rounded">
                                        <img 
                                            className="object-cover object-top w-full h-full rounded"
                                            src={taggedPhotos[0].imageSrc}
                                            alt="user content"
                                        />
                                        
                                    </div>
                                    <div className="flex flex-col">
                                        <Link to={`${ROUTES.SEARCH}/${item.tag}`}>
                                            <div className="font-bold hover:underline">
                                                #{item.tag}
                                            </div>
                                        </Link>
                                        
                                        <div className="text-gray-400">
                                            <b>{taggedPhotos.length}</b> recent posts
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
                        <ul className="py-2.5">
                            {currentUserData && blogs.sort((a,b)=>b.followers.length-a.followers.length).slice(0,4).map((blog, index)=>(
                                <SidePost key={`blog${index}`} blog={blog} currentUserData={currentUserData}/>
                            ))}
                        </ul>
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