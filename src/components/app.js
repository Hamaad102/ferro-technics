import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/home'
import Services from './pages/services'
import Courses from './pages/courses'
import Schedule from './pages/schedule'
import About from './pages/about'
import Contact from './pages/contact'
import Register from './pages/register'

import Ec from './pages/courses/eccouncil'
import Fti from './pages/courses/fti'
import Iapp from './pages/courses/iapp'
import Isaca from './pages/courses/isaca'
import Pecb from './pages/courses/pecb'

import '../style/style.scss'

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div>
				<div className="navBar">
					<nav className="container">
						<Link className="brand" to="/">
							Ferro Technics
						</Link>

						<ul className="navLinks">
							<Link to="/services">
								<li>Services</li>
							</Link>
							<Link to="/courses">
								<li>Courses</li>
							</Link>
							<Link to="/schedule">
								<li>Schedule</li>
							</Link>
							<Link to="/about">
								<li>About us</li>
							</Link>
							<Link to="/contact">
								<li>Contact</li>
							</Link>
							<Link to="/register">
								<li id="register">Register</li>
							</Link>
						</ul>
					</nav>
				</div>

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/services">
						<Services />
					</Route>

					<Route exact path="/courses">
						<Courses />
					</Route>
					<Route path="/courses/pecb">
						<Ec />
					</Route>
					<Route path="/courses/isaca">
						<Fti />
					</Route>
					<Route path="/courses/iapp">
						<Iapp />
					</Route>
					<Route path="/courses/ec_council">
						<Isaca />
					</Route>
					<Route path="/courses/fti">
						<Pecb />
					</Route>

					<Route path="/schedule">
						<Schedule />
					</Route>

					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
				</Switch>

				<footer>
					<div className="leftFoot">
						<p>
							Ferro Techinics Inc. is the global leader in
							<br />
							IT security, network, and infrastructre certifications.
						</p>
						<ul>
							<li>Facebook</li>
							<li>LinkedIn</li>
							<li>Twitter</li>
						</ul>
					</div>
					<div className="middleFoot">
						<p className="footHead">Contact Us</p>
						<p>
							Main Office: 1568 Brimley Rd, Toronto, ON M1P 3G9
							<br />
							Main Office (Toll Free): + 1 (833) 638-0001
							<br />
							Office: (416) 297-0001
							<br />
							<br />
							Fax: (416) 297-7932
							<br />
							Email: info@ferrotechnics.com
							<br />
							<br />
							Exam Office: 1580 Brimley Rd, Toronto, ON M1P 3G9
							<br />
							Exam Center: (416) 297-0008
						</p>
					</div>
					<div className="rightFoot">
						<ul className="footerLinks">
							<Link to="/services">
								<li>Services</li>
							</Link>
							<Link to="/courses">
								<li>Courses</li>
							</Link>
							<Link to="/schedule">
								<li>Schedule</li>
							</Link>
							<Link to="/about">
								<li>About us</li>
							</Link>
							<Link to="/contact">
								<li>Contact</li>
							</Link>
							<Link to="/register">
								<li id="register">Register</li>
							</Link>
						</ul>
					</div>
				</footer>
			</div>
		</Router>
	)
}

export default App
