import React from 'react'
import Header from '../components/header/Header';
import Display_counter from '../components/home/Display_counter';
import Experience from '../components/home/Experience';
import Service from '../components/home/Service';
import Ideology from '../components/home/Ideology';
import Project from '../components/home/Project';
import Footer from '../components/footer/Footer';

const HomePage = () => {
  return (
    <>
        <Header/>
        <Display_counter/>
        <Experience/>
        <Service/>
        <Ideology/>
        <Project/>
        <Footer/>
    </>
  )
}

export default HomePage