import React, {useState} from 'react'

const Context = React.createContext(null)

function ContextProvider({children}) {
    const [emailAddress, setEmailAddress] = useState('')
    const [blogName, setBlogName] = useState('')



    return (
        <Context.Provider value = {{emailAddress, blogName, setEmailAddress, setBlogName}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}