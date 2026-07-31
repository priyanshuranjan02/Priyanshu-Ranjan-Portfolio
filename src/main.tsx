import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@/contexts/ThemeContext';

<ThemeProvider>
  <App />
</ThemeProvider>

createRoot(document.getElementById("root")!).render(<App />);