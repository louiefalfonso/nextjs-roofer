import React from 'react'

export default function PortfolioSection() {
  return (
    <>
    <section className="portfolio two p_relative see__pad">
        <div className="portfolio-carousel owl-carousel owl-theme owl-dots-none nav-style-one ">
            <div className="portfolio__block__one">
            <div className="inner-box">
                <figure className="image-box">
                <img src="images/resource/portfolio-01.png" alt="" />
                </figure>
                <div className="lower__content">
                <div className="view-btn">
                    <a
                    href="images/resource/portfolio-big-01.png"
                    className="lightbox-image"
                    data-fancybox="gallery"
                    >
                    <span className="icon-18" />
                    </a>
                </div>
                <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                    <a href="project-details.html">Quality Materials</a>
                    </h4>
                </div>
                </div>
            </div>
            </div>
            <div className="portfolio__block__one">
            <div className="inner-box">
                <figure className="image-box">
                <img src="images/resource/portfolio-02.png" alt="" />
                </figure>
                <div className="lower__content">
                <div className="view-btn">
                    <a
                    href="images/resource/portfolio-big-02.png"
                    className="lightbox-image"
                    data-fancybox="gallery"
                    >
                    <span className="icon-18" />
                    </a>
                </div>
                <div className="portfolio__block">
                    <span>Alfa Project</span>
                    <h4>
                    <a href="project-details.html">Roof Repair</a>
                    </h4>
                </div>
                </div>
            </div>
            </div>
            <div className="portfolio__block__one">
            <div className="inner-box">
                <figure className="image-box">
                <img src="images/resource/portfolio-03.png" alt="" />
                </figure>
                <div className="lower__content">
                <div className="view-btn">
                    <a
                    href="images/resource/portfolio-big-03.png"
                    className="lightbox-image"
                    data-fancybox="gallery"
                    >
                    <span className="icon-18" />
                    </a>
                </div>
                <div className="portfolio__block">
                    <span>Residential</span>
                    <h4>
                    <a href="project-details.html">Renovation Of Roof</a>
                    </h4>
                </div>
                </div>
            </div>
            </div>
            <div className="portfolio__block__one">
            <div className="inner-box">
                <figure className="image-box">
                <img src="images/resource/portfolio-04.png" alt="" />
                </figure>
                <div className="lower__content">
                <div className="view-btn">
                    <a
                    href="images/resource/portfolio-big-04.png"
                    className="lightbox-image"
                    data-fancybox="gallery"
                    >
                    <span className="icon-18" />
                    </a>
                </div>
                <div className="portfolio__block">
                    <span>Residential</span>
                    <h4>
                    <a href="project-details.html">Roof Construction</a>
                    </h4>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
