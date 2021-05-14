import React from 'react'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MainContainer from '../containers/MainContainer'

function Dashboard() {
 
        return (
        <>
            <Header/>
            <MainContainer>
                <Feed/>
                <Sidebar/>
            </MainContainer>
            
        </>
    )
}

export default Dashboard