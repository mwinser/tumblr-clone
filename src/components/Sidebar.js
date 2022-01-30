import React, {useContext} from 'react'
import {DatabaseContext} from '../context/databaseContext'
import LoadingSpinner from './LoadingSpinner'
import SideBarContainer from '../containers/SideBarContainer'
import BlogsToFollowCard from './BlogsToFollowCard'
import RadarCard from './RadarCard'


function Sidebar() {
    const {currentUserData} = useContext(DatabaseContext)

    return(
        currentUserData ? 
        <SideBarContainer>
            <BlogsToFollowCard/>
            <RadarCard/>
            <div className="SPONSOREDCARD sticky top-16">
                <div className="text-xl font-bold px-2.5 pb-2.5 border-b-2">
                    Sponsored Posts
                </div>
                <p className="px-2.5 py-2.5"> Site made by: <a href='https://mwinser.com' target="_blank" rel="noreferrer" className="font-bold text-blue-400">Mike Winser</a></p>
            </div>
        </SideBarContainer>
        : <LoadingSpinner/>
    )

}

export default Sidebar