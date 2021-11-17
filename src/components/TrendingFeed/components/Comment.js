import commentsList from "../../../../../mockData/commentsData.js"
import Comment from "./comment/comment"

export const Comments = () => commentsList.map((item) => {
        return(
                <div>
                    <Comment 

                    id={item.id}
                    name={item.name}
                    email={item.email}
                    time={item.time}
                    formattedTime={item.formattedTime}
                    content={item.content}
                    
                />
        </div>
    )
})