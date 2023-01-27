import React from 'react'
import Header from '../components/header/Header';
import Display_counter from '../components/home/Display_counter';
import Experience from '../components/home/Experience';
import Service from '../components/home/Service';
import Ideology from '../components/home/Ideology';
import Project from '../components/home/Project';
import Footer from '../components/footer/Footer';
import Kitchendreams from "../components/home/kitchendreams"

const HomePage = () => {
  return (
    <>
        <Header/>
        <Display_counter/>
        <Experience/>
        <Service/>
        <Kitchendreams />
        <Ideology/>
        <Project/>
        <Footer/>
    </>
  )
}

export default HomePage