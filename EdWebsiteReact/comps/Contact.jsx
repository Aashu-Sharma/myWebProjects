import React from 'react';
// import "../src/App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faHouse, faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <>
            <section className="sub-header">
                <h1>Contact Us</h1>
            </section>  
            
            <section className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3390.960963808503!2d77.7147537207631!3d28.9777780441106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64e8efb346d3%3A0x99677041b477425c!2zMTA5LCDgpKjgpIgg4KSu4KWL4KS54KSoIOCkquClguCksOClgCwgTWVlcnV0LCBVdHRhciBQcmFkZXNoIDI1MDAwMg!5e0!3m2!1sen!2sin!4v1725326224299!5m2!1sen!2sin"
                width="600" 
                height="450" 
                allowfullscreen="" 
                style = {{border : "0"}}
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

            <section className="contact-us">
                <div className="row">
                    <div className="contact-col">
                        <div>
                            <FontAwesomeIcon icon = {faHouse} className = "icon"/>
                            <span>
                                <h5>XYZ Road, ABC Building</h5>
                                <p>Meerut, Uttar Pradesh</p>
                            </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon = {faPhone} className = "icon"/>
                            <span>
                                <h5>+91 79844XXXXX</h5>
                                <p>Monday to Saturday, 10AM to 6PM</p>
                            </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon = {faEnvelope} className = "icon"/>
                            <span>
                                <h5>infoxyz@gmail.com</h5>
                                <p>Email Us Your Query</p>
                            </span>
                        </div>
                    </div>
                    <div className="contact-col">
                        <form>
                            <input type="text" placeholder = "Enter Your Name" required/>
                            <input type="email" placeholder = "Enter Your Email" required/>
                            <input type="text" placeholder = "Enter Your Subject" required/>
                            <textarea rows="8" placeholder="Leave Your Message" ></textarea>
                            <button type = "submit" className = "red-btn hero-btn">Send a Query</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
