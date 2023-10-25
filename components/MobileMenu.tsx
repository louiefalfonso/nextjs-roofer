import React from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  return (
    <>
    <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
            <i className="fas fa-times" />
        </div>
        <nav className="menu-box">
            <div className="nav-logo">
                <Link href="/" passHref>
                    <img src="images/white-logo.svg" alt="" title="" />
                </Link>
            </div>
            <div className="menu-outer">
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
            <div className="contact-info">
                <h4>Contact Info</h4>
                <ul>
                    <li>Unit 1, New Houstoun Business Park, Livingston West Lothian EH54 5BZ.</li>
                    <li>
                    <a href="tel:+44-123-456-78901">+44-123-456-7890</a>
                    </li>
                    <li>
                    <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                </ul>
            </div>
            <div className="social-links">
            <ul className="clearfix">
                <li><Link href="https://www.facebook.com/" passHref><span className="fab fa-facebook-square" /></Link></li>
                <li><Link href="https://twitter.com/" passHref><span className="fab fa-twitter" /></Link></li>
                <li><Link href="https://www.instagram.com/" passHref><span className="fab fa-instagram" /></Link></li>
                <li><Link href="https://www.linkedin.com/" passHref><span className="icon-3" /></Link></li>
                <li><Link href="https://www.pinterest.com/" passHref><span className="fab fa-pinterest-p" /></Link></li>
            </ul>
            </div>
        </nav>
    </div>
    </>
  )
}
