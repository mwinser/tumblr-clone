import React, {useState, useContext} from 'react'
import Header from '../components/Header'
import {database} from '../lib/firebase'
import {Context} from '../context/Context'
import {DatabaseContext} from '../context/databaseContext'

function CreatePost() {
    const {currentUser} = useContext(Context)
    const {blogs} = useContext(DatabaseContext)
    const [caption, setCaption] = useState('')
    

    async function handleSubmit (e) {
        e.preventDefault()

        try {
            const response = await database.photos.add({
                photoId: null,
                username: blogs.find(blog=>blog.userId===currentUser.uid).username,
                type: 'text',
                imageSrc: null,
                caption: caption,
                likes: [],
                comments: [],
                hashTags: ['#firstpost'],
                dateCreated: Date.now()
            })
            console.log("Post added with ID: " + response.id)
            
        } catch (error) {
            console.log(error.message)
        }
    }
        return (
        <>
            <Header/>
            <div className="bg-navy h-screen max-w-990px mx-auto mt-10 px-2 flex items-start justify-center text-white">


            <div className="h-72 flex flex-col justify-between">
                
                <form className="h-72 flex flex-col justify-between" onSubmit={(e)=>handleSubmit(e)}>
                    <label>Text-only Post</label>
                    <textarea 
                        className="resize-none w-96 h-96 text-black p-4" 
                        value={caption}
                        onChange={(e)=>setCaption(e.target.value)}
                        id="caption" 
                        name="caption" 
                        maxLength='150' 
                        autoFocus/>
                    <input className="bg-gray-500 rounded p-4" type="submit" value="submit"/>
                </form>
                </div>


            </div>
            
        </>
    )
}

export default CreatePost