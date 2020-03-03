import React from 'react'

function Home() {
	return (
		<div className="home">
			<div className="jumboBlue">
				<div className="container">
					<div className="carousel">
						<h2>PLACEHOLDER IMAGE</h2>
					</div>
					<div className="text">
						<p className="heading">
							Advance your skills
							<br /> & get ahead.
						</p>
						<h3 className="description">
							Employers are searching for candidates that
							<br /> have a wide skill set, make sure you fit the bill.
							<br />
							With our accredited courses and experienced
							<br /> instructors, Ferro Technics can help add valuable
							<br /> skills to your resume in just five days.
						</h3>
					</div>
				</div>
			</div>

			<div className="currentPrograms">
				<div className="container">
					<ul>
						<li>PECB</li>
						<li>ISACA</li>
						<li>iapp</li>
						<li>EC-Council</li>
						<li>FTI</li>
					</ul>
				</div>
			</div>
			<div className="currentServices">
				<div className="container">
					<ul>
						<li>
							Threat Risk
							<br />
							Assessment
						</li>
						<li>
							Vulnerability
							<br />
							Assessment
						</li>
						<li>
							ISO implementation
							<br />& Audit
						</li>
						<li>
							Privacy Impact
							<br />
							Assessment
						</li>
						<li>
							And
							<br />
							More!
						</li>
					</ul>
				</div>
			</div>

			<div className="about">
				<div className="jumboBlue">
					<div className="container">
						<div className="textAbout">
							<p className="heading">
								What is
								<br /> Ferro Technics?
							</p>
							<p className="description">
								Founded in 2016 by individuals with more than 30 years of
								experience in
								<br />
								Information Security, Ferro Technics Inc. provides highly
								specialized services
								<br />
								in IT Security certification trainings as well as consulting
								services in the field of
								<br />
								cyber-security, cloud security, risk management and ISO 27001
								implementation.
								<br />
								<br />
								We are dedicated in helping organizations counter internal and
								external threats
								<br />
								to their computing and information assets by helping them
								develop policies,
								<br />
								identify vulnerabilities and threats and implement controls
								based on ISO 27001
								<br />
								and NIST standards.
							</p>
						</div>
						<div className="image">
							<h6>placeholder</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
