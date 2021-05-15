import React, {useContext} from 'react'
import BlogsToFollowCard from '../components/BlogsToFollowCard'
import TagsToFollowCard from '../components/TagsToFollowCard'
import Feed from '../components/Feed'
import Header from '../components/Header'
import LoadingSpinner from '../components/LoadingSpinner'
import MainContainer from '../containers/MainContainer'
import SideBarContainer from '../containers/SideBarContainer'
import {DatabaseContext} from '../context/databaseContext'
import TagPreview from '../components/TagPreview'


function Recommended() {
    const {currentUserData} = useContext(DatabaseContext)
    return (
        <>
            <Header/>
            <MainContainer>
                {currentUserData 
                    ?
                    <Feed notUsername={currentUserData.username} hideMenu={true}>
                        <div className="CATEGORIES flex font-bold text-lg mb-5">
                            {[
                                {title: "For You", icon: "💖"},
                                {title: "Trending", icon: "🚀"},
                                {title: "Staff Picks", icon: "🌟"}
                            ].map(item => {
                                return (
                                    <div key={item.title} className="flex px-4 py-3.5 border-b border-blue-300">
                                        <div>
                                            {item.title}
                                        </div>
                                        <div className="ml-2">
                                            {item.icon}
                                        </div>
                                    </div>
                                )
                                })
                            }
                            <div className="flex items-center px-4 py-3.5 border-b border-gray-500">
                                <div>
                                    More
                                </div>
                                <svg className="bg-white rounded-full ml-2 p-0.5" viewBox="0 0 13 20.1" style={{transform: "rotate(90deg)"}} width="15" height="15" fill="#001935"><path d="M0 2.9l7.2 7.2-7.1 7.1L3 20.1l7.1-7.1 2.9-2.9L2.9 0 0 2.9"></path></svg>
                            </div>
                            <div className="flex px-4 py-3.5 flex-1 border-b border-gray-500">
                                <div>
                                    {`      `}
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    <TagPreview/>
                    
                    </Feed>
                    :
                    <LoadingSpinner/>  
                }
                
                <SideBarContainer>
                    <TagsToFollowCard/>
                    <BlogsToFollowCard/>
                </SideBarContainer>
                
            </MainContainer>
            
        </>
    )
}

export default Recommended