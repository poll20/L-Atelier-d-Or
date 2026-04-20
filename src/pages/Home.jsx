import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Craftsmanship from '../components/Craftsmanship';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <About />
      <Craftsmanship />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
