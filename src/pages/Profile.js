import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Context} from '../context/Context'
import * as ROUTES from '../constants/routes'
import Header from '../components/Header'
import MainContainer from '../containers/MainContainer'

function Profile() {
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
        <Header />
        <MainContainer column={true}>
            <p>Hello {currentUser && currentUser.email}!</p>
            {error && <p className="text-red-500">{error}</p>}
            <button 
                onClick={handleLogout}
                className="bg-blue-600 text-white font-bold rounded p-2"
            >
                Log Out
            </button>
        </MainContainer>
        </>
    )
}

export default Profile