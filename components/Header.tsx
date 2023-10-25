"use client";
import React from 'react'
import NavigationBar from './NavigationBar'

export default function Header() {
  return (
    <>
    <header className="main-header style-one">
        {/* header-lower */}
        <div className="header-lower">
            <div className="header_top">
                <div className="header_top_left">
                    <ul className="top_left">
                    <li>Unit 1, New Houstoun Business Park, Livingston West Lothian EH54 5BZ.</li>
                    <li>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                    <li>
                        <a href="tel:+44-123-456-7890">+44-123-456-7890</a>
                    </li>
                    </ul>
                </div>
                <div className="header_top_right">
                    <div className="header_right_info">
                    <ul className="top_right">
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
                        <img src="images/logo.svg" alt="" />
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
                    <NavigationBar/>
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
                    <img src="images/logo.svg" alt="" />
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
