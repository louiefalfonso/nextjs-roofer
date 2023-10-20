import React from 'react'

export default function Header() {
  return (
    <>
    <header className="main-header style-one">
        {/* header-lower */}
        <div className="header-lower">
            <div className="header_top">
                <div className="header_top_left">
                    <ul className="top_left">
                    <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
                    <li>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                    <li>
                        <a href="tel:+91-213-666-0027">+91-213-666-0027</a>
                    </li>
                    </ul>
                </div>
                <div className="header_top_right">
                    <div className="header_right_info">
                    <ul className="top_right">
                        <li className="login__border">
                        <a href="login.html">Login</a>
                        </li>
                        <li>
                        <ul className="top_smedia">
                            <li>
                            <a href="index.html">
                                <span className="icon-2" />
                            </a>
                            </li>
                            <li>
                            <a href="index.html">
                                <span className="icon-1" />
                            </a>
                            </li>
                            <li>
                            <a href="index.html">
                                <span className="icon-3" />
                            </a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="outer-box">
                <div className="logo-box">
                    <figure
                    className="logo"
                    style={{ backgroundImage: "url(images/shape/shape-02.png)" }}
                    >
                    <a href="index.html">
                        <img src="images/logo.png" alt="" />
                    </a>
                    </figure>
                </div>
                <div className="menu-area">
                    {/*Mobile Navigation Toggler*/}
                    <div className="mobile-nav-toggler">
                    <i className="icon-bar" />
                    <i className="icon-bar" />
                    <i className="icon-bar" />
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                        className="collapse navbar-collapse show clearfix"
                        id="navbarSupportedContent"
                    >
                        <ul className="navigation clearfix">
                        <li className="dropdown">
                            <a href="index.html">Home</a>
                            <ul>
                            <li>
                                <a href="index.html">Home One</a>
                            </li>
                            <li>
                                <a href="index-2.html">Home Two</a>
                            </li>
                            <li>
                                <a href="index-3.html">Home Three</a>
                            </li>
                            <li>
                                <a href="index-4.html">Home Four</a>
                            </li>
                            <li className="dropdown">
                                <a href="index.html">Header Style</a>
                                <ul>
                                <li>
                                    <a href="index.html">Header Style 01</a>
                                </li>
                                <li>
                                    <a href="index-2.html">Header Style 02</a>
                                </li>
                                <li>
                                    <a href="index-3.html">Header Style 03</a>
                                </li>
                                <li>
                                    <a href="index-4.html">Header Style 04</a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="about.html">About Us</a>
                        </li>
                        <li className="dropdown">
                            <a href="#">Services</a>
                            <ul>
                            <li>
                                <a href="services.html">services</a>
                            </li>
                            <li>
                                <a href="services-single.html">Services Single</a>
                            </li>
                            <li>
                                <a href="services-details.html">Services Details</a>
                            </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">Pages</a>
                            <ul>
                            <li className="dropdown">
                                <a href="#">Team</a>
                                <ul>
                                <li>
                                    <a href="team-1.html">Team 1</a>
                                </li>
                                <li>
                                    <a href="team-2.html">Team 2</a>
                                </li>
                                <li>
                                    <a href="team-details.html">Team Details</a>
                                </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#">Testimonial</a>
                                <ul>
                                <li>
                                    <a href="testimonial-1.html">Testimonial 1</a>
                                </li>
                                <li>
                                    <a href="testimonial-2.html">Testimonial 2</a>
                                </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#">Project</a>
                                <ul>
                                <li>
                                    <a href="project-1.html">Project 1</a>
                                </li>
                                <li>
                                    <a href="project-2.html">Project 2</a>
                                </li>
                                <li>
                                    <a href="project-details.html">Project Details</a>
                                </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#">Shop</a>
                                <ul>
                                <li>
                                    <a href="shop.html">Shop</a>
                                </li>
                                <li>
                                    <a href="shop-details.html">Shop Details</a>
                                </li>
                                <li>
                                    <a href="cart.html">Cart Page</a>
                                </li>
                                <li>
                                    <a href="checkout.html">Checkout</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                                <a href="pricing.html">Pricing</a>
                            </li>
                            <li>
                                <a href="error.html">Error</a>
                            </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">News</a>
                            <ul>
                            <li>
                                <a href="blog-grid.html">Blog Grid</a>
                            </li>
                            <li>
                                <a href="blog-standard.html">Blog Standard</a>
                            </li>
                            <li>
                                <a href="blog-details.html">Blog Details</a>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html"> Contact </a>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>
                <div className="header__right">
                </div>
            </div>
        </div>
        {/*sticky Header*/}
        <div className="sticky-header">
            <div className="auto_container">
            <div className="outer-box">
                <div className="logo-box">
                <figure className="logo">
                    <a href="index.html">
                    <img src="images/logo.png" alt="" />
                    </a>
                </figure>
                </div>
                <div className="menu-area">
                <nav className="main-menu clearfix">
                    {/*Keep This Empty / Menu will come through Javascript*/}
                </nav>
                </div>
            </div>
            </div>
        </div>
    </header>
    </>
  )
}
