import Comment from "./Comment/Comment"

export const Comments = ({
    comments
}) => comments.map((item) => {
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