import React, {lazy, Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import PrivateRoute from './components/PrivateRoute'
import LoadingSpinner from './components/LoadingSpinner'

const Dashboard = lazy(()=> import('./pages/Dashboard'))
const Signup = lazy(()=> import('./pages/Signup'))
const Login = lazy(()=> import('./pages/Login'))
const Profile = lazy(()=> import('./pages/Profile'))
const NotFound = lazy(()=> import('./pages/NotFound'))
const ForgotPassword = lazy(()=> import('./pages/ForgotPassword'))
const Search = lazy(()=> import('./pages/Search'))
const Inbox = lazy(()=> import('./pages/Inbox'))
const Blog = lazy(()=> import('./pages/Blog'))
const Likes = lazy(()=> import('./pages/Likes'))
const Following = lazy(()=> import('./pages/Following'))
const Recommended = lazy(()=> import('./pages/Recommended'))



function App() {
  return (
    <div className="relative h-full min-h-screen bg-navy">
      <Suspense fallback={<LoadingSpinner/>}>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard}/>
          <Route path={ROUTES.LOGIN} component={Login}/>
          <Route path={ROUTES.SIGN_UP} component={Signup}/>
          <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword}/>
          <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard}/>
          <PrivateRoute path={ROUTES.PROFILE} component={Profile}/>
          <PrivateRoute path={ROUTES.SEARCH + "/:query"} component={Search}/>
          <PrivateRoute path={ROUTES.INBOX} component={Inbox}/>
          <PrivateRoute path={ROUTES.BLOG + "/:blogName"} component={Blog}/>
          <PrivateRoute path={ROUTES.RECOMMENDED} component={Recommended}/>
          <PrivateRoute path={ROUTES.LIKES} component={Likes}/>
          <PrivateRoute path={ROUTES.FOLLOWING} component={Following}/>
          <PrivateRoute component={NotFound}/>
        </Switch>
      </Suspense>
    </div>

  );
}

export default App;
