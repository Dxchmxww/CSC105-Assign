import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export default function NavApp() {
  return (
    <Box>
      <AppBar sx={{backgroundColor: "#20232a"}} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            My Website
          </Typography>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">LOGIN</Button>
        </Toolbar>
        
      </AppBar>
      <AppBar sx={{ backgroundColor: "#20232a" , display: { xs: 'block', md: 'none' }}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            My Website
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
