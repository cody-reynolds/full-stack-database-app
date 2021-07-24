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
import Courses from './components/Courses';

const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);


function App() {

  return (
    <Router>
      <div className="App">
      <HeaderWithContext />
      <Switch>
        <Route exact path="/" component={CoursesWithContext} />
      </Switch>
      </div>
    </Router>
  );

}

export default App;