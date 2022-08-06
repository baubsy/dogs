import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import { Box } from '@mui/system';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <Box  sx={{
                backgroundColor: '#CEE1F5',
                border: '3px solid black',
                borderRadius: '6 px',
                margin: '50px',
                padding: '30px'
            }}>
      <Route path="/" component={Header}/>
      <Route path="/" exact component={Main}/>
      <Route path="/about" exact component={About}/>
      </Box>
    </BrowserRouter>
  );
}

export default App;
