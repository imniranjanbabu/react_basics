import React from 'react';
import './App.css';


const Color = ({ title }) => (
  <div
    className="color"
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
    <Color title="RED" />
    <Color title="BLUE" />
    <Color title="GREEN" />
    <Color title="VIOLET" />
  </div>
);


export default App;
