import React from 'react'
import GetInTouch from '../components/contact/GetInTouch'
import TopBanner from '../components/about/TopBanner'

const img_path='src/assets/Imageslist-1/bakery_banner.jpg'

const ContactPage = () => {
  return (
    <section>
       <TopBanner name="Contact" img_paths={img_path} />
        <GetInTouch/>
    </section>
  )
}

export default ContactPage