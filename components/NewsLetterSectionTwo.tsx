import React from 'react'

export default function NewsLetterSectionTwo() {
  return (
    <>
    <section className="news_letter">
        <div className="auto_container">
            <div className="news_letter_content">
            <div className="row">
                <div className="col-lg-6">
                <div className="news_letter_left p_relative">
                    <h3>Our Newsletters</h3>
                    <div className="form-inner p_relative">
                    <form
                        action="index.html"
                        method="post"
                        className="subscribe-form"
                    >
                        <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                        />
                        <button type="submit" className="btn-two">
                            Subscribe Now
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 ps-xl-0">
                <div className="news_letter_right p_relative">
                    <div
                    className="image_layer shape_01"
                    style={{
                        backgroundImage: "url(images/shape/shape-03.png)"
                    }}
                    >
                    {" "}
                    </div>
                    <div className="news_letter_image">
                    <figure className="image">
                        <img src="images/resource/news-letter.png" alt="" />
                    </figure>
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
