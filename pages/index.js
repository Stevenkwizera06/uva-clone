import React from 'react'
import Amsterdam from "@/src/section/Amsterdam";
import Navbar from "@/src/components/Navbar";
import Hero from '@/src/section/Hero';
import Current from '@/src/section/Current';
import News from '@/src/section/News';
import GotTo from '@/src/section/GoTo';
import Footer from '@/src/components/Footer';
import Arrow from '@/src/section/Arrow';

function Home() {
  return (
    <>
      
      <Navbar />
      <Amsterdam />
      <Hero />
      <Current />
      <News />
      {/* <Arrow /> */}
      <GotTo />
      <Footer />
    </>
  );
}

export default Home

