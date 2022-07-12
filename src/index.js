import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/ForgotPassword'
import './pages/CheckEmail'
import './pages/NewPassword'
import './pages/PasswordReset'
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ForgotPassword from './pages/ForgotPassword'
import CheckEmail from './pages/CheckEmail'
import NewPassword from './pages/NewPassword'
import PasswordReset from './pages/PasswordReset';
import Dashboard from './pages/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/check" element={<CheckEmail />} />
      <Route path="/reset" element={<NewPassword />} />
      <Route path="/new" element={<PasswordReset />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();