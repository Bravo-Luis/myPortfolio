import './Header.css'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Header(){

    const [drawerOpen, setDrawerOpen] = useState(false);


    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setDrawerOpen(open);
      };

    const drawerList = () => (
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="header-menu-item"> About </div>
          <Divider />
          <div className="header-menu-item"> Work Experience </div>
          <Divider />
          <div className="header-menu-item"> Projects </div>
          <Divider />
          <div className="header-menu-item"> Resume </div>
          <Divider />
        </div>
      );

    return(
        <div className="header">
            <div className='button-container'>
                <Button variant="outlined"> About </Button>
                <Button variant="outlined"> Work Experience </Button>
                <Button variant="outlined"> Projects </Button>
                <Button variant="contained"> Resume</Button>
            </div>
            <div className="header-menu">
            <Button id='hamburger' onClick={toggleDrawer(true)}>☰</Button>
            <SwipeableDrawer
                anchor='top'
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {drawerList()}
            </SwipeableDrawer>
            </div>
            <div className="header-jobtitle">
            <Typography variant="h2"> Software Engineer </Typography> 
            </div>
            <div className="header-name">
                <Typography variant="h1"> Luis Bravo </Typography> 
            </div>
        </div>
    )
}

export default Header