import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#fff',
        light: '#ffffff',
        dark: '#8a8a8a',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff1744',
    },
    background: {
      default: 'white',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif', 
    fontSize: 20,
    button: {
      textTransform: 'none',
    },
  },
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {

    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
  },
});

export default theme;
