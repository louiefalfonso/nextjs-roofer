import React from 'react'

export default function AboutSection() {
  return (
    <>
    <section className="about__section two p_relative see__pad">
        <div className="anim-icon">
            <div
            className="icon icons-1 "
            data-parallax='{"x": 100}'
            style={{ backgroundImage: "url(images/shape/shape-30.png)" }}
            />
            <div className="parallax-scene parallax-scene-1">
            <div
                data-depth="0.30"
                className="icon layer-bg"
                style={{ backgroundImage: "url(images/icons/icon-01.svg)" }}
            />
            </div>
            <div className="parallax-scene parallax-scene-4">
            <div
                data-depth="0.30"
                className="icon layer-bg"
                style={{ backgroundImage: "url(images/icons/icon-02.svg)" }}
            />
            </div>
            <div
            className="icon icons-2"
            style={{ backgroundImage: "url(images/shape/shape-31.png)" }}
            />
            <div
            className="icon icons-3"
            style={{ backgroundImage: "url(assets/images/shape/shape-32.png)" }}
            />
            <div
            className="icon icons-4 wow zoomIn animated"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
            style={{ backgroundImage: "url(images/shape/shape-33.png)" }}
            />
        </div>
        <div className="auto_container">
            <div className="about__section__content p_relative">
            <div className="row">
                <div className="col-lg-6 col-md-12 pr-30">
                <div className="about_left__section">
                    <div className="row">
                    <div className="col-xl-6 col-lg-12 ps-xl-0 pe-xl-0">
                        <div
                        className="about__img__one wow zoomIn animated"
                        data-wow-delay="100ms"
                        data-wow-duration="1500ms"
                        >
                        <div className="inner__box">
                            <div className="image__box">
                            <figure className="image">
                                <img src="images/resource/about-04.png" alt="" />
                            </figure>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 ps-xl-0">
                        <div
                        className="about__img__two wow zoomIn animated"
                        data-wow-delay="100ms"
                        data-wow-duration="1500ms"
                        >
                        <div className="inner__box">
                            <div className="image__box">
                            <figure className="image">
                                <img src="images/resource/about-05.png" alt="" />
                            </figure>
                            </div>
                        </div>
                        </div>
                        <div
                        className="expericence"
                        style={{
                            backgroundImage: "url(images/shape/shape-14.png)"
                        }}
                        >
                        <div
                            className="expericence__text wow zoomIn animated"
                            data-wow-delay="100ms"
                            data-wow-duration="1500ms"
                        >
                            <h2>40 </h2>
                            <span>Years of Expericence</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 col-md-12 pl-40">
                <div className="about__right__section">
                    <div className="title">
                    <div className="sub__title">
                        <h6>About Burton Roofing Merchants</h6>
                    </div>
                    <div className="main__title">
                        <h2>
                        Experienced &amp; <br />
                        Quality More Than <br />
                        40 Years
                        </h2>
                    </div>
                    </div>
                    <div className="normal__text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Adipiscing integer ultrices suspendisse varius etiam est. Est,
                        felis, tempus nec vitae orci sodales Metus, velit nec at diam in
                        sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio
                        est. Sit semper et velit fusce.
                    </p>
                    </div>
                    <div className="engineer__section">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                        <div className="engineer__content">
                            <div className="engineer__icon">
                            <span className="icon-20" />
                            </div>
                            <div className="engineer__text">
                            <h5> Quality Materials</h5>
                            <p> Amet minim mollit deserunt ulamco sit enim.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                        <div className="engineer__content">
                            <div className="engineer__icon">
                            <span className="icon-7" />
                            </div>
                            <div className="engineer__text">
                            <h5> Expert Engineer</h5>
                            <p> Amet minim mollit deserunt ulamco sit enim.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="about__btn">
                        <a className="btn-one" href="about.html">
                        <span>Read More</span>
                        </a>
                    </div>
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
