import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import UserAvatar from "./Avatar";


export default function FeedItemHeading (
    {
        userName,
        avatarUrl
    }
) {
    return(
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px"
        }}>
            <UserAvatar 

            userName={userName}
            avatarUrl={avatarUrl}
            
            />
            <Typography variant="h6">
                {userName}
            </Typography>
        </ Box>
    )
}