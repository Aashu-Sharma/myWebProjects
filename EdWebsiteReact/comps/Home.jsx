import React, { useState, useRef } from 'react'
import london from '../Images/london.png'
import washignton from '../Images/washington.png'
import newyork from '../Images/newyork.png'
import library from '../Images/library.png'
import basketball from '../Images/basketball.png'
import cafeteria from '../Images/cafeteria.png'
import user1 from '../Images/user1.jpg'
import user2 from '../Images/user2.jpg'
import '../src/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars, faStar, faStarHalfAlt, faStarHalf, faStarOfDavid, faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'
import Header from '../comps/Header';
import Footer from '../comps/Footer';
import About from '../comps/About';
import Course from '../comps/Course';

function Home() {
    return (
        <div>
            <section className="header">
                <div className="text-box">
                    <h1>World's Largest University</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa magnam tempore ab molestias vel pariatur itaque  sapiente maiores earum. Lorem ipsum dolor sit amet.
            </p>
                    <a href="" className="hero-btn">Visit Us To Know More</a>
                </div>
            </section>

            {/* -----------courses----------- */}

            <section className="courses">

                <div className="title-text">
                    <h1>Courses We Offer</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div className="row">

                    <div className="course-col">
                        <h3>Intermediate</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea beatae excepturi mollitia recusandae sapiente. Incidunt dolore earum animi. Earum, consequatur.</p>
                    </div>

                    <div className="course-col">
                        <h3>Under Graduation</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea beatae excepturi mollitia recusandae sapiente. Incidunt dolore earum animi. Earum, consequatur.</p>
                    </div>

                    <div className="course-col">
                        <h3>Post Graduation</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea beatae excepturi mollitia recusandae sapiente. Incidunt dolore earum animi. Earum, consequatur.</p>
                    </div>

                </div>
            </section>

            <hr />
            {/* -----------campus----------- */}

            <section className="campus">

                <div className="title-text">
                    <h1>Our Global Campuses</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div className="row">

                    <div className="campus-col">
                        <img src={london} />
                        <div className="layer">
                            <h3>LONDON</h3>
                        </div>
                    </div>

                    <div className="campus-col">
                        <img src={washignton} />
                        <div className="layer">
                            <h3>WASHINGTON</h3>
                        </div>
                    </div>

                    <div className="campus-col">
                        <img src={newyork} />
                        <div className="layer">
                            <h3>NEWYORK</h3>
                        </div>
                    </div>
                </div>
            </section>

            <hr />
            {/* -----------facilities----------- */}

            <section className="facilities">

                <div className="title-text">
                    <h1>Other Facilities</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div className="row">

                    <div className="facilities-col">
                        <img src={library} />
                        <h3>World Class Library</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, at?</p>
                    </div>

                    <div className="facilities-col">
                        <img src={basketball} />
                        <h3>Large Playground</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, at?</p>
                    </div>

                    <div className="facilities-col">
                        <img src={cafeteria} />
                        <h3>Healthy and Tasty Food</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, at?</p>
                    </div>

                </div>
            </section>

            <hr />
            {/* -----------testimonials----------- */}

            <section className="testimonials">
                <div className="title-text">
                    <h1>What Our Students Say?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div className="row">
                    <div className="testimonial-col">
                        <img src={user1} alt="" />
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo tempore molestias. Molestias inventore, quisquam temporibus nihil eaque dignissimos?</p>
                            <h3>Christine Berkley</h3>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                    </div>

                    <div className="testimonial-col">
                        <img src={user2} alt="" />
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo tempore molestias. Molestias inventore, quisquam temporibus nihil eaque dignissimos?</p>
                            <h3>David Briar</h3>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>
            </section>

            <hr />
            <section className="cta">
                <h1>Enroll For Our Various Online Courses <br /> Anywhere From The World</h1>
                <a href="" className="hero-btn">Enroll Now</a>
            </section>

        </div>
    )
}

export default Home
