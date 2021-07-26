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
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';

const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignInWithContext = withContext(UserSignIn);


function App() {

  return (
    <Router>
      <div className="App">
      <HeaderWithContext />
      <Switch>
        <Route exact path="/" component={CoursesWithContext} />
        <Route path="/courses/:id" component={CourseDetailWithContext} />
        <Route path="/signin" component={UserSignInWithContext} />
      </Switch>
      </div>
    </Router>
  );

}

export default App;