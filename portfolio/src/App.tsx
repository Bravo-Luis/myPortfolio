import './App.css'

import Header from './Header/Header'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

function App() {

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
            lineHeight: '8rem',
            [defaultTheme.breakpoints.down('md')]: {
                fontSize: "7rem",
                lineHeight: '6rem',
            },
            [defaultTheme.breakpoints.down('sm')]: {
                fontSize: "4rem",
                lineHeight: '2rem',
            },
            [defaultTheme.breakpoints.down('xs')]: {
                fontSize: "3rem",
                lineHeight: '2.5rem',
            }
        },
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: "4rem",
            lineHeight: '5rem',
            [defaultTheme.breakpoints.down('md')]: {
                fontSize: "3rem",
                lineHeight: '4rem',
            },
            [defaultTheme.breakpoints.down('sm')]: {
                fontSize: "2rem",
                lineHeight: '5rem',
            },
            [defaultTheme.breakpoints.down('xs')]: {
                fontSize: "1.5rem",
                lineHeight: '0rem',
            }
        }
    }
});



  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
