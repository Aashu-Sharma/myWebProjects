import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <div className = "footer">
            <div className="title-text">
                <h4>About Us</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis nihil atque quod dolores, aliquam ducimus natus quasi, molestias hic placeat, est ad numquam ullam! Provident aspernatur inventore eos sit!</p>
            </div>

            <div className="icons">
                <FontAwesomeIcon icon={faFacebook} className = "fa-brands"/>
                <FontAwesomeIcon icon={faInstagram} className = "fa-brands"/>
                <FontAwesomeIcon icon={faYoutube} className = "fa-brands"/>
                <FontAwesomeIcon icon={faTwitter} className = "fa-brands"/>
                <p>Copyright <FontAwesomeIcon icon={faCopyright} className="fa-solid"/></p>
            </div>
        </div>
    )
}

export default Footer
