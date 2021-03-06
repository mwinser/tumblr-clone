import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {DatabaseContext} from '../context/databaseContext'
import {Context} from '../context/Context'


function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()
    const {photos, currentUserData} = useContext(DatabaseContext)
    const {logout} = useContext(Context)

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push(ROUTES.LOGIN)
        } catch (error) {
            setError(error.message)
        }
    }

    function handleSubmitSearch (e) {
        e.preventDefault()
        history.push(`${ROUTES.SEARCH}/${search}`)
    }

    function toggleMenu () {
        setIsMenuOpen(prevState=>!prevState)
    }

    return (
        currentUserData ? (
        <header className="sticky top-0 left-0 z-50 bg-navy border-b-2 border-white border-opacity-10">
            <div className="relative flex items-center justify-between h-14 text-white  mx-auto, pl-6 pr-5">
                
                <div className="flex m-2 p-1 justify-center items-center">
                        <Link to={ROUTES.DASHBOARD}>
                            <svg viewBox="0 0 21 36.8" width="20" height="33" fill="white">
                                <path d="M21 36.75h-6.2c-5.577 0-9.733-2.844-9.733-9.646V16.21H0v-5.9C5.576 8.876 7.909 4.12 8.177 0h5.79v9.354h6.757v6.856h-6.756v9.486c0 2.843 1.448 3.826 3.753 3.826h3.271L21 36.75z"></path>
                            </svg>
                        </Link>
                        <form 
                            className="flex justify-center items-center bg-transparent bg-white bg-opacity-25 rounded w-96 m-4 mb-3"
                            onSubmit={e=>handleSubmitSearch(e)}
                        >
                            <svg className="ml-3 mr-1"width="18" height="18" viewBox="0 0 14 14" fill="darkgray"><path d="M1.676 5.7c0-2.2 1.873-4 4.042-4 2.268 0 4.043 1.8 4.043 4s-1.775 4-4.043 4c-2.169 0-4.042-1.8-4.042-4zm11.732 6.4L10.352 9c.69-.9 1.085-2.1 1.085-3.3 0-3.1-2.564-5.7-5.719-5.7C2.563 0 0 2.6 0 5.7s2.563 5.7 5.718 5.7c1.085 0 2.17-.4 3.057-.9l3.253 3.2c.197.2.493.3.789.3.296 0 .591-.1.789-.3.197-.2.394-.5.394-.8 0-.3-.296-.5-.592-.8z"></path></svg>
                            <input 
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                                type="text" 
                                placeholder="Search Tumblr" 
                                className="flex-1 bg-transparent rounded placeholder-gray-400 p-1"
                            />
                            <input 
                                type="submit" 
                                style={{display:"none"}} 
                            />
                        </form>
                        
                    </div>
                
                
                <div className="flex justify-end items-center fill-current">
                    <div className="mx-4 opacity-70">
                        <Link to={ROUTES.DASHBOARD}>
                            <svg width="20" height="21" viewBox="0 0 20 21">
                                <path d="M19.55 8.117L10.567.157a.967.967 0 0 0-1.056 0L.528 8.117C.211 8.327 0 8.746 0 9.06v11.312c0 .314.317.628.634.628H6.34v-6.389c0-.524.423-.943.952-.943h5.389c.528 0 .951.42.951.943V21h5.706c.317 0 .635-.314.635-.628V9.06c.105-.314-.106-.838-.423-.943">
                                </path>
                            </svg>
                        </Link>
                    </div>
                    <div className="mx-4 opacity-70">
                        <Link to={ROUTES.RECOMMENDED}>
                            <svg viewBox="0 0 21.8 21.8" width="22" height="22" fill="#ffffff"><path d="M10.9 21.8C4.9 21.8 0 16.9 0 10.9S4.9 0 10.9 0s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9zM12 2.1c-.5-.1-1.8-.1-2 0-4.1.4-7.5 3.7-8 7.8-.1.5-.1 1.8 0 2 .4 4.2 3.8 7.6 8 8h2c4.1-.5 7.4-3.8 7.8-8v-2C19.2 5.8 16 2.6 12 2.1zm1.7 11.3c-.1.2-.2.3-.4.4l-6.7 2.5c-.5.2-1.1-.3-.9-.9l2.5-6.7c.1-.2.2-.3.4-.4l6.7-2.5c.5-.2 1.1.3.9.9l-2.5 6.7zm-1.9-3.3c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.7 0 .4-.4.4-1.2 0-1.7z"></path></svg>
                        </Link>
                    </div>
                    <div className="mx-4 opacity-70">
                        <Link to={ROUTES.INBOX}>
                            <svg viewBox="0 0 23 16.9" width="23" height="21"><path d="M20.9 0H2.1C.6 0 0 .7 0 2.2v12.5c0 1.6.6 2.2 2.1 2.2h18.8c1.5 0 2.1-.7 2.1-2.2V2.2C23 .7 22.4 0 20.9 0zm.4 13.6c.3.3-.2.8-.5 1.1-.1.2-.3.5-.5.5s-.2.1-.3-.1l-5.5-5-.6.5c-.7.6-1.6 1.1-2.4 1.1-.9 0-1.7-.4-2.4-1.1l-.6-.6-5.2 4.8c-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-.3-.3-.8-1-.5-1.3l5.1-4.9-5-5c-.3-.3.1-.8.3-1.1.3-.3.8-.4 1.1-.2L10 8.9c.4.4.9.8 1.4.9.6 0 1.1-.4 1.6-.9l6.6-6.7c.3-.3.9 0 1.2.3.3.3.4 1 .2 1.2l-4.9 4.8 5.2 5.1z"></path></svg>
                        </Link>
                    </div>
                    <div className="mx-4 opacity-70">
                        <svg viewBox="0 0 21 21" width="22" height="22" fill="#ffffff"><path d="M10.5 0C4.7 0 0 4.722 0 10.55c0 2.21.7 4.22 1.8 5.828l-.7 4.12 4.5-.704C7.1 20.598 8.8 21 10.5 21 16.3 21 21 16.278 21 10.45S16.3 0 10.5 0zM5.9 7.636c0-.904.8-1.708 1.7-1.708.9 0 1.7.804 1.7 1.708 0 .905-.8 1.708-1.7 1.708-.9 0-1.7-.803-1.7-1.708zm4.6 8.44c-2.1 0-3.9-1.105-4.6-2.712-.3-.603.3-1.307 1.1-1.307h6.8c.8 0 1.4.704 1.1 1.307-.5 1.607-2.3 2.713-4.4 2.713zm2.9-6.832c-.9 0-1.7-.804-1.7-1.708 0-.904.8-1.708 1.7-1.708.9 0 1.7.804 1.7 1.708 0 .904-.7 1.708-1.7 1.708z"></path></svg>
                    </div>
                    <div className="mx-4 opacity-70">
                        <svg viewBox="0 0 13.8 19.6" width="14" height="21"><path d="M3.5 19.5c-.1 0-.2-.1-.2-.1-.6-.3-.9-.9-.7-1.5l2.2-5.8H1.3c-.1 0-.3 0-.4-.1-.4-.1-.6-.3-.8-.6-.2-.4-.2-1 .2-1.4L8.9.5c.3-.4.9-.6 1.4-.4.1 0 .2.1.2.1.6.3.9.9.7 1.5L9 7h3.5c.1 0 .3 0 .4.1.4.1.6.5.7.8.2.4.2 1-.2 1.4L4.8 19c-.2.3-.6.5-1 .5 0 .1-.2.1-.3 0z"></path></svg>
                    </div>
                    
                    <div className="mx-4 opacity-70" onClick={()=>toggleMenu()}>
                        <svg viewBox="0 0 15 18.9" width="15" height="21"><path d="M7.5 8.8c2.6 0 4.7-2 4.7-4.4S10.1 0 7.5 0 2.8 2 2.8 4.4C2.9 6.8 5 8.8 7.5 8.8zm0 1.5c-4.2 0-7.5 3.2-7.5 7.4 0 .6.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2 0-4.1-3.3-7.4-7.5-7.4z"></path></svg>
                    </div>
                    
                    <Link to={ROUTES.CREATE_POST}>
                        <div className="mx-4 py-1.5 px-3 bg-blue-400 rounded">
                            <svg viewBox="0 0 16.8 16.8" width="22" height="22" fill="#001935"><path d="M1.2 11.9l-1.2 5 5-1.2 8.2-8.2-3.8-3.8-8.2 8.2zM10 6.3l-6.2 6.2-.6-.6 6.2-6.2c0-.1.6.6.6.6zM13.1 0l-2.5 2.5 3.7 3.7 2.5-2.5L13.1 0z"></path></svg>
                        </div>
                    </Link>
                    
                </div>
                <div className={"fixed "+ (!isMenuOpen && "hidden") + " top-0 right-0 mt-12 mr-2.5 w-60 rounded"}>
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
                        <div className="flex">
                            <div className="flex justify-center items-center px-2.5 py-2">
                                <img 
                                    className="rounded w-10 h-10 mr-2.5"
                                    alt="avatar" 
                                    src="https://assets.tumblr.com/images/default_avatar/cube_open_64.png"
                                />
                                <div className="flex-1 flex flex-col text-sm">
                                    <div className="font-bold">{currentUserData.username}</div>
                                    <div className="text-gray-500">Untitled</div>
                                </div>
                            </div>

                        </div>
                        <ul className="flex flex-col ml-11">
                            <li className="flex p-1">
                                <div className="flex-1">Posts</div>
                                <div>{photos.filter(photo=>photo.username===currentUserData.username).length}</div>
                            </li>
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
                    
                </div>
            </div>
        </header>
        ) : (
            <div>Loading {error && error}</div>
        )
    )
}

export default Header