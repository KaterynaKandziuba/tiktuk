import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <Box sx={{
      flexGrow: 1,
    }}>
      <AppBar position="static">
        <Toolbar variant="dense"
            sx={{
              minWidth: '800px',
              margin: '0 auto',
              p: 2
          }}>
          <Typography variant="h6" color="inherit" component="div">
            TrendingFeed
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
