import { useContext, useState } from "react"
import { DatabaseContext } from "../context/databaseContext"

export default function CommentBox(props){
    const {addComment} = useContext(DatabaseContext)
    const [commentContent, setCommentContent] = useState('')

    function handleSubmitComment(e) {
        e.preventDefault()
        addComment(props.item.postId, props.currentUsername, commentContent)
        setCommentContent('')
    }

    return (
        <div id="comment-box" className={`absolute transform -translate-1/2 shadow-xl -bottom-20 left-20 w-60 z-10 rounded bg-white`}>
            <div className="HEADER flex justify-between py-3.5 px-2.5 border-b-2">
                <div className="BACK cursor-pointer" onClick={props.toggle}>
                    <svg viewBox="0 0 20 17" width="20" height="17" fill="black" ><path d="M5.7 10.009l4.8 4.527c.2.2.2.603 0 .804L9 16.85c-.2.2-.6.2-.8 0L0 8.901v-.804L8.2.15c.2-.201.6-.201.8 0l1.5 1.509c.2.2.2.603 0 .804L5.7 6.991h13.4s.9.905.9 1.006v.905l-1 1.107H5.7z"></path></svg>
                </div>
                <div className="#NOTES">{props.item.comments.length} Notes</div>
                <div>
                <svg viewBox="0 0 18 20" width="18" height="20" fill="black"><path d="M7 6h4V1.081C11 .484 11.448 0 12 0s1 .484 1 1.081V6h3.92c.596 0 1.08.448 1.08 1s-.484 1-1.08 1H13v4h3.92c.596 0 1.08.448 1.08 1s-.484 1-1.08 1H13v4.919c0 .597-.448 1.081-1 1.081s-1-.484-1-1.081V14H7v4.919C7 19.516 6.552 20 6 20s-1-.484-1-1.081V14H1.08C.485 14 0 13.552 0 13s.484-1 1.08-1H5V8H1.08C.485 8 0 7.552 0 7s.484-1 1.08-1H5V1.081C5 .484 5.448 0 6 0s1 .484 1 1.081V6zm0 2v4h4V8H7z"></path></svg>
                </div>
            </div>
            <div className="LIKESLIST px-2.5 py-2 border-b-2 flex flex-col">
                <div className="flex">
                    {props.item.likes.map(like=>{
                        return (
                            <div key={`${like}`} className="relative w-6 h-6 mr-2.5">
                                <img className="w-6 h-6 rounded-full" src="https://assets.tumblr.com/images/default_avatar/octahedron_open_64.png" alt="Avatar"/>
                                <svg className="absolute bottom-0 right-0" viewBox="0 0 16 16" width="14" height="14" fill="red">
                                    <circle cx="8" cy="8" r="8"></circle>
                                    <path fill="#ffffff" d="M9.903 4.5c-.64 0-1.265.316-1.76.89a5.38 5.38 0 0 0-.144.175 6.11 6.11 0 0 0-.144-.174C7.36 4.816 6.735 4.5 6.1 4.5a1.99 1.99 0 0 0-1.25.458c-1.092.876-1.025 2.428-.394 3.507.875 1.496 2.662 3.043 3.011 3.337.151.128.34.198.533.198.192 0 .382-.07.533-.197.35-.295 2.136-1.842 3.01-3.338.633-1.081.703-2.633-.387-3.507A1.991 1.991 0 0 0 9.903 4.5z"></path>
                                </svg>
                            </div>
                            
                        )
                        })
                    }
                </div>
                <div className="font-bold text-sm">
                    {`${props.item.likes.length} likes`}
                </div>
            </div>
            {props.item.comments.length>0 && <div className="COMMENTS bg-gray-100 py-1.5 border-b-2">
                {props.item.comments.map(commentDetails=>
                    <div key={`${commentDetails.username}+${commentDetails.dateCommented}`} className="COMMENTHOLDER py-1.5 pl-2.5 pr-4 flex">
                        <div className="AVATAR mr-2">
                            <div className="relative w-6 h-6">
                                <img className="w-6 h-6" src="https://assets.tumblr.com/images/default_avatar/octahedron_open_64.png" alt="Avatar"/>
                                <svg className="absolute bottom-0 right-0" viewBox="0 0 16 16" width="14" height="14" fill="green">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                    <path fill="#ffffff" d="M10.5 7.05c-.344.227-.5 0-.5-.23V5.75H5.593A.594.594 0 0 0 5 6.343v1.324a.625.625 0 0 1-1.25 0V6.343c0-1.016.827-1.843 1.843-1.843H10V3.32c0-.27.315-.398.5-.27s2 2 2 2l-2 2zM6 10.542h4.406A.594.594 0 0 0 11 9.949V8.625a.625.625 0 0 1 1.25 0V9.95a1.845 1.845 0 0 1-1.844 1.843H6v1.032s-.057.498-.5.208l-2-1.978 2-2c.173-.138.5 0 .5.286v1.202z"></path>
                                </svg>
                            </div>
                            
                        </div>
                        <div className="COMMENT p-2.5 rounded bg-white flex-grow">
                            <h2 className="font-bold text-sm">
                                {commentDetails.username}
                            </h2>
                            <p>
                                {commentDetails.comment}
                            </p>
                        </div>
                    </div>
                )}
            </div>}
            <div className="REPLYFOOTER flex justify-between py-3.5 px-2.5 text-gray-500">
                <form onSubmit={(e)=> handleSubmitComment(e)} method="POST">
                    <input 
                        type="text" 
                        value={commentContent}
                        placeholder= {props.currentUsername==='guest'? "Guests can't comment.": "Send something nice..."}
                        onChange={(e)=>setCommentContent(e.target.value)}
                        />
                    <button type="submit" disabled={props.currentUsername==='guest' || !commentContent} className={`font-bold ${ props.currentUsername==='guest' || !commentContent ? "text-gray-400 cursor-not-allowed": "text-blue-400 cursor-pointer"}`}>Reply</button>
                </form>
                
            </div>
            
        </div>
    )
}
