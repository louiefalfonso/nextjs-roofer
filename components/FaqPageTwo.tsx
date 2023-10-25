import React from 'react'

export default function () {
  return (
    <>
    <section className="faq__page__one see__pad">
        <div className="auto_container">
            <div className="row">
            <div className="col-lg-7 col-md-12">
                <div className="faq__page__left">
                <div className="faq__right__section">
                    <div className="tab__content">
                    <div className="title">
                        <div className="sub__title">
                        <h6>Faq’s</h6>
                        </div>
                        <div className="main__title">
                        <h2>
                            {" "}
                            Frequently Asked <br />
                            Question{" "}
                        </h2>
                        </div>
                    </div>
                    <div className="tab__text">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Adipiscing integer ultrices suspendisse varius etiam est.
                        </p>
                    </div>
                    </div>
                    <div className="faq-content-box">
                    <div className="accordion-box-style1">
                        {/*Start single accordion box*/}
                        <div className="accordion accordion-block">
                        <div className="accord-btn">
                            <h5>
                            <span>Q.</span> How Can I Take Your Service?
                            </h5>
                            <div className="collapse-icon">
                            <div className="plus">
                                <span className="icon-44" />
                            </div>
                            <div className="minace">
                                <span className="icon-56" />
                            </div>
                            </div>
                        </div>
                        <div className="accord-content">
                            <p>
                            Sodales posuere facilisi metus elementum ipsum egestas
                            amet amet mattis commodo Nunc tempor amet massa diam
                            mauris Risus sodales interdum.
                            </p>
                        </div>
                        </div>
                        {/*End single accordion box*/}
                        {/*Start single accordion box*/}
                        <div className="accordion accordion-block">
                        <div className="accord-btn active">
                            <h5>
                            <span>Q.</span> How does Your Pricing Work?
                            </h5>
                            <div className="collapse-icon">
                            <div className="plus">
                                <span className="icon-44" />
                            </div>
                            <div className="minace">
                                <span className="icon-56" />
                            </div>
                            </div>
                        </div>
                        <div className="accord-content collapsed" style={{}}>
                            <p>
                            Sodales posuere facilisi metus elementum ipsum egestas
                            amet amet mattis commodo Nunc tempor amet massa diam
                            mauris Risus sodales interdum.
                            </p>
                        </div>
                        </div>
                        {/*End single accordion box*/}
                        {/*Start single accordion box*/}
                        <div className="accordion accordion-block">
                        <div className="accord-btn">
                            <h5>
                            <span>Q.</span>How Does Saas Work?
                            </h5>
                            <div className="collapse-icon">
                            <div className="plus">
                                <span className="icon-44" />
                            </div>
                            <div className="minace">
                                <span className="icon-56" />
                            </div>
                            </div>
                        </div>
                        <div className="accord-content">
                            <p>
                            Sodales posuere facilisi metus elementum ipsum egestas
                            amet amet mattis commodo Nunc tempor amet massa diam
                            mauris Risus sodales interdum.
                            </p>
                        </div>
                        </div>
                        {/*End single accordion box*/}
                        {/*Start single accordion box*/}
                        <div className="accordion accordion-block">
                        <div className="accord-btn">
                            <h5>
                            <span>Q.</span> Are You Ready to take our roofing service?
                            </h5>
                            <div className="collapse-icon">
                            <div className="plus">
                                <span className="icon-44" />
                            </div>
                            <div className="minace">
                                <span className="icon-56" />
                            </div>
                            </div>
                        </div>
                        <div className="accord-content">
                            <p>
                            Sodales posuere facilisi metus elementum ipsum egestas
                            amet amet mattis commodo Nunc tempor amet massa diam
                            mauris Risus sodales interdum.
                            </p>
                        </div>
                        </div>
                        {/*End single accordion box*/}
                        {/*Start single accordion box*/}
                        <div className="accordion accordion-block">
                        <div className="accord-btn">
                            <h5>
                            <span>Q.</span> How Supply Includes does Your Pricing?
                            </h5>
                            <div className="collapse-icon">
                            <div className="plus">
                                <span className="icon-44" />
                            </div>
                            <div className="minace">
                                <span className="icon-56" />
                            </div>
                            </div>
                        </div>
                        <div className="accord-content">
                            <p>
                            Sodales posuere facilisi metus elementum ipsum egestas
                            amet amet mattis commodo Nunc tempor amet massa diam
                            mauris Risus sodales interdum.
                            </p>
                        </div>
                        </div>
                        {/*End single accordion box*/}
                        {/*Start single accordion box*/}
                        <div className="accordion accordion-block">
                        <div className="accord-btn">
                            <h5>
                            <span>Q.</span> How Long your warranty Work ?
                            </h5>
                            <div className="collapse-icon">
                            <div className="plus">
                                <span className="icon-44" />
                            </div>
                            <div className="minace">
                                <span className="icon-56" />
                            </div>
                            </div>
                        </div>
                        <div className="accord-content">
                            <p>
                            Sodales posuere facilisi metus elementum ipsum egestas
                            amet amet mattis commodo Nunc tempor amet massa diam
                            mauris Risus sodales interdum.
                            </p>
                        </div>
                        </div>
                        {/*End single accordion box*/}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 offset-lg-1">
                <div className="faq__page__right p_relative">
                <div
                    className="image__layer"
                    style={{ backgroundImage: "url(images/shape/shape-06.png)" }}
                ></div>
                <div className="inner__content">
                    <div className="contact__title">
                    <h4>
                        Asked Your Valuable <br /> Question{" "}
                    </h4>
                    </div>
                    <form
                    method="post"
                    action="sendemail.php"
                    id="contact-form"
                    >
                    <div className="from__inner">
                        <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Your name"
                            aria-required="true"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            aria-required="true"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Phone number"
                            aria-required="true"
                        />
                        </div>
                        <div className="form-group">
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={9}
                            placeholder="Type message"
                            defaultValue={""}
                        />
                        </div>
                        <div className="message-btn">
                        <div className="faq__btn btn-one">
                            <button
                            className="btn__submit"
                            type="submit"
                            name="submit-form"
                            >
                            <span>Submit Now</span>{" "}
                            </button>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
