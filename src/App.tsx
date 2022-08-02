import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header}/>
      <Route path="/" exact component={Main}/>
      <Route path="/about" exact component={About}/>
    </BrowserRouter>
  );
}

export default App;
