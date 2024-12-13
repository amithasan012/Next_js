import React from 'react'
import Banner from '@/app/assets/Banner.png'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div>
      <div className="relative font-sans  before:w-full h-[70vh]   ">
      <Image src={Banner} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-5 h-full max-w-6xl mx-auto flex flex-col justify-center items-start text-center text-black p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">SPECIAL SALE UP TO 40% OFF!</h2>
        <p className="sm:text-lg text-base text-center text-black ">A trusted smart panjabi &  t-shirt shop</p>

        <button
          type="button"
          className="mt-12 bg-white text-black  text-base py-3 px-6  rounded-md hover:bg-[#F56A29] hover:text-white transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
    </div>
  )
}

export default HeroSection
