import React from 'react'
import Header from '../components/header/Header';
import Display_counter from '../components/home/Display_counter';
import Experience from '../components/home/Experience';
import Service from '../components/home/Service';
import Ideology from '../components/home/Ideology';
import Expertise from '../components/home/Expertise';
import SuccessStory from '../components/home/SuccessStory';
import Present from '../components/home/Present';
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
        <Expertise/>
        <SuccessStory/>
        <Present/>
        <Project/>
        <Footer/>
    </>
  )
}

export default HomePage