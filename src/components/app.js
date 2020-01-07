import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from './home';
import Courses from './courses';
import Enterprise from './enterprise';
import Contact from './contact';
import Register from './register';

import '../style/app.css';

function App() {

  return (
      <Router>
        <div className="container">
          
          <navbar>

            <Link className='brand' to='/'>Ferro Technics</Link>
            
            <ul className='navLinks'>
              <li><Link to='/courses'>Courses</Link></li>
              <li><Link to='/enterprise'>Enterprise</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/register'>Register</Link></li>
            </ul>

          </navbar>
          
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

        </div>
      </Router>
  );
}

export default App;
