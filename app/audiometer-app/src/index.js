import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import SecondPage from './SecondPage.js';
import ThirdPage from './ThirdPage.js';
import FourthPage from './FourthPage.js';
import RightEar from './RightEar.js';
import LeftEar from './LeftEar.js';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/four" element={<FourthPage/>} />
        <Route path="/right" element={<RightEar/>} />
        <Route path="/left" element={<LeftEar/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
