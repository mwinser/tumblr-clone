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
                    Sponsored
                </div>
                This space intentionally left blank.
            </div>
        </SideBarContainer>
        : <LoadingSpinner/>
    )

}

export default Sidebar