import './App.css'

import Header from './Header/Header'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

function App() {


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
        lineHeight: '6rem',
      },
      h2: {
        fontFamily: 'Montserrat',
        fontWeight: 500,
        fontSize: "4rem",
        lineHeight: '2rem',
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
