import React from 'react'
import Header from '../components/Header'

function Inbox() {
 
        return (
        <>
            <Header/>
            <div className="bg-navy h-screen flex flex-col text-white">
                <div className="max-w-990px mx-12 pt-12 px-2 flex justify-center items-start">
                    <div className="max-w-625px w-3/5 mt-5 ml-20 mr-5 py-24 px-5 bg-gray-500 bg-opacity-20 text-gray-400 text-center font-bold text-xl rounded">
                        <svg className="w-32 mx-auto mb-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                        No Messages To Display
                    </div>
                    <div className="max-w-320px w-2/5 flex flex-col flex-start gap-4">
                        <div className="bg-gray-500 bg-opacity-20 text-gray-400 font-bold p-2.5 rounded">
                            All messages
                        </div>
                        <div className="bg-gray-500 bg-opacity-20 text-center px-2.5 py-4 text-xs rounded">
                        Your Inbox is an aggregate view of Messages (Questions, Fan Mail, Submissions) that any of your blogs receive. 
                        </div>
                    </div>
                </div>
             <footer className="text-gray-400 text-sm mx-auto py-5">
                <ul className="flex justify-center gap-4">
                    <li>{String.fromCharCode(169)} Tumblr, Inc.</li>
                    <li>Help</li>
                    <li>About</li>
                    <li>Apps</li>
                    <li>Developers</li>
                    <li>Themes</li>
                    <li>Jobs</li>
                    <li>Legal</li>
                    <li>Privacy</li>
                </ul>
            </footer>
            </div>
           
            
        </>
    )
}

export default Inbox