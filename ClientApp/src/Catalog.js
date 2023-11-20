import React from 'react';
import './Catalog.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Cataloge } from './components/Cataloge';
import { Header } from './components/Header';

function Catalog() {
  return (
    <div className="App">
        < Header />
        < Cataloge />
    </div>
  );
}

export default Catalog;