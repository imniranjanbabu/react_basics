import React from 'react';
import './App.css';

const Red = () => (
  <div className="red">
    <p>RED</p>
  </div>
);


const Blue = () => (
  <div className="blue">
    <p>BLUE</p>
  </div>
);


const Green = () => (
  <div className="green">
    <p>hi GREEN</p>
  </div>
);


const App = () => (
  <div className="app">
    <p>hi hello</p>
    <Red />
    <Blue />
    <Green />
    <Blue />
  </div>
);


export default App;
