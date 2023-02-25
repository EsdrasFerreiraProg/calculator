import React from 'react';
 import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator.jsx';
import {StrictMode} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <div>
        <h1>Calculator</h1>
        <Calculator />
      </div>  
);


//reportWebVitals();
