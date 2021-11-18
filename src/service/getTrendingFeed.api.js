import React, {
  useState
} from "react";
import { FeedItem } from "../components/FeedItem/FeedItem";


export const GetTrendingFeedApiService = () => {
  const axios = require("axios").default;

  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    items: []
  })

  const options = {
    method: 'GET',
    url: 'https://tiktok33.p.rapidapi.com/trending/feed',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': '6d97bd14femsh1b6140923df6ee9p1b8da9jsn2f060af2d2fa'
    }
  };

  axios.request(options)
  .then(
    result => {
      console.log(result.data)
      setState({
        isLoaded: true,
        items: result.data
      })
    },
    error => {
      setState({
        isLoaded: true,
        error: error
      })
    }
  );

  const {error, isLoaded, items} = state;
  return ( 
  <>
    {!isLoaded ? "Loading" : ""}
    { items.map(item => {
      <FeedItem 
      
      // item keys may be used as props for FeedItem
    
      />
  })
}
  </>
  )
}

export default GetTrendingFeedApiService;