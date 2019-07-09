import React from 'react';
import './App.css';

const Red = ({ title }) => (
  <div
    className="red"
    style={{
      background: title,
    }}
  >
    <p>{title}</p>
  </div>
);


const Blue = ({ title }) => (
  <div
    className="blue"
    style={{
      background: title,
    }}
  >
    <p>{title}</p>
  </div>
);


const Green = ({ title }) => (
  <div
    className="green"
    style={{
      background: title,
    }}
  >
    <p>{title}</p>
  </div>
);


const App = () => (
  <div className="app">
    <p>hi hello</p>
    <Red title="RED" />
    <Blue title="BLUE" />
    <Green title="GREEN" />
    <Red title="VIOLET" />
  </div>
);


export default App;
