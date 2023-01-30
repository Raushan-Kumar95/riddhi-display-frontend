import React from 'react'
import DownloadBroucher from '../components/download/DownloadBroucher'
import TopBannerDownload from '../components/download/TopBannerDownload'




const DownloadPage = () => {
  return (
    <div>
        <TopBannerDownload name="Download" />
        <DownloadBroucher />
    </div>
  )
}

export default DownloadPage