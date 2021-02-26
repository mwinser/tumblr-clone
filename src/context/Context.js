import React, {useState} from 'react'

const Context = React.createContext(null)

function ContextProvider({children}) {
    const [emailAddress, setEmailAddress] = useState('')



    return (
        <Context.Provider value = {{emailAddress, setEmailAddress}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}