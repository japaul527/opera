import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Table from './components/table.js';
import './components/table.css'

function App() {

  return (
    <div className="App">
      
      <Table />
    </div>
  );
}

export default App;
