import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from "react";

export default function Likes (
    {
        likes
    }
) {
    const [liked, like] = useState(false);

    return(
        <Box sx={{
            pl: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 0.5
        }}>
            <Button onClick={() => like(!liked)}><FavoriteOutlinedIcon /></Button>
            <Typography>{liked ? likes + 1 : likes}</Typography>
        </ Box>
    )
}
