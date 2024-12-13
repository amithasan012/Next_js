'use client'
import Link from "next/link";
import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => { 
    const toggleOpen = document.getElementById('toggleOpen');
     const toggleClose = document.getElementById('toggleClose'); 
     const collapseMenu = document.getElementById('collapseMenu'); 
     function handleClick() {
       if (collapseMenu.style.display === 'block') 
        { collapseMenu.style.display = 'none'; }
        else { collapseMenu.style.display = 'block'; } } 
        if (toggleOpen) 
          { toggleOpen.addEventListener('click', handleClick); } 
        if (toggleClose) { toggleClose.addEventListener('click', handleClick); } 
      //Cleanup event listeners on component unmount
      return () => { 
       if (toggleOpen) { toggleOpen.removeEventListener('click', handleClick); } 
       if (toggleClose) { toggleClose.removeEventListener('click', handleClick); } }; }
       , []);

    return (
    <>
    <header className='flex  bg-[#F0EDED] font-sans min-h-[70px] tracking-wide relative z-50 '>
      <div className='  text-2xl flex flex-wrap items-center justify-between  sm:px-12  px-1 py-3  w-full  mx-auto border border-black'>
        <a href="" className=""><h1 className="text-black">GARIBE NEWAJ SHOP</h1>
        </a>

        <div id="collapseMenu"
          className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                        <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>
          <ul
            className='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='max-lg:border-b max-lg:py-3'><Link href='/'
              className='hover:text-[#F56A29] text-[15px] font-bold text-[#F56A29] block bg-white pl-2 pr-2 rounded-md'>Home</Link></li>
            <li className='group max-lg:border-b max-lg:py-3 relative bg-white pl-2 pr-2 rounded-md'>
              <a href=''
                className='hover:text-[#F56A29] text-gray-600 text-[15px] font-bold lg:hover:fill-[#F56A29] block'>Shop<svg
                  xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16" data-original="#000000" />
                </svg>
              </a>
              <ul
                className='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <li className='border-b py-2 '><Link href='ProductDetails'
                  className='hover:text-[#F56A29] text-gray-600 text-[15px] font-bold block'>Product Details</Link></li>
                <li className='border-b py-2 '><Link href='Collection'
                  className='hover:text-[#F56A29] text-gray-600 text-[15px] font-bold block'>Collection</Link></li>
                <li className='border-b py-2 '><Link href='Checkout'
                  className='hover:text-[#F56A29] text-gray-600 text-[15px] font-bold block'>Checkout</Link></li>
                <li className='border-b py-2 '><Link href='Cart'
                  className='hover:text-[#F56A29] text-gray-600 text-[15px] font-bold block'>Cart</Link></li>
              </ul>
            </li>
            <li className='group max-lg:border-b max-lg:py-3 relative bg-white pl-2 pr-2 rounded-md'>
              <a href=''
                className='hover:text-[#F56A29] text-gray-600 text-[15px] font-bold lg:hover:fill-[#F56A29] block'>Pages<svg
                  xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16" data-original="#000000" />
                </svg>
              </a>
              <ul
                className='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <li className='border-b py-2 '><Link href='MyAccount'
                  className='hover:text-[#F56A29] text-gray-600 text-[15px] font-bold block'>My Account</Link></li>
               
              </ul>
            </li>
            <li className='max-lg:border-b max-lg:py-3'><Link href='/AboutUs'
              className='hover:text-[#F56A29] text-gray-600 text-[15px] font-bold block bg-white pl-2 pr-2 rounded-md'>About Us</Link></li>
            <li className='max-lg:border-b max-lg:py-3'><Link href='/ContactUs'
              className='hover:text-[#F56A29] text-gray-600 text-[15px] font-bold block bg-white pl-2 pr-2 rounded-md'>Contact Us</Link></li>
          </ul>
        </div>
        <div className='flex items-center lg:hidden space-x-8 max-lg:ml-auto'>

          <button id="toggleOpen" className='lg:hidden'>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
       
      </div>
    </header>
    </> );
}
 
export default Header;