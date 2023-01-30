import React from 'react'
import GetInTouch from '../components/contact/GetInTouch'
import TopBannerDownload from '../components/download/TopBannerDownload'



const ContactPage = () => {
  return (
    <section>
       <TopBannerDownload name="Contact" />
        <GetInTouch/>
    </section>
  )
}

export default ContactPage