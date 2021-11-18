import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Comments } from "./Comments";
import Likes from "./Likes";


export default function FeedItemFooter (
    {
        likes, comments
    }
) {
    const [areCommentsDisplayed, displayComments] = useState(false);
    const toggle = () => areCommentsDisplayed ? <Comments comments={comments}/> : null;
    
    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px"
        }}>
            <Likes 
            likes={likes}
            />
            <Button variant="text" onClick={() => displayComments(!areCommentsDisplayed)}>
                { areCommentsDisplayed ? "Hide Comments" : "Show Comments"}
            </Button>
            {toggle()}
        </ Box>
    )
}