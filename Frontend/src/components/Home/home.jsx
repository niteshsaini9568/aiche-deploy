import React from 'react'
import Navbar from "../internal-components/Navbar";
import Banner from "./Banner";
import Member from "./member";
import Events from "./Events";
import Team from "./Team";
import About from "./About";
import Slider from "./slider";
import History from "./History";
import President from "./president";
import Faq from "./faq";
import Voices from "./Visionary";
import Testimonials from "./Vision";
// import Testimonial18 from "./student-voice";
import Footer from "../internal-components/footer";
import Testimonial18 from './student-voice';


function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex items-center justify-center my-10 flex-col md:flex-row">
        <Member />
        <Events />
        <Team />
      </div>
      <About />
      <Slider />
      <President />
      <Voices />
      <Testimonial18 />
      <History />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home