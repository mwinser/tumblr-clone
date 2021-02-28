import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Context} from '../context/Context'
import * as ROUTES from '../constants/routes'
import Header from '../components/Header'

function Dashboard() {
    const {logout, currentUser} = useContext(Context)
    const [error, setError] = useState('')
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push(ROUTES.LOGIN)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <Header/>
            <div className="bg-blue-900 mx-8 mt-10 px-2 flex items-center">
                <div className="FEED w-2/3 flex items-end flex-col">
                    <div className="POSTINGMENU text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                        <h1 className="text-4xl">Posting Options</h1>
                    </div>
                    <div className="POSTS text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                        Post Content
                    </div>
                    <div className="POSTS text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                        Post Content
                    </div>
                    <div className="POSTS text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                        Post Content
                    </div>
                
                </div>
                <div className="SIDEBAR w-1/3 ml-8">
                    <h1 className="text-5xl">Sidebar</h1>
                    <p>Hello {currentUser && currentUser.email}!</p>
                    {error && <p className="text-red-500">{error}</p>}
                    <button 
                        onClick={handleLogout}
                        className="bg-blue-600 text-white font-bold rounded p-2"
                    >
                        Log Out
                    </button>

                    Need to add: Check out these blogs, Radar and Sponsored Post
                </div>

            </div>
            
        </>
    )
}

export default Dashboard