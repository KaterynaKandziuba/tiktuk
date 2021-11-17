import { Card, Paper } from "@mui/material"
import { FeedItemFooter } from "../TrendingFeed/components/Footer/FeedItemFooter"
import { FeedItemHashtag } from "../TrendingFeed/components/Hashtags/Hashtags"
import { FeedItemHeading } from "../TrendingFeed/components/Heading/Heading"
import { FeedItemDescription } from "../TrendingFeed/components/Post/Post"
import { FeedItemVideo } from "../TrendingFeed/components/Video/Video"

export const FeedItem = (
    {
        avatarUrl,
        userName,
        videoUrl,
        description,
        hashtags,
        likes,
        comments
    }
) => {

    return (
        <Card
            component={Paper}
            sx={{
                padding: '24px 48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px'
            }}
        >
            <FeedItemHeading
                avatarUrl={avatarUrl}
                userName={userName}
            />
            <FeedItemVideo videoUrl={videoUrl} />
            <FeedItemDescription description={description} />
            <FeedItemHashtag hashtags={hashtags}/>
            <FeedItemFooter likes={likes} comments={comments} />
        </Card>
    )
}