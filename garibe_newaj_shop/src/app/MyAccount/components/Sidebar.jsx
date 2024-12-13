import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='h-[full] w-full  flex justify-center'>
      <ul className='flex flex-col items-center  gap-5 h-full w-[70%] max-md:w-auto '>
        <Link className='h-auto w-full font-semibold  text-xl bg-[#F56A29] text-white' href='/MyAccount'><li className='h-auto w-full  px-2  py-2'>Dashboard</li></Link>
        <Link className='h-auto w-full font-semibold hover:bg-[#F56A29] hover:text-white  text-xl bg-[#F1F1F1] text-black' href='/MyAccount/Orders'><li className='h-auto w-full px-2  py-2'>Orders</li></Link>
        <Link className='h-auto w-full font-semibold hover:bg-[#F56A29] hover:text-white  text-xl bg-[#F1F1F1] text-black' href='/MyAccount/Downloads'><li className='h-auto w-full px-2  py-2'>Downloads</li></Link>
        <Link className='h-auto w-full font-semibold hover:bg-[#F56A29] hover:text-white  text-xl bg-[#F1F1F1] text-black' href='/MyAccount/Address'><li className='h-auto w-full px-2  py-2'>Address</li></Link>
        <Link className='h-auto w-full font-semibold hover:bg-[#F56A29] hover:text-white  text-xl bg-[#F1F1F1] text-black' href='/MyAccount/AccountDetails'><li className='h-auto w-full px-2  py-2'>Account Details</li></Link>
        <Link className='h-auto w-full font-semibold hover:bg-[#F56A29] hover:text-white  text-xl bg-[#F1F1F1] text-black' href='/Login'><li className='h-auto w-full px-2  py-2'>Log OUt</li></Link>

      </ul>
    </div>
  )
}

export default Sidebar
