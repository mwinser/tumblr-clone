import React, {useState, useContext} from 'react'
import {database, storage} from '../lib/firebase'
import {DatabaseContext} from '../context/databaseContext'

function CreatePost() {
    
    const {currentUserData, setIsCreateMenuOpen} = useContext(DatabaseContext)
    const [caption, setCaption] = useState('')
    const [showPreview, setShowPreview] = useState(false)

    // let uploadedImage

    function updatePreview (e) {
        setShowPreview(true)
        setTimeout(()=>{
            const preview = document.getElementById('img-preview')
            preview.src = URL.createObjectURL(e.target.files[0])
        }, 1000)
        
        
    }
    async function handleSubmit (e) {
        e.preventDefault()

        try {
            let url
            let type = "text"
            const file = document.getElementById('image').files[0]
            if (file) {
                const imageRef = storage.child(file.name)
                await imageRef.put(file)
                url = await imageRef.getDownloadURL()
                type = "image"
            } else {
                url = null
            }

            await database.photos.add({
                photoId: null,
                username: currentUserData.username,
                type: type,
                imageSrc: url,
                caption: caption,
                likes: [],
                comments: [],
                hashTags: ['#firstpost'],
                dateCreated: Date.now()
            })
            console.log("Post added to database")
            setIsCreateMenuOpen(false)
            
        } catch (error) {
            console.log(error)
        }
    }
        return (
            <div className="MODAL absolute top-0 left-0 z-20 w-full h-screen bg-navy bg-opacity-90 flex justify-center items-center">
            <div className="CONTAINER relative bg-white rounded max-w-lg max-h-112 z-30">
                <div className="absolute top-0 -left-20 w-16 h-16">
                    
                    <img 
                        className="sticky top-16 rounded"
                        alt="avatar" 
                        src="https://assets.tumblr.com/images/default_avatar/cube_open_64.png"/>
                </div>
                <div className="flex justify-between items-center py-2.5 pl-5 pr-4">
                    <div className="flex-1 text-sm font-bold">{currentUserData.username}</div>
                    <svg className="mr-2.5" width="18" height="18" viewBox="0 0 24 24" fill="gray"><path d="M24 10.526l-.36-.12-2.94-.962-.78-1.925 1.5-3.248-1.92-1.985-.36.18-2.76 1.444-1.86-.782L13.32 0h-2.58l-.12.421-1.08 2.707-1.86.782L4.5 2.346 2.58 4.33l1.56 3.188-.78 1.925L0 10.586v2.828l.36.12 2.94 1.083.78 1.924-1.5 3.309 1.92 1.985.36-.18 2.76-1.444 1.86.781L10.68 24h2.58l.12-.36 1.08-2.587 1.86-.782 3.18 1.564 1.92-1.985-.18-.361-1.38-2.827.78-1.925 3.3-1.203v-3.008H24zM7.2 11.97c0-2.647 2.16-4.812 4.8-4.812 2.64 0 4.8 2.165 4.8 4.812 0 2.647-2.16 4.812-4.8 4.812-2.64 0-4.8-2.165-4.8-4.812z"></path></svg>
                            
                </div>
                <div className="flex flex-col">
                    <div className="flex font-bold text-gray-400 mb-5 bg-gray-200 border-t-2 border-b-2 border-dashed border-gray-400 divide-x divide-gray-400">
                        <label for="image" className="w-72 h-48 flex flex-col justify-center items-center cursor-pointer">
                            <input 
                                type="file" 
                                id="image" 
                                name="image" 
                                accept="image/*" 
                                onChange={updatePreview} 
                                style={{display:"none"}}
                            />
                            {showPreview ? 
                                <img className="cover max-h-full max-w-full" id="img-preview" alt="preview upload"/>
                                :
                                <>
                                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        Upload photos
                                    </div> 
                                    <div>
                                        :)
                                    </div>
                                </>
                            }
                            
                        </label>
                        <div className="w-72 h-48 flex flex-col justify-center items-center">
                        <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                        </svg>
                            <div>
                                Add photo from web
                            </div>
                        </div>
                    </div>
                    <textarea 
                        className="resize-none h-20 w-full px-5 text-gray-600" 
                        value={caption}
                        onChange={(e)=>setCaption(e.target.value)}
                        id="caption" 
                        name="caption" 
                        maxLength='200'
                        placeholder='Add a caption, if you like.' 
                        autoFocus
                    />
                </div>
                
                    
                <div className="mt-1 pt-1 pr-5 pb-2.5 pl-4 w-full text-gray-400">
                    #tags
                </div>
                <div className="flex justify-between items-center py-4 px-5 border-t border-gray-200">
                    <div className="font-bold text-white bg-gray-400 py-1 px-2 rounded cursor-pointer" onClick={()=>setIsCreateMenuOpen(false)}>
                        Close
                    </div>
                    {currentUserData.username==='guest' &&
                        <div className="font bold text-red-700">
                            Guests cannot post
                        </div>
                    }
                    {currentUserData.username==='guest' ? 
                        <button disabled className="font-bold text-white bg-gray-400 py-1 px-2 rounded cursor-not-allowed" onClick={(e)=>handleSubmit(e)}>
                            Post
                        </button>
                        

                        :
                        <button disabled={!showPreview && caption===''} className={`font-bold text-white  py-1 px-2 rounded ${!showPreview && caption==='' ? "bg-gray-400 cursor-not-allowed": "bg-blue-400 cursor-pointer"}`} onClick={(e)=>handleSubmit(e)}>
                            Post
                        </button>
                    }
                    
                </div>
            </div>
        </div>




    )
}

export default CreatePost