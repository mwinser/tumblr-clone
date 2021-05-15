import { useContext } from "react";
import { Link } from "react-router-dom";
import { DatabaseContext } from "../context/databaseContext";
import SidePost from "./SidePost";
import * as ROUTES from '../constants/routes'


export default function BlogsToFollowCard() {
    const {blogs, currentUserData} = useContext(DatabaseContext)
    return (
        <div className="BLOGSCARD mb-9">
                <div className="text-xl font-bold px-2.5 pb-2.5 border-b-2">
                    Check out these blogs
                </div>
                <ul className="py-2.5">
                    {blogs.sort((a,b)=>b.followers.length-a.followers.length).slice(0,4).map((blog, index)=>(
                        <SidePost key={`blog${index}`} blog={blog} currentUserData={currentUserData}/>
                    ))}
                </ul>
                <div className="mt-3 pl-2.5 text-blue-400">
                    <Link to={ROUTES.RECOMMENDED}>
                        Explore all of Tumblr
                    </Link>
                </div>
            </div>
    )
}