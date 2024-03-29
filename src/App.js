import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './theme/DarkTheme';
import HomePage from './customer/pages/HomePage';
import MultipleItemCarousel from './customer/pages/MultipleItemCarousel';
import { Routers } from './routers/Routers';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Routers/>
    </ThemeProvider>
   
  );
}

export default App;
