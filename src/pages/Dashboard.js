import React from 'react'
import Feed from '../components/Feed'

import Header from '../components/Header'

function Dashboard() {
 
        return (
        <>
            <Header/>
            <div className="bg-navy mx-8 mt-10 px-2 flex items-start text-white">
                <Feed/>
                <div className="SIDEBAR flex flex-col flex-start w-1/3 ml-8">
                    <h1 className="text-5xl">Sidebar</h1>

                    <p>
                        Need to add: Check out these blogs, Radar and Sponsored Post
                    </p>
                    
                </div>

            </div>
            
        </>
    )
}

export default Dashboard