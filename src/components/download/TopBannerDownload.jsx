import React from 'react'


const TopBannerDownload = (props) => {
  const img_class = "p-24 md:p-32 flex justify-center bg-cover items-center bg-[url('/src/assets/Imageslist-1/bakery_banner.jpg')]";
  console.log(img_class)
  return (
    <>
      <div className={img_class}>
        <h1 className="text-4xl md:text-6xl font-bold md:font-extrabold text-white">{props.name}</h1>
      </div>
    </>
  )
}

export default TopBannerDownload