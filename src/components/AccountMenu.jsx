import { useContext} from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import { Context } from "../context/Context"
import { DatabaseContext } from "../context/databaseContext"

export default function AccountMenu() {
    
    const {logout} = useContext(Context)
    const {photos, currentUserData} = useContext(DatabaseContext )
    const history = useHistory()

    async function handleLogout() {
        try {
            await logout()
            history.push(ROUTES.LOGIN)
        } catch (error) {
            console.error(error.message)
        }
    }
    
    
    
    return(
        currentUserData ? ( 
        <>
            <div className="flex justify-between items-center bg-gray-200 text-gray-600 py-1 pr-5 pl-2.5 rounded-t">
                <div>
                    Account
                </div>
                {currentUserData.username!=='guest' ? (
                    <div className="cursor-pointer" onClick={()=>handleLogout()}>
                        Log out
                    </div>
                ) : (
                    <div className="cursor-pointer" onClick={()=>history.push(ROUTES.LOGIN)}>
                        Log in
                    </div>
                )}
                
            </div>
            <div className="bg-white text-black py-1 pr-5 pl-2.5">
                <ul className="flex flex-col">
                    <Link to={ROUTES.LIKES}>
                    <li className="flex items-center justify-center">
                        <svg className="mr-2.5" width="20" height="18" viewBox="0 0 20 18" fill="gray"><path d="M17.888 1.1C16.953.38 15.87 0 14.758 0c-1.6 0-3.162.76-4.402 2.139-.098.109-.217.249-.358.42a12.862 12.862 0 0 0-.36-.421C8.4.758 6.84 0 5.248 0 4.14 0 3.06.381 2.125 1.1-.608 3.201-.44 6.925 1.14 9.516c2.186 3.59 6.653 7.301 7.526 8.009.38.307.851.474 1.333.474a2.12 2.12 0 0 0 1.332-.473c.873-.71 5.34-4.42 7.526-8.01 1.581-2.597 1.755-6.321-.968-8.418"></path></svg>
                        <div className="flex-1 py-1">Likes</div>
                        <div>{photos.filter(photo=>photo.likes.some(like=>like===currentUserData.username)).length}</div>
                    </li>
                    </Link>
                    <Link to={ROUTES.FOLLOWING}>
                    <li className="flex items-center justify-center">
                        <svg className="mr-2.5" viewBox="0 0 20 21" width="20" height="21" fill="gray"><path d="M11.5 8.8c0-1.5-1.2-2.8-2.6-2.8-1.4 0-2.6 1.3-2.6 2.8 0 1.5 1.2 2.2 2.6 2.2 1.5 0 2.6-.7 2.6-2.2zM5 16.2v.8h7.7v-.8c0-3-1.7-4.2-3.9-4.2C6.7 12 5 13.2 5 16.2zM16 19H2V4h10V2H2C.9 2 0 2.9 0 4v14.9C0 20.1.9 21 2 21h14.2c1.1 0 1.8-.9 1.8-2.1V8h-2v11zm2-17V0h-2v2h-2v2h2v2h2V4h2V2h-2z"></path></svg>
                        <div className="flex-1 py-1">Following</div>
                        <div>{currentUserData.following.length}</div>
                    </li>
                    </Link>
                    <li className="flex items-center justify-center">
                        <svg className="mr-2.5" width="20" height="20" viewBox="0 0 24 24" fill="gray"><path d="M24 10.526l-.36-.12-2.94-.962-.78-1.925 1.5-3.248-1.92-1.985-.36.18-2.76 1.444-1.86-.782L13.32 0h-2.58l-.12.421-1.08 2.707-1.86.782L4.5 2.346 2.58 4.33l1.56 3.188-.78 1.925L0 10.586v2.828l.36.12 2.94 1.083.78 1.924-1.5 3.309 1.92 1.985.36-.18 2.76-1.444 1.86.781L10.68 24h2.58l.12-.36 1.08-2.587 1.86-.782 3.18 1.564 1.92-1.985-.18-.361-1.38-2.827.78-1.925 3.3-1.203v-3.008H24zM7.2 11.97c0-2.647 2.16-4.812 4.8-4.812 2.64 0 4.8 2.165 4.8 4.812 0 2.647-2.16 4.812-4.8 4.812-2.64 0-4.8-2.165-4.8-4.812z"></path></svg>
                        <div className="flex-1 py-1">Settings</div>
                        
                    </li>
                    <li className="flex items-center justify-center">
                        <svg className="mr-2.5" width="20" height="21" viewBox="0 0 20 21" fill="gray" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.5 2C5.10218 2 4.72064 2.15804 4.43934 2.43934C4.15804 2.72064 4 3.10218 4 3.5C4 3.89782 4.15804 4.27936 4.43934 4.56066C4.72064 4.84196 5.10218 5 5.5 5H8.65402C8.53195 4.68061 8.37741 4.32942 8.18628 3.98192C7.55732 2.83834 6.6939 2 5.5 2ZM11.346 5H14.5C14.8978 5 15.2794 4.84196 15.5607 4.56066C15.842 4.27936 16 3.89782 16 3.5C16 3.10218 15.842 2.72064 15.5607 2.43934C15.2794 2.15804 14.8978 2 14.5 2C13.3061 2 12.4427 2.83834 11.8137 3.98192C11.6226 4.32942 11.4681 4.68061 11.346 5ZM17.6623 5C17.8826 4.53557 18 4.02384 18 3.5C18 2.57174 17.6313 1.6815 16.9749 1.02513C16.3185 0.368749 15.4283 0 14.5 0C12.1939 0 10.8073 1.66166 10.0613 3.01808C10.0405 3.0559 10.0201 3.09369 10 3.13142C9.97994 3.09369 9.95951 3.0559 9.93872 3.01808C9.19268 1.66166 7.8061 0 5.5 0C4.57174 0 3.6815 0.368749 3.02513 1.02513C2.36875 1.6815 2 2.57174 2 3.5C2 4.02384 2.11743 4.53557 2.33772 5H2C0.895431 5 0 5.89543 0 7V10C0 11.1046 0.895431 12 2 12V19C2 20.1046 2.89543 21 4 21H10H16C17.1046 21 18 20.1046 18 19V12C19.1046 12 20 11.1046 20 10V7C20 5.89543 19.1046 5 18 5H17.6623ZM14.5 7H11V10H17H18V7H14.5ZM9 7H5.5H2V10H3H9V7ZM16 19H11V12H16V19ZM9 19V12H4V19H9Z"></path></svg>
                        <div className="flex-1 py-1">What's New</div>
                        
                    </li>
                    <li className="flex items-center justify-center">
                        <svg className="mr-2.5" viewBox="0 0 20 20" width="20" height="20" fill="gray"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM8.7 13.7h2.6v2.5H8.7v-2.5zM14 8.6c-.2.6-.7 1.1-1.2 1.5-.2.2-.5.3-.7.5l-.6.6c-.2.2-.3.5-.3.8v.6H8.9v-.7c0-.5.1-.9.3-1.2.1-.3.3-.6.5-.8l.6-.6c.3-.1.5-.3.7-.5l.5-.5c.1-.2.2-.4.2-.7 0-.5-.1-.9-.4-1.1-.2-.2-.6-.4-1-.4-.3 0-.6.1-.8.2-.3 0-.5.2-.6.4-.2.2-.3.4-.3.7-.1.2-.1.5-.1.8H6c0-.6.1-1.1.3-1.6.2-.5.5-.9.8-1.3.4-.4.8-.7 1.3-.9.5-.2 1.1-.3 1.6-.3.8 0 1.4.1 2 .3.5.2.9.5 1.3.8.3.3.6.7.7 1 .1.4.2.7.2 1 0 .6-.1 1.1-.2 1.4z"></path></svg>
                        <div className="flex-1 py-1">Help</div>
                        
                    </li>
                    <li className="flex items-center justify-center">
                        <svg className="mr-2.5" width="20" height="12" viewBox="0 0 23 14" fill="gray"><path d="M21.225 1c.428 0 .775.347.775.775v10.45a.775.775 0 0 1-.775.775H1.775A.775.775 0 0 1 1 12.225V1.775C1 1.347 1.347 1 1.775 1h19.45m0-1H1.775C.796 0 0 .796 0 1.775v10.45C0 13.204.796 14 1.775 14h19.45c.979 0 1.775-.796 1.775-1.775V1.775C23 .796 22.204 0 21.225 0"></path><path d="M3 3h2v2H3V3zm3 0h2v2H6V3zm3 0h2v2H9V3zm3 0h2v2h-2V3zM3 6h2v2H3V6zm0 3h2v2H3V9zm3-3h2v2H6V6zm3 0h2v2H9V6zm3 0h2v2h-2V6zm3-3h2v2h-2V3zm0 3h5v2h-5V6zm3-3h2v2h-2V3zm0 6h2v2h-2V9zM6 9h11v2H6V9z"></path></svg>
                        <div className="flex-1 py-1">Keyboard Shortcuts</div>
                        
                    </li>
                    <li className="flex items-center justify-center">
                        <svg className="mr-2.5" width="20" height="20" viewBox="0 0 24 24" fill="gray"><path d="M11.933 0C5.326 0 0 5.356 0 12s5.326 12 11.933 12a2.034 2.034 0 0 0 2.022-2.034c0-.542-.202-1.017-.54-1.356-.336-.339-.471-.813-.471-1.356 0-1.085.876-2.034 2.022-2.034h2.36c3.64 0 6.674-2.983 6.674-6.712C23.933 4.814 18.54 0 11.933 0zM4.652 12a2.034 2.034 0 0 1-2.023-2.034c0-1.085.877-2.034 2.023-2.034a2.034 2.034 0 0 1 0 4.068zm3.977-5.288a2.034 2.034 0 0 1-2.022-2.034c0-1.085.876-2.034 2.022-2.034s2.023.881 2.023 2.034c0 1.085-.877 2.034-2.023 2.034zm6.674 0a2.034 2.034 0 0 1-2.022-2.034c0-1.085.876-2.034 2.022-2.034 1.079 0 2.023.881 2.023 2.034-.068 1.085-.944 2.034-2.023 2.034zM19.281 12a2.034 2.034 0 0 1-2.023-2.034c0-1.085.877-2.034 2.023-2.034 1.079 0 2.022.882 2.022 2.034C21.236 11.12 20.36 12 19.281 12z"></path></svg>
                        <div className="flex-1 py-1">Change Palette</div>
                        
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-center bg-gray-200 text-gray-600 py-1 pr-5 pl-2.5">
                <div>
                    Tumblrs
                </div>
                <div>
                    +New
                </div>
            </div>
            <div className="flex flex-col bg-white text-black py-1 pr-5 pl-2.5">
                <Link to={`${ROUTES.BLOG}/${currentUserData.username}`}>
                    <div className="flex">
                        <div className="flex justify-center items-center px-2.5 py-2">
                            <img 
                                className="rounded w-10 h-10 mr-2.5"
                                alt="avatar" 
                                src="https://assets.tumblr.com/images/default_avatar/cube_open_64.png"
                            />
                            <div className="flex-1 flex flex-col text-sm">
                                <div className="font-bold w-40 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                    {currentUserData.username}
                                </div>
                                <div className="text-gray-500 w-40 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                    {currentUserData.subtitle}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <ul className="flex flex-col ml-11">
                    <Link to={`${ROUTES.BLOG}/${currentUserData.username}`}>
                        <li className="flex p-1">
                            <div className="flex-1">Posts</div>
                            <div>{photos.filter(photo=>photo.username===currentUserData.username).length}</div>
                        </li>
                    </Link>
                    <li className="flex p-1">
                        <div className="flex-1">Followers</div>
                    </li>
                    <li className="flex p-1">
                        <div className="flex-1">Activity</div>
                    </li>
                    <li className="flex p-1">
                        <div className="flex-1">Drafts</div>
                    </li>
                    <li className="flex p-1">
                        <div className="flex-1">Queue</div>
                    </li>
                    <li className="flex p-1">
                        <div className="flex-1">Edit Appearance</div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-start gap-2 items-center bg-gray-200 text-gray-600 text-sm py-1 pr-5 pl-2.5 rounded-b">
                <div>
                    About
                </div>
                <div>
                    Apps
                </div>
                <div>
                    Legal
                </div>
                <div>
                    Privacy
                </div>
            </div>
        </>
        ) : (<div>Loading...</div>)
        
    )
}