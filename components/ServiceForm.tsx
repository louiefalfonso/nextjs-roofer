import React from 'react'

export default function ServiceForm() {
  return (
    <>
    <section className="service__from two">
      <div className="auto_container">
        <div className="from__one">
          <div className="from__left">
            <h3>Request For An Appointment</h3>
          </div>
          <div className="from__content">
            <form method="post" action="sendemail.php" id="contact-form">
              <div className="from__inner">
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Phone number"
                  />
                </div>
                <div className="message-btn">
                  <div className="service__btn btn-one">
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
    </section>

    </>
  )
}
