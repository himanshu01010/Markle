// src/pages/Home.jsx

import React from 'react';
import About_hero from "../components/About_hero";
// import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import About_emp from '../components/About_emp';

const About = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <About_hero/>
      {/* <Benefits /> */}
      <About_emp/>
      {/* <Collaboration />
      <Services />
      <Pricing />
      <Roadmap /> */}
      <Footer />
    </div>
  );
};

export default About;
