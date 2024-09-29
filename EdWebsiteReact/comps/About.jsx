import React from 'react'
import about from '../Images/about.jpg';

function About() {
    return (
        <>
            <div className="sub-header">
                <h1>About Us</h1>
            </div>

            <section className="about-us">
                <div className="row">
                        <div className="about-col">
                            <h1>We Are The World's Largest University</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, necessitatibus dolorum! Tempora asperiores quaerat molestias blanditiis quos minus labore quasi, recusandae atque iure, totam aliquam commodi perspiciatis facilis qui similique! Maxime ut earum recusandae nobis dolor nemo repudiandae numquam omnis.</p>
                            <a href="" className = "hero-btn red-btn">Explore Now</a>
                        </div>

                        <div className="about-col">
                            <img src={about} alt=""/>
                        </div>
                </div>
            </section>
        </>
    )
}

export default About
