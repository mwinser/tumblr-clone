import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {Context} from '../context/Context'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const {resetPassword} = useContext(Context)


    async function handleResetPassword () {
        
        try {
            setError('')
            await resetPassword(email)
            setMessage('Check your inbox for further instructions')
        } catch(error) {
            setError(error.message)
        }
    }

    return (
        <div className="container-xl w-screen h-screen relative bg-indigo-900 bg-cover flex flex-col justify-center items-center">
            <div className="w-80 flex flex-col justify-center align-center">
                <p className="font-bold text-7xl text-center text-white mb-2" >
                    tumblr
                </p>
                {error && <p className="text-red-900, bg-gray-100 bg-opacity-50">{error}</p>}
                {message && <p className="text-white, bg-gray-100 bg-opacity-50">{message}</p>}
                <form className="flex flex-col">
                    
                    <input 
                        type="text" 
                        value={email}
                        placeholder="Email" 
                        className="text-md mt-2 p-2 rounded"
                        onChange={(e)=>setEmail(e.target.value.toLowerCase())}
                    />

                    <label className="flex justify-around items-center w-full bg-gray-100 rounded mt-2 h-16">
                        <input
                            type="checkbox"
                        />
                        I'm not a robot
                    </label>
                </form>
                <div className="flex justify-between items-center mt-2">
                    <button className="bg-gray-800 rounded p-2 font-bold text-white">
                        <Link to={ROUTES.LOGIN}>Cancel</Link>
                    </button>
                    <button onClick={handleResetPassword} className="bg-red-500 rounded p-2 font-bold text-white">
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword