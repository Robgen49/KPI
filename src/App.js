import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Cards from './pages/Cards';
import Params from './pages/Params';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff'
    },
    secondary:{
      main: '#9e9ea6',
      completed: '#013220',
      error: '#1a0000'
    }
  }
}
);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={< Navigate to='/cards' replace />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/params/*' element={<Params />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
