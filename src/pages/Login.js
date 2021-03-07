import React, {useState, useContext} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {database} from '../lib/firebase'
import {Context} from "../context/Context"
import * as ROUTES from '../constants/routes'

function Login() {
    const {emailAddress, setEmailAddress, login, currentUser} = useContext(Context)
    const history = useHistory()
    const [search, setSearch] = useState('')
    const [emailExists, setEmailExists] = useState(false)
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleEmailSubmit = async (event)=>{
        event.preventDefault()
        setError('')
        if (emailAddress==='') {
            setError('Oops. There was an error. Try again.')
        } else {
            const result = await database.users.where('emailAddress', '==', emailAddress).get();
            if (result.docs.length ===0) {
                history.push(ROUTES.SIGN_UP)
            } else {
                setEmailExists(true)   
            }
        }
    }
 
    const handlePasswordSubmit = async (event) => {
        event.preventDefault();
        setError('')
        
        try {
            await login(emailAddress, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    }

    function handleSubmitSearch (e) {
        e.preventDefault()
        history.push(`${ROUTES.SEARCH}/${search}`)
    }
    

    return (
        <div className="w-screen h-screen relative bg-login bg-cover flex flex-col justify-center items-center">
            <div  className="flex justify-center fixed top-0 left-0 h-8 w-full bg-transparent mt-2 px-2"> 
                <nav className=" max-w-screen-2xl w-full flex justify-between items-center">
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
                                    className="flex-1 bg-transparent rounded text-gray-400 placeholder-gray-400 p-1"
                                />
                                <input 
                                    type="submit" 
                                    style={{display:"none"}} 
                                />
                            </form>
                            
                        </div>

                    <button className={`rounded p-2 font-bold ${emailExists? "bg-green-500" : "bg-blue-300"}`}>
                    <Link to={emailExists ? ROUTES.LOGIN : ROUTES.SIGN_UP }>
                        {emailExists ? "Log in" : "Sign up"}
                    </Link></button>
                </nav>
            </div>
            <div className="max-w-sm p-8 flex flex-col justify-center align-center">
                
                <svg className="mb-2" width="320" height="56" viewBox="0 0 400 81.897" fill="white"><path d="M17.241 1.571c0 6.328-6.682 15.885-13.371 19.123L0 22.568v13.639h10.177l.321 15.302c.528 25.205 4.083 29.417 25.493 30.206l10.561.39v-17.45h-5.643c-9.171 0-9.875-1.163-9.875-16.34V36.207H45.69V19.828H31.034V0h-6.896c-6.097 0-6.897.182-6.897 1.571m219.828 5.326v6.896h8.621v68.104h18.965v-2.156c0-2.617-.019-2.616 3.996-.248 5.368 3.167 17.807 3.327 23.979.307 10.27-5.025 13.836-12.594 13.836-29.369 0-21.321-7.683-30.677-25.1-30.566-5.257.034-8.013.638-13.478 2.956-1.394.591-1.509-.25-1.509-11.091V0h-29.31v6.897m71.552 0v6.896h8.62v54.31h-6.896v13.794h34.483V68.103h-7.759V0h-28.448v6.897M53.606 42.457c.348 25.726 1.055 28.895 7.717 34.597 7.88 6.745 25.797 6.506 33.194-.443l2.035-1.912v7.198h23.276V68.103h-6.035V19.828H86.207v14.655h7.759v11.292c0 15.732-2.335 19.742-11.493 19.742-7.195 0-7.473-.932-7.473-25.116V19.828H53.3l.306 22.629M125 27.155v7.328h8.621v33.62h-6.897v13.794h33.621V68.103h-6.897V56.869c0-15.754 1.962-19.662 10.272-20.46 7.808-.751 8.694 1.07 8.694 17.862v13.832h-6.897v13.794H200V68.103h-6.897V55.992c0-9.14.321-12.733 1.308-14.641 2.687-5.195 10.458-6.804 14.808-3.066l2.419 2.079.275 13.87.275 13.869h-7.016v13.794h33.621V68.103h-6.896V53.547c0-17.777-1.01-21.846-6.873-27.709-8.058-8.057-24.92-8.285-33.229-.448l-2.956 2.787-1.963-2.133c-7.299-7.936-23.087-8.407-33.49-.999l-2.524 1.797v-7.014H125v7.327m225 0v7.328h7.759v33.62h-6.897v13.794h33.621V68.103h-7.13l.412-10.678c.613-15.922 3.54-19.494 15.972-19.494H400V19.828h-6.062c-6.77 0-11.229 1.486-14.843 4.948l-2.371 2.271v-7.219H350v7.327m-68.546 10.059c6.507 5.119 6.487 23.55-.031 27.821-8.395 5.5-16.643-2.8-15.712-15.812.828-11.573 8.681-17.564 15.743-12.009"></path></svg>

                <p className="font-bold text-lg text-center text-white mt-2">
                    Make stuff, look at stuff, talk about stuff, find your people.
                </p>
                <p className="text-center text-white">{`Currently signed in as ${currentUser.email}`}</p>
                {currentUser.email==='guest' &&
                    <p className="text-center text-white">Guests cannot post, follow or like.</p>
                }
                {error && 
                    (<p className="text-white text-sm text-center bg-black bg-opacity-25 rounded p-2 m-4">
                        {error}
                    </p>)
                }
                <form onSubmit={emailExists ? handlePasswordSubmit : handleEmailSubmit} method="POST" className="flex flex-col">
                    <input 
                        type="text" 
                        value={emailAddress}
                        placeholder="Email" 
                        className="text-md mt-2 p-2 rounded"
                        onChange={(e)=>setEmailAddress(e.target.value.toLowerCase())}
                    />
                    {emailExists && 
                    (<input 
                        autoFocus
                        type="password" 
                        value={password}
                        placeholder="Password" 
                        className="text-md mt-2 p-2 rounded"
                        onChange={(e)=>setPassword(e.target.value.toLowerCase())}
                        />
                    )}
                    <button 
                        type="submit" 
                        className='bg-blue-300 rounded p-2 font-bold mt-2'
                        >
                        {emailExists ? "Log in" : "Next"}
                    </button>
                </form>
                {emailExists &&
                    (<button 
                        className="bg-green-500 rounded p-2 font-bold mt-2"
                        >
                        Send me a magic link
                    </button>
                    )
                }
                {emailExists &&
                    (<p className="text-white text-sm text-center p-2">
                        <Link to={ROUTES.FORGOT_PASSWORD}>
                            Forgot your password?
                        </Link>
                    </p>
                    )
                }



                <div className="flex justify-around items-center mt-16">
                <img className="w-36 px-0.5" alt="Download on the Apple Store" src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2009-02-25&amp;kind=iossoftware&amp;bubble=ios_apps"/>
                <img className="w-40"alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"/>
                </div>
            </div>
            <footer className="fixed bottom-0 left-0 h-8 flex justify-between items-center w-full bg-transparent mb-2 px-2">
                <div >
                    <ul className="flex text-white justify-around items-center text-sm underline">
                        <li className="p-2">Terms</li>
                        <li className="p-2">Privacy</li>
                        <li className="p-2">Jobs</li>
                        <li className="p-2">Support</li>
                    </ul>
                </div>
                <div className="flex text-white justify-around items-center text-sm">
                    <p className="p-1">Posted by:</p>
                    <p className="underline font-bold p-1">danknaturememes</p>
                    <div className="AVATAR ml-2 mr-3 w-6 h-6">
                        <img 
                            className="rounded"
                            alt="avatar" 
                            src="https://assets.tumblr.com/images/default_avatar/cube_open_64.png"
                        />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Login