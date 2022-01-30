import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {DatabaseContext} from '../context/databaseContext'
import Header from '../components/Header'
import MainContainer from '../containers/MainContainer'
import Feed from '../components/Feed'
import LoadingSpinner from '../components/LoadingSpinner'


function Search() {
    const {currentUserData} = useContext(DatabaseContext)
    const {query} = useParams() 
    
    

    return(
        currentUserData ? (
            <>
                <Header/>
                <MainContainer column={true}>
                    <div className="SEARCHTERM w-full text-center text-5xl max-w-625px mb-10">
                        #{query.toLowerCase()}
                    </div>
                    <Feed query={query.toLowerCase()} hideMenu={true}/>
                </MainContainer>
            </>
        ) : (
            <LoadingSpinner/>
        )
    )
}

export default Search