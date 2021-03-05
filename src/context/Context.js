import React, {useEffect, useState} from 'react'
import {auth} from '../lib/firebase'

const Context = React.createContext(null)

function ContextProvider({children}) {
    const [emailAddress, setEmailAddress] = useState('')
    const [blogName, setBlogName] = useState('')
    const [currentUser, setCurrentUser] = useState({uid: '0', email: 'guest'})
    const [isLoading, setIsLoading] = useState(true)


    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=> {
            user && setCurrentUser(user)
            setIsLoading(false)
            
            
        })
        return unsubscribe
    }, [])
    

    return (
        <Context.Provider value = {
            {
            emailAddress, 
            blogName,
            currentUser, 
            setEmailAddress, 
            setBlogName,
            signup,
            login,
            logout,
            resetPassword
            }}>
            {!isLoading && children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}