import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function FeedItemDescription (
    {
        description
    }
) {
    return(
        <Box sx={{
            pl: 3,
            pr: 3
        }}>
            <Typography variant="body1">
                {description}
            </Typography>
        </ Box>
    )
}