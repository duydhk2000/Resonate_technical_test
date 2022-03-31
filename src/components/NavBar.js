import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{ background: '#6f2dbd' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Contacts Album
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
