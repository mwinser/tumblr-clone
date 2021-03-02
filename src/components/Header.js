import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {Context} from '../context/Context'

function Header(){
    const {currentUser} = useContext(Context)
    return (
        <header className="sticky top-0 left-0 z-50 bg-navy border-b-2 border-white border-opacity-10">
            <div className="flex items-center justify-between h-14 max-w-screen-2xl text-white  mx-auto, pl-6 pr-5">
                <div className="flex flex-start">
                    <p className="text-5xl font-bold pr-4">
                    t
                    </p>
                    <input type="text" placeholder="Search" className="w-full bg-transparent bg-white bg-opacity-25 rounded placeholder-gray-100 p-1 m-2"/>
                </div>
                <div className="flex justify-end items-center fill-current opacity-70">
                    <div className="mx-4">
                        <Link to={ROUTES.DASHBOARD}>
                            <svg width="20" height="21" viewBox="0 0 20 21">
                                <path d="M19.55 8.117L10.567.157a.967.967 0 0 0-1.056 0L.528 8.117C.211 8.327 0 8.746 0 9.06v11.312c0 .314.317.628.634.628H6.34v-6.389c0-.524.423-.943.952-.943h5.389c.528 0 .951.42.951.943V21h5.706c.317 0 .635-.314.635-.628V9.06c.105-.314-.106-.838-.423-.943">
                                </path>
                            </svg>
                        </Link>
                    </div>
                    <div className="mx-4">
                    <svg viewBox="0 0 21.8 21.8" width="22" height="22" fill="#ffffff"><path d="M10.9 21.8C4.9 21.8 0 16.9 0 10.9S4.9 0 10.9 0s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9zM12 2.1c-.5-.1-1.8-.1-2 0-4.1.4-7.5 3.7-8 7.8-.1.5-.1 1.8 0 2 .4 4.2 3.8 7.6 8 8h2c4.1-.5 7.4-3.8 7.8-8v-2C19.2 5.8 16 2.6 12 2.1zm1.7 11.3c-.1.2-.2.3-.4.4l-6.7 2.5c-.5.2-1.1-.3-.9-.9l2.5-6.7c.1-.2.2-.3.4-.4l6.7-2.5c.5-.2 1.1.3.9.9l-2.5 6.7zm-1.9-3.3c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.7 0 .4-.4.4-1.2 0-1.7z"></path></svg>
                    </div>
                    <div className="mx-4">
                    <svg viewBox="0 0 23 16.9" width="23" height="21"><path d="M20.9 0H2.1C.6 0 0 .7 0 2.2v12.5c0 1.6.6 2.2 2.1 2.2h18.8c1.5 0 2.1-.7 2.1-2.2V2.2C23 .7 22.4 0 20.9 0zm.4 13.6c.3.3-.2.8-.5 1.1-.1.2-.3.5-.5.5s-.2.1-.3-.1l-5.5-5-.6.5c-.7.6-1.6 1.1-2.4 1.1-.9 0-1.7-.4-2.4-1.1l-.6-.6-5.2 4.8c-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-.3-.3-.8-1-.5-1.3l5.1-4.9-5-5c-.3-.3.1-.8.3-1.1.3-.3.8-.4 1.1-.2L10 8.9c.4.4.9.8 1.4.9.6 0 1.1-.4 1.6-.9l6.6-6.7c.3-.3.9 0 1.2.3.3.3.4 1 .2 1.2l-4.9 4.8 5.2 5.1z"></path></svg>
                    </div>
                    <div className="mx-4">
                    <svg viewBox="0 0 21 21" width="22" height="22" fill="#ffffff"><path d="M10.5 0C4.7 0 0 4.722 0 10.55c0 2.21.7 4.22 1.8 5.828l-.7 4.12 4.5-.704C7.1 20.598 8.8 21 10.5 21 16.3 21 21 16.278 21 10.45S16.3 0 10.5 0zM5.9 7.636c0-.904.8-1.708 1.7-1.708.9 0 1.7.804 1.7 1.708 0 .905-.8 1.708-1.7 1.708-.9 0-1.7-.803-1.7-1.708zm4.6 8.44c-2.1 0-3.9-1.105-4.6-2.712-.3-.603.3-1.307 1.1-1.307h6.8c.8 0 1.4.704 1.1 1.307-.5 1.607-2.3 2.713-4.4 2.713zm2.9-6.832c-.9 0-1.7-.804-1.7-1.708 0-.904.8-1.708 1.7-1.708.9 0 1.7.804 1.7 1.708 0 .904-.7 1.708-1.7 1.708z"></path></svg>
                    </div>
                    <div className="mx-4">
                    <svg viewBox="0 0 13.8 19.6" width="14" height="21"><path d="M3.5 19.5c-.1 0-.2-.1-.2-.1-.6-.3-.9-.9-.7-1.5l2.2-5.8H1.3c-.1 0-.3 0-.4-.1-.4-.1-.6-.3-.8-.6-.2-.4-.2-1 .2-1.4L8.9.5c.3-.4.9-.6 1.4-.4.1 0 .2.1.2.1.6.3.9.9.7 1.5L9 7h3.5c.1 0 .3 0 .4.1.4.1.6.5.7.8.2.4.2 1-.2 1.4L4.8 19c-.2.3-.6.5-1 .5 0 .1-.2.1-.3 0z"></path></svg>
                    </div>
                    <Link to={`${ROUTES.PROFILE}/${currentUser.email}`}>
                        <div className="mx-4">
                            <svg viewBox="0 0 15 18.9" width="15" height="21"><path d="M7.5 8.8c2.6 0 4.7-2 4.7-4.4S10.1 0 7.5 0 2.8 2 2.8 4.4C2.9 6.8 5 8.8 7.5 8.8zm0 1.5c-4.2 0-7.5 3.2-7.5 7.4 0 .6.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2 0-4.1-3.3-7.4-7.5-7.4z"></path></svg>
                        </div>
                    </Link>
                    
                    <div className="mx-4">
                    <svg viewBox="0 0 16.8 16.8" width="22" height="22"><path d="M1.2 11.9l-1.2 5 5-1.2 8.2-8.2-3.8-3.8-8.2 8.2zM10 6.3l-6.2 6.2-.6-.6 6.2-6.2c0-.1.6.6.6.6zM13.1 0l-2.5 2.5 3.7 3.7 2.5-2.5L13.1 0z"></path></svg>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header