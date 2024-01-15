import './App.css'

import Home from './Home/Home'
import Experience from './Experience/Experience';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react'
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


import MenuIcon from '@mui/icons-material/Menu';

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState<string>('Home');

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      if (!open) {
        setTimeout(() => {
          setDrawerOpen(open);
        }, 100); 
      } else {
        setDrawerOpen(open);
      }
    };

  const buttonNameList = ['Home', 'Experience', 'Projects', 'Coursework', 'Contact']

  const drawerList = () => (
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >

        {buttonNameList.map((buttonName, index) => {
          return (
            <div className="header-menu-item" key={index} style={{
              background: selected === buttonName ? '#d7d5c4' : '',
              color: selected === buttonName ? ' rgb(21, 21, 21)' : '',
            }}
            onClick={()=>{handleClick(buttonName)}}
            > {buttonName} </div>
          )
        })}
      </div>
    );

  const defaultTheme = createTheme();
  const theme = createTheme({
    palette: {
        primary: {
            main: '#d7d5c4',  
        },
        secondary: {
            main: '#50C878',  
        },
    },
    typography: {
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: "10rem",
            lineHeight: '10rem',
            color: '#d7d5c4',
            [defaultTheme.breakpoints.down('md')]: {
                fontSize: "6rem",
                lineHeight: '6rem',
            },
            [defaultTheme.breakpoints.down('sm')]: {
                fontSize: "4rem",
                lineHeight: '4rem',
            },
            [defaultTheme.breakpoints.down('xs')]: {
                fontSize: "3rem",
                lineHeight: '3rem',
            }
        },
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: "4rem",
            lineHeight: '4rem',
            [defaultTheme.breakpoints.down('md')]: {
                fontSize: "3rem",
                lineHeight: '3rem',
            },
            [defaultTheme.breakpoints.down('sm')]: {
                fontSize: "2rem",
                lineHeight: '2rem',
            },
            [defaultTheme.breakpoints.down('xs')]: {
                fontSize: "1.5rem",
                lineHeight: '1.5rem',
            }
        },
        body1 : {
          fontFamily: 'Josefin Sans',
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: '1.25rem',
          color: '#d7d5c4',
        }
    }
});

  function handleClick(buttonName: string) {
    setSelected(buttonName);
  }

  const buttonList = () => (
    buttonNameList.map((buttonName, index) => {
      return (
        <Button className='nav-buttons' key={index} variant={buttonName === selected ? "contained" : "outlined"} onClick={()=>{handleClick(buttonName)}}
        style={{
          background: buttonName === selected ? '#d7d5c4' : 'rgb(21, 21, 21)',
          color: buttonName === selected ? ' rgb(21, 21, 21)' : '#d7d5c4',
        }}
        > {buttonName} </Button>
      )
    }
  ))

  return (
    <ThemeProvider theme={theme}>
      <div className={"button-container"}>
                {buttonList()}
            </div>
            <div className="header-menu">
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon id='hamburger' />
            </Button>
            <SwipeableDrawer
                anchor='top'
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {drawerList()}
            </SwipeableDrawer>
      </div>
      { selected === 'Home' && <Home/> }
      { selected === 'Experience' && <Experience/> }
    </ThemeProvider>
  )
}

export default App
