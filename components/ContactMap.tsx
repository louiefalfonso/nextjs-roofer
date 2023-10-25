import React from 'react'

export default function ContactMap() {
  return (
    <>
    <section className="google__map">
        <div className="map__location">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8945.455727589511!2d-3.5121188!3d55.9083898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887d91f66509341%3A0xaf63782c808eaff9!2sBrandon%20Hire%20Station!5e0!3m2!1sen!2suk!4v1698261963373!5m2!1sen!2suk"
            width="100%"
            height={450}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    </section>
    </>
  )
}
