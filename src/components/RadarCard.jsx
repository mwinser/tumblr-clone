import { useContext } from "react";
import { DatabaseContext } from "../context/databaseContext";
import Post from "./Post";

export default function RadarCard() {
    const {photos, currentUserData} = useContext(DatabaseContext)
    return (
        <div className="RADARCARD mb-9 max-w-320px">
            <div className="text-xl font-bold px-2.5 pb-2.5 border-b-2">
                Radar
            </div>
            <div className="p-2">
                {photos
                    .sort((a,b)=>b.likes.length-a.likes.length)
                    .slice(0,1)
                    .map(item=>(
                        <Post key={item.postId} item={item} currentUserData={currentUserData} small={true}/>
                    ))
                }
            </div>
            
        </div>
    )
}