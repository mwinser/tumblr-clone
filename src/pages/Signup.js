import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import {Context} from "../context/Context"
import * as ROUTES from '../constants/routes'

function Signup() {
    const {firebase} = useContext(FirebaseContext)
    const {emailAddress, setEmailAddress, blogName, setBlogName} = useContext(Context)
    const history = useHistory()
    
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isValid = emailAddress !== '' || password !== '' || blogName !== '' 
   

    const handleSubmit = async (event)=>{
        event.preventDefault()
        setError('')
        try {
            const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(emailAddress, password)

            await createdUserResult.user.updateProfile({
                displayName: blogName
            })

            await firebase.firestore().collection('users').add({
                userId: createdUserResult.user.uid,
                username: blogName,
                emailAddress: emailAddress,
                following: [''],
                followers: [''],
                avatar: '1',
                dateCreated: Date.now()
            })

            history.push(ROUTES.DASHBOARD)

        } catch(error) {
            setEmailAddress('')
            setPassword('')
            setError(error.message)
        }

    }
   

    return (
        <div className="container-2xl w-screen h-screen relative bg-login bg-cover flex flex-col justify-center items-center">
            <nav className="fixed top-0 left-0 h-8 flex justify-between items-center w-full bg-transparent mt-2 px-2">
                <div className="flex">
                    <p className="font-bold text-4xl p-1 text-white">
                        t
                    </p>
                    <input type="text" placeholder="Search" className="bg-transparent bg-white bg-opacity-25 rounded placeholder-gray-100 p-1 m-2"/>
                </div>
                <button className='rounded p-2 font-bold bg-green-500'>
                    Log in
                </button>
            </nav>
            <div className="w-80 flex flex-col justify-center align-center">
                <p className="font-bold text-7xl text-center text-white mb-2" >
                    tumblr
                </p>
                {error && 
                    (<p className="text-white text-sm text-center bg-black bg-opacity-25 rounded p-2">
                        {error}
                    </p>)
                }
                <form onSubmit={handleSubmit} method="POST" className="flex flex-col">
                    
                        <input 
                            type="text" 
                            value={emailAddress}
                            placeholder="Email" 
                            className="text-md mt-2 p-2 rounded-t border-b"
                            onChange={(e)=>setEmailAddress(e.target.value.toLowerCase())}
                        />
                        <input 
                            type="password" 
                            value={password}
                            placeholder="Password" 
                            className="text-md p-2"
                            onChange={(e)=>setPassword(e.target.value.toLowerCase())}
                        />
                        <input 
                            type="text" 
                            value={blogName}
                            placeholder="Blog name" 
                            className="text-md p-2 rounded-b border-t"
                            onChange={(e)=>setBlogName(e.target.value.toLowerCase())}
                        />
                    
                    <button 
                        disabled={!isValid}
                        type="submit" 
                        className={`bg-blue-300 rounded p-2 font-bold mt-2 ${!isValid && 'cursor-not-allowed opacity-50'}`}
                    >
                        Next
                    </button>
                </form>
                

                <a href="/dashboard" className="text-white font-bold text-sm text-center p-2">
                    Here's what's trending
                </a>




                <div className="flex justify-around items-center mt-16">
                    <button className="bg-black rounded p-2 text-sm font-bold text-white border border-white">
                        App Store
                    </button>
                    <button className="bg-black rounded p-2 text-sm font-bold text-white border border-white">
                        Google Play
                    </button>
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
                    <p className="underline font-bold p-1">Username</p>
                    <img alt="user"/>
                </div>
            </footer>
        </div>
    )
}

export default Signup