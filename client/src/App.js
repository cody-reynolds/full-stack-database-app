import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Public from './components/Public';

function App() {

  return (
    <div className="App">
    <Public />
    </div>
  );
}

export default App;