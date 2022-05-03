import React from 'react'
import image from '../assests/images/image.jpg'
import mail from '../assests/images/mail.png'
import vector from '../assests/images/Vector.png'

export default function Info() {
    return (
        <div className ="info-container">
            <img className= "img" src={image} alt="image"/>
            <h2 className="title context">Uma Selvaraj</h2>
            <p className="position context">Frontend Developer</p>
            <a href="#" className="website context"><small>umasaranya.website</small></a>
            <div className="contact-btn">
                <a href="mailto:selvaraj.umasaranya@gmail.com" className="btn btn-light"><img src={mail} className="icon mail"/>Email</a>
                <a href="www.linkedin.com/in/saranya" className="btn btn-dark"><img src={vector} className="icon linkedin"/>LinkedIn</a>
            </div>
        </div>
    )
}