import React from 'react';

function Home() {
    return(
        <div className="home">

            <div className="jumbotron">
                <div className="container">
                    <div className="jumboImage">
                        <h2>PLACEHOLDER IMAGE</h2>
                    </div>
                    <div className="jumboText">
                        <p className='heading'>Advance your skills<br/> & get ahead.</p>
                        <h3 className='description'>Employers are searching for candidates that<br/> have a wide skill set, make sure you fit the bill.<br/>
                        With our accredited courses and experienced<br/> instructors, Ferro Technics can help add<br/> valuable skills to your resume
                        in just five days.</h3>
                    </div>
                </div>
            </div>

            <div className="currentPrograms">
                <div className="container">
                    <p className='heading'>Current Programs</p>
                    <div className="programs">
                        <div className="p-item">
                            <h6>placeholder</h6>
                            <p className="subheading">EC Council</p>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Voluptatum aperiam odit ullam illo</p>
                        </div>
                        <div className="p-item">
                            <h6>placeholder</h6>
                            <p className="subheading">ISACA</p>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Voluptatum aperiam odit ullam illo</p>
                        </div>
                        <div className="p-item">
                            <h6>placeholder</h6>
                            <p className="subheading">iapp</p>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Voluptatum aperiam odit ullam illo</p>
                        </div>
                        <div className="p-item">
                            <h6>placeholder</h6>
                            <p className="subheading">PECB</p>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Voluptatum aperiam odit ullam illo</p>
                        </div>
                        <div className="p-item">
                            <h6>placeholder</h6>
                            <p className="subheading">FTI</p>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Voluptatum aperiam odit ullam illo</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <p className='heading'>What is<br/> Ferro Technics</p>
                    <div className="content">
                        <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti culpa doloribus<br/> 
                        ratione aspernatur, ea, officiis amet magnam enim natus fugiat eveniet voluptatem facere 
                        soluta laborum error labore, sint ipsam. Consectetur.</p>
                        <h6 className='image'>placeholder</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;