import ReactPlayer from "react-player";

export default function FeedItemVideo ({
    videoUrl
}) {
    return(
        <div>
            <ReactPlayer url={videoUrl}/>
    </div>
    )
}