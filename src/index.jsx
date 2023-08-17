import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contacts from './Pages/Contact';
import LoginIn from './Pages/LogIn/LoginIn';
import SignUpp from './Pages/SignIn';
import Products from './Pages/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contacts/>}/>
        <Route path='/LogIn' element={<LoginIn/>}/>
        <Route path='/SignUp' element={<SignUpp/>}/>
        <Route path='/Products' element={<Products/>}/>
       
      </Routes>
      <Footer/>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
