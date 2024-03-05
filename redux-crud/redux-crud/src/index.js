import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./UserReducer"


const store123 = configureStore({
  reducer:{
    users:userSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store123}>
    <App />
    </Provider>
    
  </React.StrictMode>
);
reportWebVitals();
