import React from 'react'
import { Form, Input, Choice } from '@rocketseat/unform'
import { string, object, mixed, ref } from 'yup'

function Contact() {
	function handleSubmit(data) {
		console.log(data)
	}

	const schema = object().shape({
		first: string().required(function() {
			console.log('Not here')
		}),
		last: string().required(function() {
			console.log('Not here')
		}),
		email: string()
			.lowercase()
			.email('Please provide a valid email')
			.required(function() {
				console.log('Not here')
			}),
		phone: string().required(function() {
			console.log('Not here')
		}),
		message: string().required('Required')
	})

	return (
		<div className="contact">
			<div className="jumboBlue">
				<div className="container">
					<div className="heading">
						<p>
							Interested and have questions?
							<br />
							<span className="goldText">Connect with us.</span>
						</p>
					</div>

					<Form className="form" schema={schema} onSubmit={handleSubmit}>
						<Input className="first" name="first" placeholder="First Name" />
						<Input className="last" name="last" placeholder="Last Name" />
						<Input className="email" name="email" placeholder="Email" />
						<Input className="phone" name="phone" placeholder="Phone" />
						<Input
							className="message"
							multiline
							name="message"
							placeholder="Message"
						/>
						<button className="submit" type="Submit">
							Submit
						</button>
					</Form>
				</div>
			</div>

			<div className="location">
				<div className="container">
					<div className="group">
						<div className="address">
							<p className="city">Toronto Office</p>

							<div className="mainAddress">
								<p className="contactHeading">Main Office</p>
								<p className="text">
									1568 Brimley Rd
									<br />
									Toronto, ON M1P 3G9
								</p>
							</div>

							<div className="mainNum">
								<p className="contactHeading">Main Office</p>
								<p className="text">(416) 297-0001</p>
							</div>

							<div className="tollFree">
								<p className="contactHeading">Toll Free</p>
								<p className="text">1-833-638-0001</p>
							</div>

							<div className="fax">
								<p className="contactHeading">Fax</p>
								<p className="text">(416) 297-7932</p>
							</div>

							<div className="examOffice">
								<p className="contactHeading">Exam Office</p>
								<p className="text">
									1580 Brimley Rd
									<br />
									Toronto, ON M1P 3G9
								</p>
							</div>

							<div className="examNum">
								<p className="contactHeading">Exam Office</p>
								<p className="text">(416) 297-0008</p>
							</div>

							<div className="support">
								<p className="contactHeading">
									Support&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span className="text">support@ferrotechnics.com</span>
								</p>
							</div>

							<div className="market">
								<p className="contactHeading">
									Marketing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span className="text">info@ferrotechnics.com</span>
								</p>
							</div>
						</div>

						<div className="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1060687399363!2d-79.2619192!3d43.770657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a4aa052009%3A0xb39bf8a1863bb71a!2sFerro%20Technics%20Inc.!5e0!3m2!1sen!2sca!4v1578685961338!5m2!1sen!2sca"
								className="googleMap"
								frameBorder="0"
								title="ferroLocation"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
