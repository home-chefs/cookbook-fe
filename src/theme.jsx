
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#32a852' },
    secondary: { main: '#4CAF50' },
    
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#FF5722' },
    secondary: { main: '#4CAF50' },
   
  },
});
