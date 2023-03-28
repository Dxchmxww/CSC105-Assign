import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system';
import { List, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
export const Sidebar = () => {
  return (
    <>
        <Box sx={{ display: { xs: 'none', md: 'block'} }}>
            <Box sx={{display : 'flex',justifyContent :'flex-end', marginTop:"70px"}}>
                <List sx={{display : 'flex',flexDirection : "column"}}>
                <ListItem>
                    <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon></HomeIcon>
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem> 
                <ListItem>
                    <ListItemButton>
                    <ListItemIcon>
                        <ArticleIcon></ArticleIcon>
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                    <ListItemIcon>
                        <GroupIcon></GroupIcon>
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>  
                <ListItem>
                    <ListItemButton>
                    <ListItemIcon>
                        <StorefrontIcon></StorefrontIcon>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                    </ListItemButton>
                </ListItem>  
                <ListItem>
                    <ListItemButton>
                    <ListItemIcon>
                        <PersonIcon></PersonIcon>
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>  
                <ListItem>
                    <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon></SettingsIcon>
                    </ListItemIcon>
                    <ListItemText primary="Setting" />
                    </ListItemButton>
                </ListItem>  
                <ListItem>
                    <ListItemButton>
                    <ListItemIcon>
                        <AccountBoxIcon></AccountBoxIcon>
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>                       

                </List>        
            </Box>    
        </Box>
    </>
  )
}

export default Sidebar;
