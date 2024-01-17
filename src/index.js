import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { YourProvider } from '../src/components/YourContext';

import Home from './components/Home/Home';
import About from './components/About/about'
import Details from './components/Details/Details'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <YourProvider>
  <BrowserRouter>
    <Routes>

    <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/details' element={<Details/>}/>

    </Routes>
  </BrowserRouter>
  
  // </YourProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
