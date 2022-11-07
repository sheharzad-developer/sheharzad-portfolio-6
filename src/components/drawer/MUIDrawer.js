/* eslint-disable no-undef */
import React from 'react';
import { Drawer, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import CallIcon from '@mui/icons-material/Call';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export const MUIDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [value, setValue] = React.useState(0);
    return (
        <>
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='logo'
                style={{ color: 'white' }}
                onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon
                />
             </IconButton>
            <Drawer
                anchor='top'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box p={2} width='auto' textAlign="center" role="presentation">
                    <Typography variant='h6' component='div'>Side Panel</Typography>
                    <List>
                        {['Home', 'About', 'Portfolio', 'Contact Us'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton style={{textAlign: 'center'}}>
                                    <ListItemIcon>
                                        {index === 0 && <HomeIcon />}
                                        {index === 1 && <InfoIcon />}
                                        {index === 2 && <DriveFileMoveIcon />}
                                        {index === 3 && <CallIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        
                    </List>
                    
                </Box>
                <Box sx={{ width: 'auto', margin:' 0 auto'}}>
                    <BottomNavigation 
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Recents" icon={<FacebookIcon style={{color:'black'}}/>}  style={{color:'black'}}/>
                        <BottomNavigationAction label="Favorites" icon={<InstagramIcon style={{color:'black'}}/>}  style={{color:'black'}} />
                        <BottomNavigationAction label="Nearby" icon={<TwitterIcon style={{color:'black'}}/>}  style={{color:'black'}}/>
                    </BottomNavigation>
                </Box>
               
            </Drawer>
        </>
    )
}