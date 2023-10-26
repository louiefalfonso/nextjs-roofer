import React from 'react'
import Link from 'next/link'

export default function ProjectSection() {
  return (
    <>
    <section className="portfolio style__one two see__pad p_relative ">
        <div className="auto_container">
            <div className="sortable-masonry">
            <div className="filters">
                <ul className="filter-tabs filter-btns clearfix">
                <li className="active filter" data-role="button" data-filter=".all">
                    All Works
                </li>
                <li className="filter" data-role="button" data-filter=".business">
                    Business
                </li>
                <li className="filter" data-role="button" data-filter=".corporate">
                    Corporate
                </li>
                <li className="filter" data-role="button" data-filter=".marketing">
                    Marketing
                </li>
                </ul>
            </div>
            <div className="items-container row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all corporate">
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
                    </div>
                    </div>
                    <div className="portfolio__block">
                    <span>Survey Maintenance</span>
                    <h4>
                        <Link href="/project-details" passHref>Quality Surveying</Link>
                    </h4>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all business marketing corporate">
                <div className="portfolio__block__one">
                    <div className="inner-box">
                    <figure className="image-box">
                        <img src="images/resource/portfolio-02.png" alt="" />
                    </figure>
                    <div className="lower__content">
                        <div className="view-btn">
                        <a
                            href="assets/images/resource/portfolio-big-02.png"
                            className="lightbox-image"
                            data-fancybox="gallery"
                        >
                            <span className="icon-18" />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                        <Link href="/project-details" passHref>Quality Materials</Link>
                    </h4>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all marketing business">
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
                    </div>
                    </div>
                    <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                        <Link href="/project-details" passHref>Quality Materials</Link>
                    </h4>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all corporate">
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
                    </div>
                    </div>
                    <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                        <Link href="/project-details" passHref>Quality Materials</Link>
                    </h4>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all business marketing">
                <div className="portfolio__block__one">
                    <div className="inner-box">
                    <figure className="image-box">
                        <img src="images/resource/portfolio-08.png" alt="" />
                    </figure>
                    <div className="lower__content">
                        <div className="view-btn">
                        <a
                            href="images/resource/portfolio-big-08.png"
                            className="lightbox-image"
                            data-fancybox="gallery"
                        >
                            <span className="icon-18" />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                        <Link href="/project-details" passHref>Quality Materials</Link>
                    </h4>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all marketing business">
                <div className="portfolio__block__one">
                    <div className="inner-box">
                    <figure className="image-box">
                        <img src="images/resource/portfolio-06.png" alt="" />
                    </figure>
                    <div className="lower__content">
                        <div className="view-btn">
                        <a
                            href="images/resource/portfolio-big-06.png"
                            className="lightbox-image"
                            data-fancybox="gallery"
                        >
                            <span className="icon-18" />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                        <Link href="/project-details" passHref>Quality Materials</Link>
                    </h4>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
