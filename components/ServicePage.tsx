import React from 'react'

export default function ServicePage() {
  return (
    <>
    <section className="services__details see__pad">
        <div className="auto_container">
            <div className="row">
            <div className="sidebar__side col-xl-4 col-lg-6 pe-xl-5">
                <aside className="sidebar">
                <div className="sidebar__widget__one">
                    <div className="sidebar__title">
                    <h4>All Services</h4>
                    </div>
                    <ul className="service__details__1__cat">
                    <li>
                        <a href="roofing-layer.html"> Roofing Layer</a>
                    </li>
                    <li className="active">
                        <a href="damage-repair.html"> Damage Repair</a>
                    </li>
                    <li>
                        <a href="roof-cornering.html"> Roof Cornering</a>
                    </li>
                    <li>
                        <a href="siding-install.html"> Siding Install</a>
                    </li>
                    <li></li>
                    <li>
                        <a href="corner-fixing.html"> Corner Fixing</a>
                    </li>
                    <li>
                        <a href="roof-renovation.html"> Roof Renovation</a>
                    </li>
                    </ul>
                </div>
                <div className="sidebar__widget__two">
                    <div
                    className="need__section"
                    style={{
                        backgroundImage:
                        "url(images/service/service-details-03.png)"
                    }}
                    >
                    <div className="need___top">
                        <div className="icon">
                        <span className="icon-29" />
                        </div>
                        <h3>
                        Do You Need <br /> Any <span>Help?</span>
                        </h3>
                    </div>
                    <div className="need___bottom">
                        <a href="info@example.com">info@example.com</a>
                        <a href="+44-123-456-7890">+44-123-456-7890</a>
                    </div>
                    </div>
                </div>
                </aside>
            </div>
            <div className="content__side col-xl-8 col-lg-12 col-md-12 col-sm-12 ps-xl-4">
                <div className="services__single">
                <div className="inner__box">
                    <div className="image__box">
                    <figure>
                        <img
                        src="images/service/service-details-01.png"
                        alt=""
                        />
                    </figure>
                    </div>
                </div>
                <div className="content__box">
                    <h3>Strategy &amp; Planning</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
                    enim justo, in mauris posuere dolor. Dolor felis sapien sit
                    egestas. Ut venenatis faucibus non sed faucibus mauris ultricies.
                    Cras varius proin amet vehicula magna. Ultricies gravida vel
                    volutpat sed. Platea sed fames at egestas amet feugiat laoreet sed
                    potenti integer. Viverra at maecenas convallis condimentum egestas
                    nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin.{" "}
                    </p>
                    <p>
                    Fringilla mauris magna sit elesystemmentum elit. Facilisi lacus,
                    pharetra quam eu urna amet aenean. Nunc mattis vitae tellus
                    bibendum a eu, nunc. Consequat commodo ac cursus in donec orci
                    tempus. Massa sed sit faucibus neque habitant consequat.
                    </p>
                </div>
                <div className="service_system">
                    <div className="row">
                    <div className="col-xl-6 col-lg-12 pr-xl-0">
                        <div className="service__system__left">
                        <h3>
                            Roofing System <br /> Area.
                        </h3>
                        <p>
                            Dolor felis sapien sit egestas venenatis faucibus non sed
                            faucibus mauris ultricies. Cras varius proin amet vehicula
                            magna. Ultricies gravida vel volutpat sed platea sed fames
                            at egestas amet feugiat laoreet sed potenti integer.
                        </p>
                        <div className="system__list">
                            <ul>
                            <li>
                                <span className="icon-41" /> Expert Engineers{" "}
                            </li>
                            <li>
                                <span className="icon-41" /> Award Wining Company{" "}
                            </li>
                            <li>
                                <span className="icon-41" /> Required Works{" "}
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="service__system__right">
                        <div className="inner__box">
                            <div className="image__box">
                            <figure className="image">
                                <img
                                src="images/service/service-details-02.png"
                                alt=""
                                />
                            </figure>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="our__solutions">
                    <h3>Our Solutions</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
                    enim justo, in mauris posuere dolor. Dolor felis sapien sit
                    egestas. Ut venenatis faucibus non sed faucibus mauris ultricies.
                    Cras varius proin amet vehicula magna. Ultricies gravida vel
                    volutpat sed. Platea sed fames at egestas amet feugiat laoreet sed
                    potenti integer. Viverra at maecenas convallis condimentum egestas
                    nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin.
                    </p>
                </div>
                <div className="download__section">
                    <h3>Download Resources</h3>
                    <div className="download__one">
                    <div className="left__one">
                        <div className="icon">
                        <span className="icon-34" />
                        </div>
                        <div className="text">
                        <h6>Company Briefing Update for the Year</h6>
                        <p>Pdf(160kb)</p>
                        </div>
                    </div>
                    <div className="right__one">
                        <button>Download</button>
                    </div>
                    </div>
                    <div className="download__one">
                    <div className="left__one">
                        <div className="icon">
                        <span className="icon-34" />
                        </div>
                        <div className="text">
                        <h6>Cultural Centers and Event schedule</h6>
                        <p>Pdf(160kb)</p>
                        </div>
                    </div>
                    <div className="right__one">
                        <button>Download</button>
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
