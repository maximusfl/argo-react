import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ThemeProvider, createTheme, CssBaseline, Box} from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh'
                }}>
                    <Header/>
                    <Box component="main" sx={{flex: 1}}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/product/:id" element={<ProductDetail/>}/>
                            {/* Добавьте другие маршруты здесь */}
                        </Routes>
                    </Box>
                    <Footer/>
                </Box>
            </Router>
        </ThemeProvider>
    );
};

export default App;
