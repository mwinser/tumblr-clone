import { useContext } from "react";
import { Link } from "react-router-dom";
import { DatabaseContext } from "../context/databaseContext";
import * as ROUTES from '../constants/routes'


export default function BlogsToFollowCard() {
    const {photos} = useContext(DatabaseContext)
    return (
        <div className="TAGSTOFOLLOW w-full bg-gray-400 bg-opacity-10 rounded mb-4">
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
                                src={taggedPhotos[0]? taggedPhotos[0].imageSrc : null}
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
    )
}