import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {DatabaseContext} from '../context/databaseContext'
import Header from '../components/Header'
import MainContainer from '../containers/MainContainer'
import Feed from '../components/Feed'


function Blog() {
    const {currentUserData} = useContext(DatabaseContext)
    const {blogName} = useParams() 
    
    

    return(
        <>
            <Header/>
            <MainContainer column={true}>
                <div className="USERNAME w-full text-center text-5xl max-w-625px mb-10">
                    {blogName}
                </div>
                {currentUserData && 
                    <Feed username={blogName} hideMenu={blogName!==currentUserData.username}/>
                }
            </MainContainer>
        </>
    )
}

export default Blog