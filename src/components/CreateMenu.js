import React, {useContext} from 'react'
import {DatabaseContext} from '../context/databaseContext'

function CreateMenu() {
    const {setIsCreateMenuOpen} = useContext(DatabaseContext)

    return (




            <div className="POSTINGMENU hidden lg:flex relative justify-between text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                <div className="absolute top-0 -left-20 w-16 h-16">
                    
                    <img 
                        className="sticky top-16 rounded"
                        alt="avatar" 
                        src="https://assets.tumblr.com/images/default_avatar/cube_open_64.png"/>
                </div>
                <div onClick={()=>setIsCreateMenuOpen(true)} className="cursor-pointer w-16 h-16 py-1 flex flex-col items-center">
                    <svg className="transform duration-200 hover:-translate-y-1" viewBox="0 0 20.8 13" width="40" height="35" fill="black"><path d="M.1 13h2.8l.9-3h4.7l.8 3h2.9L7.7 0h-3L.1 13zm6-10.1l2 5.1H4.2l1.9-5.1zM20 10V6c0-1.1-.2-1.9-1-2.3-.7-.5-1.7-.7-2.7-.7-1.6 0-2.7.4-3.4 1.2-.4.5-.6 1.2-.7 2h2.4c.1-.4.2-.6.4-.8.2-.3.6-.4 1.2-.4.5 0 .9.1 1.2.2.3.1.4.4.4.8 0 .3-.2.5-.5.7-.2.1-.5.2-1 .2l-.9.1c-1 .1-1.7.3-2.2.6-.9.5-1.4 1.3-1.4 2.5 0 .9.3 1.6.8 2 .6.5 1.3.9 2.2.9.7 0 1.2-.3 1.7-.6.4-.2.8-.6 1.2-.9 0 .2 0 .4.1.6 0 .2.1.8.2 1h2.7v-.8c-.1-.1-.3-.2-.4-.3.1-.3-.3-1.7-.3-2zm-2.2-1.1c0 .8-.3 1.4-.7 1.7-.4.3-1 .5-1.5.5-.3 0-.6-.1-.9-.3-.2-.2-.4-.5-.4-.9 0-.5.2-.8.6-1 .2-.1.6-.2 1.1-.3l.6-.1c.3-.1.5-.1.7-.2.2-.1.3-.1.5-.2v.8z"></path></svg>
                    <div>Text</div>
                </div>
                <div onClick={()=>setIsCreateMenuOpen(true)}  className="cursor-pointer w-16 h-16 py-1 flex flex-col items-center">
                    <svg className="transform duration-200 hover:-translate-y-1" viewBox="0 0 17 15" width="40" height="35" fill="red"><path d="M14.6 1h-2.7l-.6-1h-6l-.6 1H2.4C1.1 1 0 2 0 3.3v9.3C0 13.9 1.1 15 2.4 15h12.2c1.3 0 2.4-1.1 2.4-2.4V3.3C17 2 15.9 1 14.6 1zM8.3 13.1c-2.9 0-5.2-2.3-5.2-5.1s2.3-5.1 5.2-5.1c2.9 0 5.2 2.3 5.2 5.1s-2.3 5.1-5.2 5.1zm5.9-8.3c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c0 .6-.5 1.1-1.1 1.1zm-10 3.1c0 1.2.5 2.2 1.3 3 0-.2 0-.4-.1-.6 0-2.2 1.8-4 4.1-4 1.1 0 2 .4 2.8 1.1-.3-2-2-3.4-4-3.4-2.2-.1-4.1 1.7-4.1 3.9z"></path></svg>
                    <div>Photo</div>
                </div>
                <div onClick={()=>setIsCreateMenuOpen(true)}  className="cursor-pointer w-16 h-16 py-1 flex flex-col items-center">
                    <svg className="transform duration-200 hover:-translate-y-1" viewBox="0 0 17 13" width="40" height="35" fill="orange"><path d="M3.5 5.5C4 3.7 5.8 2.4 7.2 1.3L5.9 0C3 1.8 0 5 0 8.5 0 11 1.3 13 4 13c2 0 3.7-1.5 3.7-3.6C7.7 7 6 5.5 3.5 5.5zm9.3 0c.4-1.8 2.2-3.1 3.7-4.2L15.2 0c-2.8 1.8-5.9 5-5.9 8.5 0 2.4 1.3 4.5 4 4.5 2 0 3.7-1.5 3.7-3.6 0-2.4-1.7-3.9-4.2-3.9z"></path></svg>
                    <div>Quote</div>
                </div>
                <div onClick={()=>setIsCreateMenuOpen(true)}  className="cursor-pointer w-16 h-16 py-1 flex flex-col items-center">
                    <svg className="transform duration-200 hover:-translate-y-1" viewBox="0 0 17 17" width="40" height="35" fill="green"><path d="M9.9 5.1c-.2.3-.5 1.4-.6 2.6l1.1-.1c.7-.1 1.3-.3 1.5-.5.6-.6.6-1.4 0-2-.6-.5-1.4-.5-2 0zM8.5 0C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zm4.4 8.2c-.5.5-1.5.8-2.5.9l-1.2.2c-.1 1.3-.4 2.9-1 3.6-1.1 1.1-3 1.2-4.1 0-1.1-1.1-1.1-3 0-4.1.5-.5 1.5-.8 2.6-.9v1.5c-1.2.3-1.5.5-1.6.5-.6.6-.6 1.4 0 2 .5.5 1.4.5 2 0 .2-.2.5-1.1.6-2.5l.1-.9c0-1.3.2-3.6 1-4.4 1.1-1.1 3-1.2 4.1 0 1.2 1.1 1.2 2.9 0 4.1z"></path></svg>
                    <div>Link</div>
                </div>
                <div className="w-16 h-16 py-1 flex flex-col items-center">
                    <svg viewBox="0 0 18.7 17" width="40" height="35" fill="blue"><path d="M16 6.1V2.6C16 .8 15 0 13.1 0H2.9C1 0 0 1.1 0 3.3v10.4C0 15.9 1 17 2.9 17h10.2c1.9 0 2.9-.8 2.9-2.6v-2.9l2.7-2.9c0-.1-2.7-2.5-2.7-2.5zm-4.5-.7c0-.5.3-.8.7-.8s.8.3.8.8v1.7l-.3 2.5c0 .3-.2.4-.4.4s-.4-.1-.4-.4l-.3-2.5V5.4zm-3.8 6.4c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V9.1C6.3 8.4 6 8 5.4 8c-.5 0-1 .4-1 1.2v2.6c0 .4-.1.8-.7.8s-.7-.4-.7-.8V5.4c0-.5.3-.8.7-.8.4 0 .7.3.7.8v2.1c.3-.4.7-.8 1.5-.8s1.7.5 1.7 2c.1.1.1 3.1.1 3.1zm2.5 0c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V7.5c0-.4.1-.8.7-.8.5 0 .7.4.7.8v4.3zm-.7-5.6c-.4 0-.7-.4-.7-.8s.3-.8.7-.8c.4 0 .7.4.7.8s-.3.8-.7.8zm2.8 6.3c-.4 0-.8-.4-.8-.9s.3-.9.8-.9.8.4.8.9-.4.9-.8.9z"></path></svg>
                    <div>Chat</div>
                </div>
                <div className="w-16 h-16 py-1 flex flex-col items-center">
                    <svg viewBox="0 0 19 16" width="40" height="35" fill="purple"><path d="M17.7 7.3c-.4-4.4-4-7.3-8.3-7.3-4.3 0-7.9 2.9-8.3 7.4C.5 7.4 0 8 0 8.6v5c0 .8.6 1.4 1.3 1.4H4c.2.4.8 1 1.2 1 .6 0 .8-1 .8-1.6V7.8c0-.5-.2-1.6-.8-1.6-.4 0-1 .8-1.2 1.1H2.9c.4-3.5 3.2-5.6 6.5-5.6s6.2 2.1 6.5 5.6H15c0-.3-.7-1.1-1.1-1.1-.6 0-.9 1-.9 1.6v6.6c0 .5.3 1.6.9 1.6.4 0 1.1-.6 1.2-1h2.6c.7 0 1.3-.6 1.3-1.3v-5c0-.8-.6-1.3-1.3-1.4zM3 8.5v1l-2 1.3V8.5h2zm15 .9l-2 1.3V8.5h2v.9zm-6.4.3l-1.6.5V6.4c0-.1-.1-.2-.2-.2s-.2 0-.2.1L7.2 12v.2c.1.1.1.1.2.1L9 12v3.8c0 .1-.2.2-.1.2h.3c.1 0 .2 0 .2-.1l2.4-5.9v-.2c-.1-.1-.2-.1-.2-.1z"></path></svg>
                    <div>Audio</div>
                </div>
                <div className="w-16 h-16 py-1 flex flex-col items-center">
                    <svg viewBox="0 0 16 15" width="40" height="35" fill="pink"><path d="M15.7 7.8c-.2-.1-.5 0-.6.1l-2.9 2.2c-.1.1-.1.1-.2.1V8H0v3h2v3.2c0 .4.3.8.8.8h8.4c.5 0 .8-.4.8-.8V12c0 .1.1.2.2.2l2.9 2.2c.2.2.4.2.6.1.2-.1.3-.3.3-.5V8.4c0-.2-.1-.5-.3-.6zM2.8 6.9c.3 0 .8.1 1.1.1h5.5c.3 0 .8-.1 1-.1 1.6-.3 2.8-1.7 2.8-3.4 0-1.9-1.6-3.5-3.5-3.5-1.2 0-2.4.6-3 1.7h-.1C5.9.6 4.8 0 3.6 0 1.6 0 0 1.6 0 3.5c0 1.7 1.2 3 2.8 3.4zM9 4.2c1 0 1.8-.8 1.8-1.8v-.3c.4.3.6.8.6 1.4 0 1-.8 1.8-1.8 1.8-.9 0-1.6-.6-1.8-1.5.3.3.7.4 1.2.4zm-6.2.1c1 0 1.8-.8 1.8-1.8v-.3c.4.2.6.7.6 1.3 0 1-.8 1.8-1.8 1.8-.9 0-1.6-.6-1.8-1.5.3.3.7.5 1.2.5z"></path></svg>
                    <div>Video</div>
                </div>
            </div>
    )
}

export default CreateMenu