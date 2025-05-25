
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';


const currentTheme = lightTheme; 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <ThemeProvider theme={currentTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
  </BrowserRouter>
);
