import React from 'react';
import Header from '../components/Header';
import Display_counter from '../components/home/Display_counter';
import Experience from '../components/home/Experience';
import Service from '../components/home/Service';
import Project from '../components/home/Project';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <Header/>
        <Display_counter/>
        <Experience/>
        <Service/>
        <Project/>
        <Footer/>
    </>
  )
}

export default Home