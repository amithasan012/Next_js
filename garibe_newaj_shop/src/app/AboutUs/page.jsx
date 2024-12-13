import React from 'react'
import company from '../assets/company.png'
import icn from '../assets/icon.png'
import bvl from '../assets/bvl.png'
import dock from '../assets/dock.png'
import ecco from '../assets/ecco.png'
import lacoste from '../assets/lacoste.png'
import Image from 'next/image'
const AboutUs = () => {
  return (
    <div>
      <div className='h-[8vh] ml-12 w-[90%] bg-white flex items-center text-2xl font-bold mb-5'>
            <h1>Home /</h1><h1 className='text-[#F56A29]'> About Us</h1>
      </div>
      <div className='h-auto w-full flex flex-col justify-center items-center mb-10'>
        <h1 className='font-bold text-xl mb-2'>Our Mission</h1>
        <div className='h-auto w-[50%] mb-3'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
            quam erat, vitae semper ante viverra volutpat. Morbi ultrices erat id 
            consectetur cursus. Nunc pharetra nunc lacinia nisi commodo egestas.
            In a scelerisque arcu. Maecenas magna tortor, euismod vel sodales eu,
        </p>
        </div>
      </div>
      <div className='h-auto w-full flex mb-10 justify-center items-center'>
        <div className='h-auto w-[45%]'>
            <Image src={company} alt='no image'></Image>
        </div>
        <div className='h-auto w-[45%]'>
            <h1 className='font-bold text-xl'>Our Company</h1><br />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet quam erat, vitae semper ante viverra volutpat. Morbi ultrices erat id consectetur cursus. Nunc pharetra nunc lacinia nisi commodo egestas. In a scelerisque arcu. Maecenas magna tortor, euismod vel sodales eu,
            </p><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
            quam erat, vitae semper ante viverra volutpat. Morbi ultrices erat id 
            consectetur cursus. Nunc pharetra nunc lacinia nisi commodo egestas.
            In a scelerisque arcu. Maecenas magna tortor, euismod vel sodales eu,
            </p>
        </div>
      </div>
      <div className='h-auto w-full flex flex-col justify-center items-center mb-10'>
        <h1 className='font-bold text-xl mb-2'>Why Choose Us</h1>
        <div className='h-auto w-[50%] mb-3'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
            quam erat, vitae semper ante viverra volutpat. Morbi ultrices erat id 
            consectetur cursus.
        </p>
        </div>
      </div>
        <div className='h-auto w-full mb-10 flex justify-between items-center max-md:flex-col'>
            <div className="bg-[#F1F1F1] px-8 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[20%] max-md:w-auto max-w-sm  font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div className="flex flex-col items-center">
                    <Image src={icn} alt='no image' className="w-60 h-60 rounded-full object-cover" />
                    <div className="mt-6 text-center">
                    <p className="text-base font-bold uppercase">Best in Industry</p>
                    <h3 className=" text-base mt-3 leading-relaxed">This game has always been, and will always be, about buckets.</h3>
                    </div>
                </div>
            </div>
            <div className="bg-[#F1F1F1] max-md:w-auto px-8 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[20%] max-w-sm  font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div className="flex flex-col items-center">
                    <Image src={icn} alt='no image' className="w-60 h-60 rounded-full object-cover" />
                    <div className="mt-6 text-center">
                    <p className="text-base font-bold uppercase">Best in Industry</p>
                    <h3 className=" text-base mt-3 leading-relaxed">This game has always been, and will always be, about buckets.</h3>
                    </div>
                </div>
            </div>
            <div className="bg-[#F1F1F1] max-md:w-auto px-8 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[20%] max-w-sm  font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div className="flex flex-col items-center">
                    <Image src={icn} alt='no image' className="w-60 h-60 rounded-full object-cover" />
                    <div className="mt-6 text-center">
                    <p className="text-base font-bold uppercase">Best in Industry</p>
                    <h3 className=" text-base mt-3 leading-relaxed">This game has always been, and will always be, about buckets.</h3>
                    </div>
                </div>
            </div>
            <div className="bg-[#F1F1F1] max-md:w-auto px-8 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[20%] max-w-sm  font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div className="flex flex-col items-center">
                    <Image src={icn} alt='no image' className="w-60 h-60 rounded-full object-cover" />
                    <div className="mt-6 text-center">
                    <p className="text-base font-bold uppercase">Best in Industry</p>
                    <h3 className=" text-base mt-3 leading-relaxed">This game has always been, and will always be, about buckets.</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-50 p-8 min-h-[350px] flex items-center justify-center font-sans">
            <div className="bg-[#F1F1F1] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-3 w-[90%] sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10">
                <div className="text-center">
                <h3 className="text-gray-800 text-4xl font-extrabold">5.4<span className="text-blue-600">M+</span></h3>
                <p className="text-gray-500 text-base font-semibold mt-3">Total Project</p>
                </div>
                <div className="text-center">
                <h3 className="text-gray-800 text-4xl font-extrabold">$80<span className="text-blue-600">K</span></h3>
                <p className="text-gray-500 text-base font-semibold mt-3">Customer Satisfaction</p>
                </div>
                <div className="text-center">
                <h3 className="text-gray-800 text-4xl font-extrabold">100<span className="text-blue-600">K</span></h3>
                <p className="text-gray-500 text-base font-semibold mt-3">On time Delivery</p>
                </div>
            </div>
        </div>
        <div className="bg-gray-50 p-8 min-h-[350px] flex flex-col items-center justify-center font-sans">
                <h2 className="text-gray-800 text-3xl font-bold mb-16 text-center">Our Brand</h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-12 max-lg:gap-12">
                    <div className="text-center">
                    <Image src={lacoste} alt='no image'></Image>
                    </div>
                    <div className="text-center">
                    <Image src={ecco} alt='no image'></Image>
                    </div>
                    <div className="text-center">
                    <Image src={dock} alt='no image'></Image>
                    </div>
                    <div className="text-center">
                    <Image src={bvl}  alt='no image'></Image>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AboutUs
