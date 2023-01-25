import React from 'react';
import Header from '../components/Header';
import Display_counter from '../components/home/Display_counter';
import Experience from '../components/home/Experience';
import Service from '../components/home/Service';
import Project from '../components/home/Project';
import Footer from '../components/Footer';
import Ideology from '../components/home/Ideology';

const Home = () => {
  return (
    <>
        <Header/>
        <Display_counter/>
        <Experience/>
        <Service/>
        <Project/>
        <Ideology/>
        <Footer/>
    </>
  )
}

export default Home