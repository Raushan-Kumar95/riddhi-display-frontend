import React from 'react'
import TopBanner from '../components/about/TopBanner'
import DownloadBrohure from '../components/download/DownloadBrohure'


const img_path='src/assets/Imageslist-1/bakery_banner.jpg'

const DownloadPage = () => {
  return (
    <div>
        <TopBanner name="Download" img_paths={img_path} />
        <DownloadBrohure />
    </div>
  )
}

export default DownloadPage