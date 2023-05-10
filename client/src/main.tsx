
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.sass'
import ThemeContext from './context';
import theme from './theme/index.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeContext.Provider value={theme}>
    <App />

  </ThemeContext.Provider>
  ,
)
