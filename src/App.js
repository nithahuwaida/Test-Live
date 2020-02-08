import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Router from './component/route';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
