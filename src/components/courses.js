import React from 'react';

function Courses() {
    return(
        <div className="courses">

            <div className="jumbotron">
                <div className="container">
                    <div className="jumboText">
                        <p className="heading">Here are the programs we offer</p>
                        <p className="subheading">Click the respective logo to find out more</p>
                    </div>
                    <div className="programs">
                        <div className="p-item">
                            <h6>PECB</h6>
                        </div>
                        <div className="p-item">
                            <h6>ISACA</h6>
                        </div>
                        <div className="p-item">
                            <h6>iapp</h6>
                        </div>
                        <div className="p-item">
                            <h6>EC-Council</h6>
                        </div>
                        <div className="p-item">
                            <h6>FTI</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Courses;