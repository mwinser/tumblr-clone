import React from 'react'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Dashboard() {
 
        return (
        <>
            <Header/>
            <div className="bg-navy max-w-990px mx-auto mt-10 px-2 flex items-start text-white">
                <Feed/>
                <Sidebar/>


            </div>
            
        </>
    )
}

export default Dashboard