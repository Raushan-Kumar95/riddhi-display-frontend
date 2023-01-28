import React from 'react'
import Director from '../components/about/Director'
import { Experiance } from '../components/about/Experiance'
import TopBanner from '../components/about/TopBanner'
import Greatclient from '../components/home/Greatclient'
import Ideology from '../components/home/Ideology'
import Kitchendreams from '../components/home/Kitchendreams'
import Present from '../components/home/Present'
import SuccessStory from '../components/home/SuccessStory'

const img_path='src/assets/Imageslist-1/about_banner.jpg'

const AboutUsPage = () => {
  return (
    <div>
        <TopBanner name="About us" img_paths={img_path}/>
        <Experiance/>
        <Director/>
        <Ideology/>
        <Kitchendreams/>
        <SuccessStory/>
        <Present/>
        <Greatclient />
    </div>
  )
}

export default AboutUsPage