import React from 'react'

function Login() {
    return (
        <div className="container-2xl w-screen h-screen relative bg-login bg-cover flex flex-col justify-center items-center">
            <nav className="fixed top-0 left-0 h-8 flex justify-between items-center w-full bg-transparent mt-2 px-2">
                <div className="flex">
                    <p className="font-bold text-4xl p-1 text-white">
                        t
                    </p>
                    <input type="text" placeholder="Search" className="bg-transparent bg-white bg-opacity-25 rounded placeholder-gray-100 p-1 m-2"/>
                </div>
                <button className="bg-green-300 rounded p-2 font-bold">
                    Sign up
                </button>
            </nav>
            <div className="max-w-xs  p-8 flex flex-col justify-center align-center">
                <p className="font-bold text-7xl text-center text-white mb-2" >
                    tumblr
                </p>
                <p className="font-bold text-lg text-center text-white mt-2">
                    Make stuff, look at stuff, talk about stuff, find your people.
                </p>
                <input type="email" placeholder="Email" className="text-md mt-2 p-2 rounded"/>
                <button className="bg-green-300 rounded p-2 font-bold mt-2 mb-8">
                    Next
                </button>
                <div className="flex justify-around items-center mt-8">
                    <button className="bg-black rounded p-2 text-sm font-bold text-white border border-white">
                        App Store
                    </button>
                    <button className="bg-black rounded p-2 text-sm font-bold text-white border border-white">
                        Google Play
                    </button>
                </div>
            </div>
            <footer className="fixed bottom-0 left-0 h-8 flex justify-between items-center w-full bg-transparent mb-2 px-2">
                <div >
                    <ul className="flex text-white justify-around items-center text-sm underline">
                        <li className="p-2">Terms</li>
                        <li className="p-2">Privacy</li>
                        <li className="p-2">Jobs</li>
                        <li className="p-2">Support</li>
                    </ul>
                </div>
                <div className="flex text-white justify-around items-center text-sm">
                    <p className="p-1">Posted by:</p>
                    <p className="underline font-bold p-1">Username</p>
                    <img alt="user"/>
                </div>
            </footer>
        </div>
    )
}

export default Login