import React from 'react'
import Link from 'next/link'

export default function ServiceSection() {
  return (
    <>
    <section className="service__two p_relative see__pad">
        <div className="service__content__two">
            <div className="auto_container">
            <div className="title text-center">
                <div className="sub__title">
                <h6>Our Services</h6>
                </div>
                <div className="main__title">
                <h2>
                    We’re Prodviding Quality <br /> Roofing Services
                </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                    className="service__block__one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500m"
                >
                    <div className="inner__box">
                    <div className="image__box">
                        <figure className="image">
                            <Link href="/service-details" passHref>
                                <img src="images/service/service-01.png" alt="" />
                            </Link>
                        </figure>
                    </div>
                    <div className="lower__content">
                        <div
                        className="image_layer shape-06"
                        style={{
                            backgroundImage: "url(images/shape/shape-06.png)"
                        }}
                        />
                        <div className="service__icon">
                        <div
                            className="image_layer_one shape-34"
                            style={{
                            backgroundImage: "url(images/shape/shape-34.png)"
                            }}
                        />
                        <div
                            className="image_layer_two shape-35"
                            style={{
                            backgroundImage: "url(images/shape/shape-35.png)"
                            }}
                        />
                        <div className="icon">
                            <span className="icon-27" />
                        </div>
                        </div>
                        <div className="service__title">
                        <h4>
                            {" "}
                            <Link href="/service-details" passHref> Roofing Layer </Link>
                        </h4>
                        </div>
                        <div className="service__text">
                        <p>
                            Suspendisse varius etiam est vitae dui tempus nec vitae orci
                            sodales metus velit nec at diam in sed.
                        </p>
                        </div>
                        <div className="more__btn">
                            <Link href="/service-details" passHref>
                                Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                    className="service__block__one wow fadeInUp animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500m"
                >
                    <div className="inner__box">
                    <div className="image__box">
                        <figure className="image">
                            <Link href="/service-details" passHref>
                                <img src="images/service/service-02.png" alt="" />
                            </Link>
                        </figure>
                    </div>
                    <div className="lower__content">
                        <div
                        className="image_layer shape-06"
                        style={{
                            backgroundImage: "url(images/shape/shape-06.png)"
                        }}
                        />
                        <div className="service__icon">
                        <div
                            className="image_layer_one shape-34"
                            style={{
                            backgroundImage: "url(images/shape/shape-34.png)"
                            }}
                        />
                        <div
                            className="image_layer_two shape-35"
                            style={{
                            backgroundImage: "url(images/shape/shape-35.png)"
                            }}
                        />
                        <div className="icon">
                            <span className="icon-8" />
                        </div>
                        </div>
                        <div className="service__title">
                        <h4>
                            {" "}
                            <Link href="/service-details" passHref> Damage Repair</Link>
                        </h4>
                        </div>
                        <div className="service__text">
                        <p>
                            Suspendisse varius etiam est vitae dui tempus nec vitae orci
                            sodales metus velit nec at diam in sed.
                        </p>
                        </div>
                        <div className="more__btn">
                            <Link href="/service-details" passHref>
                                Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                    className="service__block__one  wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500m"
                >
                    <div className="inner__box">
                    <div className="image__box">
                        <figure className="image">
                            <Link href="/service-details" passHref>
                                <img src="images/service/service-03.png" alt="" />
                            </Link>

                        </figure>
                    </div>
                    <div className="lower__content">
                        <div
                        className="image_layer shape-06"
                        style={{
                            backgroundImage: "url(images/shape/shape-06.png)"
                        }}
                        />
                        <div className="service__icon">
                        <div
                            className="image_layer_one shape-34"
                            style={{
                            backgroundImage: "url(images/shape/shape-34.png)"
                            }}
                        />
                        <div
                            className="image_layer_two shape-35"
                            style={{
                            backgroundImage: "url(images/shape/shape-35.png)"
                            }}
                        />
                        <div className="icon">
                            <span className="icon-14" />
                        </div>
                        </div>
                        <div className="service__title">
                        <h4>
                            {" "}
                            <Link href="/service-details" passHref>Roof Cornering</Link>
                        </h4>
                        </div>
                        <div className="service__text">
                        <p>
                            Suspendisse varius etiam est vitae dui tempus nec vitae orci
                            sodales metus velit nec at diam in sed.
                        </p>
                        </div>
                        <div className="more__btn">
                            <Link href="/service-details" passHref>
                                Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
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
