import React from 'react'

export default function WorkProcessSection() {
  return (
    <>
    <section className="work__process two p_relative see__pad">
        <div
            className="image__layer"
            style={{
            backgroundImage: "url(images/background/work-process.png)"
            }}
        />
        <div
            className="shape-34"
            style={{ backgroundImage: "url(images/shape/shape-38.png)" }}
        />
        <div className="auto_container">
            <div className="title text-center">
            <div className="sub__title">
                <h6>Work Process</h6>
            </div>
            <div className="main__title">
                <h2>
                3 Easy Steps to Get
                <br /> Quick Help
                </h2>
            </div>
            </div>
            <div className="work__content">
            <div
                className="work__block two wow zoomIn animated"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
            >
                <div className="icon__box p_ralative">
                <div className="number">
                    <span>01</span>
                </div>
                <div className="anim-icon">
                    <div
                    className="icon icons-4 "
                    style={{
                        backgroundImage: "url(images/shape/shape-24.png)"
                    }}
                    />
                </div>
                <div className="work__block__content__two">
                    <div className="icon__outer">
                    <div className="icon__bg__two">
                        <span className="icon-5" />
                    </div>
                    </div>
                    <div className="work__text">
                    <h4>Get Consultation</h4>
                    </div>
                </div>
                </div>
            </div>
            <div
                className="work__block two wow zoomIn animated"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
            >
                <div className="icon__box p_ralative">
                <div className="number">
                    <span>02</span>
                </div>
                <div className="anim-icon">
                    <div
                    className="icon icons-4 "
                    style={{
                        backgroundImage: "url(images/shape/shape-24.png)"
                    }}
                    />
                </div>
                <div className="work__block__content__two">
                    <div className="icon__outer">
                    <div className="icon__bg__two">
                        <span className="icon-4" />
                    </div>
                    </div>
                    <div className="work__text">
                    <h4>Install New Roof</h4>
                    </div>
                </div>
                </div>
            </div>
            <div
                className="work__block two wow zoomIn animated"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
            >
                <div
                className="icon icon-01"
                style={{ backgroundImage: "url(images/shape/shape-24.png)" }}
                />
                <div className="icon__box p_ralative">
                <div className="number">
                    <span>03</span>
                </div>
                <div className="work__block__content__two">
                    <div className="icon__outer">
                    <div className="icon__bg__two">
                        <span className="icon-6" />
                    </div>
                    </div>
                    <div className="work__text">
                    <h4>Relax &amp; Enjoy Roofing</h4>
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
