import React from 'react'
import CompanyHistory from '../components/about/CompanyHistory'
import Director from '../components/about/Director'
import { Experiance } from '../components/about/Experiance'
import TopBanner from '../components/about/TopBanner'
import Greatclient from '../components/home/Greatclient'
import Ideology from '../components/home/Ideology'
import Kitchendreams from '../components/home/Kitchendreams'
import Present from '../components/home/Present'
import SuccessStory from '../components/home/SuccessStory'



const AboutUsPage = () => {
    

  return (
    <div>
        <TopBanner name="About us"/>
        <Experiance/>
        <Director/>
        <CompanyHistory/>
        <Ideology/>
        <Kitchendreams/>
        <SuccessStory/>
        <Present/>
        <Greatclient />
    </div>
  )
}

export default AboutUsPage