import React from 'react'
import twitter from '../assests/images/twitter.png'
import facebook from '../assests/images/facebook.png'
import linkedin from '../assests/images/Linkedin.png'
import github from '../assests/images/github.png'

export default function Footer() {
    return (
        <div className='footer'>
            <a href=""><img className="footer-icons" src={twitter}/></a>
            <a href=""><img className="footer-icons" src={facebook}/></a>
            <a href="www.linkedin.com/in/saranya"><img className="footer-icons" src={linkedin}/></a>
            <a href="https://gitub.com/sara02selvaraj"><img className="footer-icons" src={github}/></a>
        </div>
    )
}