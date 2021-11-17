import posts from '../../shared/posts.json'
import { Card } from './components/card'
import './trendingFeed.css'
import { Comments } from '../comments/comments'

export const TrendingFeed = () => {

    const feed = posts.map((item) => {
        return(
            <>
            <Card 
            
            id={item.id}
            title={item.title}
            description={item.description}
            
            />
            <Comments />
            </>      
        )
    })

    const getPostsAmount = () => alert(`Post amount is ${posts.length}`)
    return(
        <>
            <h1>Welcome to TikTuk</h1>
            <div className="posts">
                {feed}
            </div>

            <div className="count">
                <button onClick={getPostsAmount}>Get amount of posts</button>
            </div>
        </>
    )
}