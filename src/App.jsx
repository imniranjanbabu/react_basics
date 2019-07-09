import React from 'react';
import './App.css';

const Red = ({ title, bg }) => (
  <div
    className="red"
    style={{
      background: bg,
    }}
  >
    <p>{title}</p>
  </div>
);


const Blue = ({ title, bg }) => (
  <div
    className="blue"
    style={{
      background: bg,
    }}
  >
    <p>{title}</p>
  </div>
);


const Green = ({ title, bg }) => (
  <div
    className="green"
    style={{
      background: bg,
    }}
  >
    <p>{title}</p>
  </div>
);


const App = () => (
  <div className="app">
    <p>hi hello</p>
    <Red title="RED" bg="red" />
    <Blue title="BLUE" bg="blue" />
    <Green title="GREEN" bg="green" />
    <Red title="VIOLET" bg="violet" />
  </div>
);


export default App;
