import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './home';
import Courses from './courses';
import Enterprise from './enterprise';
import Contact from './contact';
import Register from './register';

function App() {
  return (
      <Router>

        <div className="nav">
        </div>

        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/courses'>
            <Courses />
          </Route>
          <Route path='/enterprise'>
            <Enterprise />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
