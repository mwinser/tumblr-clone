import React, {useContext} from 'react'
import {Context} from '../context/Context'
import {Route, Redirect} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

function PrivateRoute( {component: Component, ...rest}){
    const {currentUser} = useContext(Context)
    return(
        <Route
        {...rest}
        render={props => {
            return currentUser ? <Component {...props}/> : <Redirect to={ROUTES.LOGIN}/>
        }}
        >

        </Route>
    )
}


export default PrivateRoute