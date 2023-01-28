import React from 'react'



import DisplayCounter from '../components/home/DisplayCounter';
import Experience from '../components/home/Experience';
import Service from '../components/home/Service';
import Ideology from '../components/home/Ideology';
import Expertise from '../components/home/Expertise';
import SuccessStory from '../components/home/SuccessStory';
import Present from '../components/home/Present';
import Project from '../components/home/Project';
import Kitchendreams from '../components/home/Kitchendreams';
import Greatclient from '../components/home/Greatclient'
<<<<<<< HEAD
import BannerSlider from '../components/home/BannerSlider';
=======
// import BannerSlider from '../components/home/BannerSlider';
>>>>>>> 65bba541480422664340a2d6f725452a27203e81
import Client from '../components/home/Client';


const HomePage = () => {
  return (
    <>
        {/* <Header/> */}
        {/* <BannerSlider/> */}
        
        <DisplayCounter/>
        <Experience/>
        <Service/>
        <Client />
        <Ideology/>
        <Kitchendreams/>
        <Expertise/>
        <SuccessStory/>
        <Present/>
        <Project/>
        <Greatclient/>

        {/* <CallToMain/>
        <Subscribe/>
        <Footer/> */}
    </>
  )
}

export default HomePage