import { useState } from 'react';
import { ProductsData } from './ProjectData'


// import { useEffect } from 'react';

const AllProducts = () => {

    const [data, setData] = useState(ProductsData);

    // useEffect = () => {
    //     setData(ProductsData);
    // }

    return (
        <div className='px-16 py-4'>
            <h1 className='font-bold text-2xl bg-red-200 px-4 py-2 inline-block'>All Projects</h1>
            {/* <img src={img1} alt="" /> */}
            <div className='grid grid-cols-3 gap-8  place-items-center'>
                {
                    data.map(item => {
                            
                        return (
                            <div className='flex flex-col gap-4 justify-center items-center'>
                                {/* <img src={item.img} alt={item.name} srcset="" /> */}
                                <img src={item.img}  alt={item.img} />
                                <h1 className='text-center'> {item.name} </h1>
                                <div>
                                    <h1>Size: {item.size}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    );

}

export default AllProducts;