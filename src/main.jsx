import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx'
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
)
