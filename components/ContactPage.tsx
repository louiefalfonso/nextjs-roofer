import React from 'react'

export default function ContactPage() {
  return (
    <>
    <section className="contact__page see__pad p_relative">
        <div className="auto_container">
            <div className="contact__page__content">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                <div className="contact__left">
                    <div className="title">
                    <div className="sub__title">
                        <h6>Contact Info</h6>
                    </div>
                    <div className="main__title">
                        <h2>Get In Touch</h2>
                    </div>
                    </div>
                    <div className="normal__text">
                    <p>
                        Eros proin nibh neque interdum accumsan, neque vitae. Tortor
                        etiam sed suspendise faucibus volutpat mattis tortor nec.
                    </p>
                    </div>
                    <div className="contact__info">
                    <div className="contact__info__block">
                        <div className="left__site__info">
                        <div className="contact__icon one">
                            <span className="icon-30" />
                        </div>
                        </div>
                        <div className="right__site__info one">
                        <h4>Our Location</h4>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </div>
                    </div>
                    <div className="contact__info__block">
                        <div className="left__site__info">
                        <div className="contact__icon one">
                            <span className="icon-51" />
                        </div>
                        </div>
                        <div className="right__site__info one">
                        <h4>Email Address</h4>
                        <a href="mailto:contact@example.com">
                            contact@example.com{" "}
                        </a>{" "}
                        <br />
                        <a href="mailto:support@example.com">support@example.com </a>
                        </div>
                    </div>
                    <div className="contact__info__block">
                        <div className="left__site__info">
                        <div className="contact__icon one">
                            <span className="icon-36" />
                        </div>
                        </div>
                        <div className="right__site__info one">
                        <h4>Phone Number</h4>
                        <p>Emergency Cases</p>
                        <a href="tel:+456987231">+(208) 555-0112 (24/7)</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 col-md-12 offset-lg-2">
                <div className="contact__right">
                    <div className="form-inner">
                    <div className="contact___title">
                        <span>Booking Form</span>
                        <h3> Send Us Message</h3>
                    </div>
                    <form
                        method="post"
                        action="sendemail.php"
                        id="contact-form"
                    >
                        <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                            type="name"
                            name="first-name"
                            placeholder="Your Name"
                            aria-required="true"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ps-xl-0 form-group">
                            <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            aria-required="true"
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input
                            type="name"
                            name="last-name"
                            placeholder="Your Name"
                            aria-required="true"
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <textarea
                            name="message"
                            placeholder="Type message"
                            defaultValue={""}
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                            <div className="more__buttons">
                            <button
                                className="btn-one"
                                type="submit"
                                name="submit-form"
                            >
                                
                                <span>Send Your Message </span>
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
        </div>
    </section>

    </>
  )
}
