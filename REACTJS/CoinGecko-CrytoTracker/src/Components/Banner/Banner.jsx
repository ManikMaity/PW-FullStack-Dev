import React from 'react'
import Image1 from "../../assets/crypto-bg-image.jpg"

const Banner = () => {
  return (
    <div className='relative h-96 w-full'>
      <img className='w-full h-full object-cover brightness-[0.2]' src={Image1} alt="bannerImage" />
      <div className='absolute left-0 top-0 w-full h-full grid place-content-center'>
            <div className='text-center text-white flex flex-col gap-3 mx-3'>
                <h1 className='font-bold text-[3rem]'>Cryto Tracker</h1>
                <p className='font-mono tracking-widest'>Get all cryto info in one place.</p>
            </div>
      </div>
    </div>
  )
}

export default Banner
