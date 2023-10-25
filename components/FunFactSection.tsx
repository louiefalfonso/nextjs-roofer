import React from 'react'

export default function FunFactSection() {
  return (
    <>
    <section className="funfact__section three p_relative ">
        <div className="funfact__content">
            <div className="auto_container">
            <div className="row">
                <div
                className=" col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                >
                <div className="inner_box">
                    <div className="icon__image">
                    <span className="icon-8" />
                    </div>
                    <div className="funfact__text">
                    <div className="count-outer count-box">
                        <span className="count-text" data-speed={1500} data-stop={932}>
                        0{" "}
                        </span>
                        <span>+</span>
                    </div>
                    <p>Project Complete</p>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
                >
                <div className="inner_box">
                    <div className="icon__image">
                    <span className="icon-7" />
                    </div>
                    <div className="funfact__text">
                    <div className="count-outer count-box">
                        <span className="count-text" data-speed={1500} data-stop={90}>
                        {" "}
                        0
                        </span>
                        <span>+</span>
                    </div>
                    <p>Experience Staff</p>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                >
                <div className="inner_box">
                    <div className="icon__image">
                    <span className="icon-9" />
                    </div>
                    <div className="funfact__text">
                    <div className="count-outer count-box">
                        <span className="count-text" data-speed={1500} data-stop={20}>
                        0
                        </span>{" "}
                        <span>+</span>
                    </div>
                    <p>Awards Win</p>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-3  col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
                >
                <div className="inner_box">
                    <div className="icon__image">
                    <span className="icon-10" />
                    </div>
                    <div className="funfact__text">
                    <div className="count-outer count-box">
                        <span className="count-text" data-speed={1500} data-stop={620}>
                        0
                        </span>{" "}
                        <span>+</span>
                    </div>
                    <p>Satisfied Clients</p>
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
