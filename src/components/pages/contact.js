import React from 'react';
import { Form, Input, Choice } from '@rocketseat/unform';
import { string, object, mixed, ref } from 'yup';

function Contact() {

    function handleSubmit(data) {
        console.log(data);
      }

    const schema = object().shape({
        first: string()
            .required(function(){console.log('Not here')}),
        last: string()
            .required(function(){console.log('Not here')}),
        email: string()
            .lowercase()
            .email('Please provide a valid email')
            .required(function(){console.log('Not here')}),
        cEmail: string()
            .lowercase()
            .required('Please confirm your email')
            .oneOf([ref('email'), null], "Email does not match"),
        singBus: string()
            .required('Required'),
        message: string()
            .required('Required')
    })

    return(
        <div className="contact">

            <div className="jumbotron">
                <div className="container">
                    <div className="jumboheading">
                        <p className="heading">Interested and have questions?<br/>Contact us.</p>
                    </div>
                    <div className="jumboForm">
                        <Form schema={schema} onSubmit={handleSubmit}>
                            <Input name='first' placeholder='First Name'/>
                            <Input name='last' placeholder='Last Name'/>
                            <Input name='email' placeholder='Email'/>
                            <Input name='cEmail' placeholder='Confirm Email'/>
                            <label>
                                Are you business or an individual?<br/>
                                <Choice
                                    name="singBus"
                                    options={[{ value: 'single', label: 'Individual' }, { value: 'business', label: 'Business' }]}
                                />
                            </label>
                            <Input multiline name="message" placeholder='Message'/>
                            <button type='Submit'>Submit</button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <div className="address">
                        <p className="heading add">Scarborough Office</p>
                        <p className="subheading">Ferro Technics</p>
                        <p className="description add">1568 Brimley Rd<br/>Toronto, ON M1P 3G9</p>
                        <p className="description"><span className="bold">T</span> 1-833-638-0001</p>
                        <p className="description"><span className="bold">T</span> 416-297-0001</p>
                        <p className="description add"><span className="bold">F</span> 416-297-7932</p>
                        <p className="description">
                            <span className="bold">Support</span> <a href="mailto:support@ferrotechnics.com">support@ferrotechnics.com</a>
                        </p>
                        <p className="description">
                            <span className="bold">Marketing</span> <a href="mailto:info@ferrotechnics.com">info@ferrotechnics.com</a>
                        </p>
                    </div>
                    <div className="map">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1060687399363!2d-79.2619192!3d43.770657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a4aa052009%3A0xb39bf8a1863bb71a!2sFerro%20Technics%20Inc.!5e0!3m2!1sen!2sca!4v1578685961338!5m2!1sen!2sca" 
                        className='googleMap'
                        frameBorder='0'
                        title='ferroLocation'></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;