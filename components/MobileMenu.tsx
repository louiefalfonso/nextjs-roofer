import React from 'react'

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
                <a href="index.html">
                    <img src="images/white-logo.svg" alt="" title="" />
                </a>
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
                <li>
                <a href="index.html">
                    <span className="fab fa-twitter" />
                </a>
                </li>
                <li>
                <a href="index.html">
                    <span className="fab fa-facebook-square" />
                </a>
                </li>
                <li>
                <a href="index.html">
                    <span className="fab fa-pinterest-p" />
                </a>
                </li>
                <li>
                <a href="index.html">
                    <span className="fab fa-instagram" />
                </a>
                </li>
                <li>
                <a href="index.html">
                    <span className="fab fa-youtube" />
                </a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
    </>
  )
}
