
import AboutusSection from '@/components/AboutusSection'
import ChooseSectionTwo from '@/components/ChooseSectionTwo'
import FunFactSection from '@/components/FunFactSection'
import HistorySection from '@/components/HistorySection'
import NewsLetterSectionTwo from '@/components/NewsLetterSectionTwo'
import TeamsSection from '@/components/TeamsSection'
import TestimonialsAbout from '@/components/TestimonialsAbout'
import React from 'react'

export default function page() {
  return (
    <>
    <section className="page__title p_relative">
      <div className="bg-layer parallax-bg" data-parallax='{"y": 20}' style={{ backgroundImage: "url(images/resource/page-title.png)" }}></div>
      <div className="auto_container">
        <div className="content-box p_relative">
          <h1 className="title">About Us</h1>
          <ul className="bread-crumb">
            <li><a href="index.html">Home </a></li>
            <li><span> - </span>About{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <AboutusSection/>
    <HistorySection/>
    <FunFactSection/>
    <ChooseSectionTwo/>
    <TeamsSection/>
    <TestimonialsAbout/>
    <NewsLetterSectionTwo/>
    </>
  )
}
