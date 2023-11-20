import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import App from './App';
import SignIn from './SignIn';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename={baseUrl}>
    <Routes>
    <Route path='/' element={ <App /> }/>
    <Route path='/signin' element={ < SignIn />}/>
    </Routes>
  </BrowserRouter>);


