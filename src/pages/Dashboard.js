import React from 'react'

import Header from '../components/Header'

function Dashboard() {


    return (
        <>
            <Header/>
            <div className="bg-navy mx-8 mt-10 px-2 flex items-center text-white">
                <div className="FEED w-2/3 flex items-end flex-col">
                    <div className="POSTINGMENU text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                        <h1 className="text-4xl">Posting Options</h1>
                    </div>
                    <div className="POSTS text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                        Post Content
                    </div>
                    <div className="POSTS text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                        Post Content
                    </div>
                    <div className="POSTS text-black bg-white w-10/12 rounded mb-5 py-4 px-1">
                        Post Content
                    </div>
                
                </div>
                <div className="SIDEBAR w-1/3 ml-8">
                    <h1 className="text-5xl">Sidebar</h1>


                    Need to add: Check out these blogs, Radar and Sponsored Post
                </div>

            </div>
            
        </>
    )
}

export default Dashboard