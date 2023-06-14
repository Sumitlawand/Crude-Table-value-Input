import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Read from './Components/Read';
import Readup from './Components/Readup';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={  <App />}></Route>
    <Route exact path="/read" element={  <Read/>}></Route>
    <Route exact path="/readup" element={  <Readup/>}></Route>
   
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);


reportWebVitals();
