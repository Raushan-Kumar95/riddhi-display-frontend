import React from 'react'
import Header from '../components/header/Header';
import DisplayCounter from '../components/home/DisplayCounter';
import Experience from '../components/home/Experience';
import Service from '../components/home/Service';
import Ideology from '../components/home/Ideology';
import Expertise from '../components/home/Expertise';
import SuccessStory from '../components/home/SuccessStory';
import Present from '../components/home/Present';
import Project from '../components/home/Project';
import Footer from '../components/footer/Footer';
import CallToMain from '../components/home/CallToMain';
import Subscribe from '../components/home/Subscribe';
import Kitchendreams from '../components/home/Kitchendreams';


const HomePage = () => {
  return (
    <>
        <Header/>
        <DisplayCounter/>
        <Experience/>
        <Service/>
        <Ideology/>
        <Kitchendreams/>
        <Expertise/>
        <SuccessStory/>
        <Present/>
        <Project/>
        <CallToMain/>
        <Subscribe/>
        <Footer/>
    </>
  )
}

export default HomePage