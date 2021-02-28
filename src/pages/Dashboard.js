import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Context} from '../context/Context'
import * as ROUTES from '../constants/routes'

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
            <h1>Dashboard</h1>
            <p>Hello {currentUser && currentUser.email}!</p>
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleLogout}>Log Out</button>
        </>
    )
}

export default Dashboard