import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom';

import App from './App.jsx'
import { AlertProvider } from './context/AlertProvider.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AlertProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AlertProvider>
    </AuthProvider>
  </StrictMode>,
)
