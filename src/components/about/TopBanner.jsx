import React from 'react'


const TopBanner = (props) => {
    const img_class= "p-32 flex justify-center items-center bg-[url('"+props.img_path+"')]";
    console.log(img_class)
  return (
    <>
     <div className={img_class}>
        <h1 className="text-6xl font-extrabold text-white">{props.name}</h1>
     </div>
    </>
  )
}

export default TopBanner