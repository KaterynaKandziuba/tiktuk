import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Comment({
    name, email, time, formattedTime, content
}) {
    const mailTo = "mailto:" + email
    return (
      <Box direction="column" spacing={1} ml={8}>
          <Typography variant="body2">
              <b>{name}</b> (<a href={mailTo}>{email}</a>) <time datetime={time}>{formattedTime}</time>
              <br/><p>{content}</p>
          </Typography>
      </Box>
    );
}