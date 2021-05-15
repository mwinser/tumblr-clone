import { useContext } from "react"
import { DatabaseContext } from "../context/databaseContext"

export default function TagPreview() {
    const {photos} = useContext(DatabaseContext)
    return (
        <div className="TAGPREVIEW flex justify-between mb-5">
            {/*tailwind must include the following classNames or build will not include them when dynamically generating classes as below*/}
            <div className="bg-yellow-400 bg-green-400 bg-indigo-400 bg-red-400 text-yellow-400 text-green-400 text-indigo-400 text-red-400"></div>
            {[
                {tag: "birds", color: "yellow"},
                {tag: "nature", color: "green"},
                {tag: "art", color: "indigo"},
                {tag: "space", color: "red"}
            ].map(item => {
                const taggedPhotos = photos.filter(photo => photo.hashTags.includes(item.tag))
                return (
                    <div key={item.tag + item.color} className={`bg-${item.color||`blue`}-400 flex flex-col p-2 mr-5 rounded mb-5`}>
                        <div className={`mb-2 ${item.color === `yellow`? `text-black`:null}`}>
                            #{item.tag}
                        </div>
                        <div className="flex">
                            <div className="w-14 h-24 bg-white rounded mr-2">
                                <img 
                                    className="object-cover w-full h-full rounded"
                                    src={taggedPhotos[0]? taggedPhotos[0].imageSrc : null}
                                    alt="tag preview"
                                />
                            </div>
                            <div className="w-14 h-24 bg-white rounded m1-2">
                            <img 
                                className="object-cover w-full h-full rounded"
                                src={taggedPhotos[1]? taggedPhotos[1].imageSrc : null}
                                alt="tag preview"
                            />
                            </div>
                        </div>
                        <div className={`py-2 px-5 mt-2 text-center ${item.color === `yellow`? `bg-black`:`bg-white`} font-bold text-${item.color||`blue`}-400 rounded`}>Follow</div>
                    </div>
                    )
                })
            }
        
        </div>
    )
}