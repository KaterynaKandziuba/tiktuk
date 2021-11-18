import { Header } from './components/Header/Header';
import './App.css';
import posts from './mockData/posts';
import { FeedItem } from './components/FeedItem/FeedItem';
import { Box } from '@mui/system';
import GetTrendingFeedApiService from './service/getTrendingFeed.api';

function App() {
  return (
    <>
      {/* < GetTrendingFeedApiService /> */}
      <Header />
      <Box sx={{
        maxWidth: '800px',
        margin: '24px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        { posts.map((props) => <FeedItem key={props.id} {...props} />)}
      </Box> 
    </>
  );
} 

export default App;
