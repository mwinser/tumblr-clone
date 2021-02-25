import React, {lazy, Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'

const Dashboard = lazy(()=> import('./pages/Dashboard'))
const Signup = lazy(()=> import('./pages/Signup'))
const Login = lazy(()=> import('./pages/Login'))
const Profile = lazy(()=> import('./pages/Profile'))
const NotFound = lazy(()=> import('./pages/Not-found'))


function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard}/>
        <Route path={ROUTES.LOGIN} component={Login}/>
        <Route path={ROUTES.SIGN_UP} component={Signup}/>
        <Route path={ROUTES.PROFILE} component={Profile}/>
        <Route path={ROUTES.NOT_FOUND} component={NotFound}/>
      </Switch>
    </Suspense>

  );
}

export default App;
