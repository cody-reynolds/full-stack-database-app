import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import withContext from './Context';
import Header from './components/Header';
import Public from './components/Public';

const HeaderWithContext = withContext(Header);


function App() {

  return (
    <div className="App">
    <HeaderWithContext />
    <Public />
    </div>
  );

}

export default App;