import React from 'react';

function Enterprise() {
    return(
        <div className="enterprise">
            <div className="jumbotron">
                <div className="container">
                    <div className="jumboText">
                        <p className="heading">Being secure in todays digital age shouldn't be difficult.</p>
                        <p className="subheading">That's why we take the difficulty out of the equation. At Ferro Technics we do more than teach,<br/>
                        we apply our teachings in the field. Our qualified staff allows us to offer various services to our<br/>customers that help protect them and their data. 
                        On top of that we also offer Security Awareness<br/>Training Programs to ensure that employees are aware of emerging and existing security threats as<br/>
                        well as legislations governing their organization and industry. We are also in the business of certifying<br/>organizations of any size with the ISO 27001 
                        certification. If these or any of the other services listed below<br/> interest you contact us and we'll be in touch!</p>
                        <div className="list">
                            <ul className='left'>
                                <li>Threat Risk Assessment (TRA)</li>
                                <li>Privacy Impact Assessment (PIA)</li>
                                <li>Vulnerability Assessment (VA)</li>
                            </ul>
                            <ul className='right'>
                                <li>Pen Testing</li>
                                <li>Develop and Manage Information Security Program</li>
                                <li>Develop and Provide Security Awareness Training</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enterprise;