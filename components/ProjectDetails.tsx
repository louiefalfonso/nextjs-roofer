import React from 'react'
import Link from 'next/link'
export default function ProjectDetails() {
  return (
    <>
    <section className="project___details see__pad p_relative">
        <div className="auto_container">
            <div className="project___details__top">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                <div className="left">
                    <div className="inner__box">
                    <div className="image__box">
                        <figure className="image">
                        <img
                            src="images/resource/project-details-1.png"
                            alt=""
                        />
                        </figure>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-12">
                <div className="right p_relative">
                    <div
                    className="image_layer shape-06"
                    style={{
                        backgroundImage: "url(images/shape/shape-06.png)"
                    }}
                    />
                    <div className="project__information">
                    <h4>Project Information</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="project__info__list">
                        <ul>
                        <li>
                            {" "}
                            <p>Category :</p> Roof Maintanance
                        </li>
                        <li>
                            {" "}
                            <p>Client :</p> Mark Steven
                        </li>
                        <li>
                            {" "}
                            <p>Start :</p> Dec 12, 2022
                        </li>
                        <li>
                            {" "}
                            <p>End :</p> Dec 12, 2023
                        </li>
                        <li>
                            {" "}
                            <p>Rating :</p>
                            <ul className="rating">
                            <li>
                                <span className="icon-54" />
                            </li>
                            <li>
                                <span className="icon-54" />
                            </li>
                            <li>
                                <span className="icon-54" />
                            </li>
                            <li>
                                <span className="icon-54" />
                            </li>
                            <li>
                                <span className="icon-54" />
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="project___details__fixing">
            <h2>Fixing Storm Damage</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et enim
                justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed
                fames at egestas amet feugiat laoreet sed potenti integer. Viverra at
                maecenas convallis condimentum egestas nunc sagittis eu. Semper faucibus
                facilisis vitae sollicitudin.{" "}
            </p>
            <p>
                Fringilla mauris magna sit elementum elit. Facilisi lacus, pharetra quam
                eu urna amet aenean. Nunc mattis vitae tellus bibendum a eu, nunc.
                Consequat commodo ac cursus in donec orci tempus. Massa sed sit faucibus
                neque habitant consequat.
            </p>
            </div>
            <div className="project__btn">
            <div className="project__btn__left">
                <div className="pre__btn">
                    <Link href="/projects" passHref><span className="icon-26" /></Link>
                </div>
                <div className="btn__text">
                <h6>Roof Installation</h6>
                <p>Prev Post</p>
                </div>
            </div>
            <div className="project__btn__right">
                <div className="btn__text">
                <h6>Roof Construction</h6>
                <p>Next Post</p>
                </div>
                <div className="next__btn">
                    <Link href="/projects" passHref><span className="icon-25" /></Link>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
