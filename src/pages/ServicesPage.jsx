import React from 'react'
import TopBanner from '../components/about/TopBanner'
import CommercialKitchen from '../components/services/CommercialKitchen'
import ConsultingService from '../components/services/ConsultingService'
import LPGPipeline from '../components/services/LPGPipeline'

const ServicesPage = () => {
  return (
    <>
        <TopBanner name="Commercial Kitchen Consulting"/>
        <CommercialKitchen/>
        <LPGPipeline/>
        <ConsultingService/>
    </>
  )
}

export default ServicesPage