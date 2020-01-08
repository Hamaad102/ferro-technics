import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from './home';
import Courses from './courses';
import Enterprise from './enterprise';
import Contact from './contact';
import Register from './register';

import '../style/style.css';

function App() {

  return (
      <Router>
        <div>
          
          <nav className='container'>

            <Link className='brand' to='/'>Ferro Technics</Link>
            
            <ul className='navLinks'>
              <Link to='/courses'><li>Courses</li></Link>
              <Link to='/enterprise'><li>Enterprise</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
              <Link to='/register'><li id='register'>Register</li></Link>
            </ul>

          </nav>
          
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

          <footer className='container'>

            <ul className="footerLinks">
              <Link to='/courses'><li>Courses</li></Link>
              <Link to='/enterprise'><li>Enterprise</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
            </ul>

            <ul className="footerSocial">
              <Link to='/'><li>LinkedIn</li></Link>
              <Link to='/'><li>Facebook</li></Link>
              <Link to='/'><li>Twitter</li></Link>
            </ul>

          </footer>

        </div>
      </Router>
  );
}

export default App;
