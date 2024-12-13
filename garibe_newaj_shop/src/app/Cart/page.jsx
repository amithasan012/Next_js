
import React from 'react'
import shirt from '../assets/shirt.png'
import Image from 'next/image'
const Cart = () => {
  return (
    <div>
            <div className="font-sans bg-white max-w-6xl mx-auto p-4">
            <h2 className="text-3xl font-bold text-gray-800">Home/ <span className='text-[#F56A29]'>Cart</span></h2>
            <div className="overflow-x-auto">
                <table className="mt-12 w-full border-collapse divide-y border border-black mb-8">

                <thead className="whitespace-nowrap text-left">
                    <tr>
                    <th className="text-base text-gray-500 font-medium p-2">Description</th>
                    <th className="text-base text-gray-500 font-medium p-2">Size</th>
                    <th className="text-base text-gray-500 font-medium p-2">Quantity</th>
                    <th className="text-base text-gray-500 font-medium p-2">Remove</th>
                    <th className="text-base text-gray-500 font-medium p-2">Price</th>
                    </tr>
                </thead>

                <tbody className="whitespace-nowrap divide-y">
                    <tr>
                    <td className="px-2 py-4">
                        <div className="flex items-center gap-4 w-max">
                        <div className="h-32 shrink-0">
                            <img src='https://readymadeui.com/images/product6.webp' alt='no image' className="w-full h-full object-contain rounded-lg" />
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-800">Black T-Shirt</p>
                        </div>
                        </div>
                    </td>

                    <td className="px-2 py-4">
                        <span className="bg-transparent border flex items-center justify-center w-11 h-10 rounded-lg text-base">
                        M
                        </span>
                    </td>

                    <td className="px-2 py-4">
                        <div className="flex overflow-hidden border w-max rounded-lg">
                        <button type="button" className="bg-gray-100 flex items-center justify-center w-11 h-10 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                            </svg>
                        </button>
                        <span className="bg-transparent flex items-center justify-center w-11 h-10 font-semibold text-gray-800 text-base">
                            1
                        </span>
                        <button type="button" className="bg-[#F56A29] text-white flex items-center justify-center w-11 h-10 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                            </svg>
                        </button>
                        </div>
                    </td>

                    <td className="px-2 py-4">
                        <button type="button" className="bg-transparent border flex items-center justify-center w-11 h-10 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-red-500 inline" viewBox="0 0 24 24">
                            <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"></path>
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"></path>
                        </svg>
                        </button>
                    </td>

                    <td className="px-2 py-4">
                        <h4 className="text-base font-bold text-gray-800">$18.5</h4>
                    </td>
                    </tr>

                    <tr>
                    <td className="px-2 py-4">
                        <div className="flex items-center gap-4 w-max">
                        <div className="h-32 shrink-0">
                            <img src='https://readymadeui.com/images/product2.webp' className="w-full h-full object-contain rounded-lg" />
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-800">Gray T-Shirt</p>
                        </div>
                        </div>
                    </td>

                    <td className="px-2 py-4">
                        <span className="bg-transparent border flex items-center justify-center w-11 h-10 rounded-lg text-base">
                        M
                        </span>
                    </td>

                    <td className="px-2 py-4">
                        <div className="flex overflow-hidden border w-max rounded-lg">
                        <button type="button" className="bg-gray-100 flex items-center justify-center w-11 h-10 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                            </svg>
                        </button>
                        <span className="bg-transparent flex items-center justify-center w-11 h-10 font-semibold text-gray-800 text-base">
                            1
                        </span>
                        <button type="button" className="bg-[#F56A29] text-white flex items-center justify-center w-11 h-10 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                            </svg>
                        </button>
                        </div>
                    </td>

                    <td className="px-2 py-4">
                        <button type="button" className="bg-transparent border flex items-center justify-center w-11 h-10 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                            <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"></path>
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"></path>
                        </svg>
                        </button>
                    </td>

                    <td className="px-2 py-4">
                        <h4 className="text-base font-bold text-gray-800">$18.5</h4>
                    </td>
                    </tr>

                </tbody>
                </table>
            </div>

            <div className='h-auto w-full flex justify-between mb-10 max-md:flex-col max-md:items-center max-md:gap-6'>
            <div className="w-[40%] h-[200px] border border-black max-md:h-auto max-md:w-auto">
                <h1 className='bg-[#F1F1F1] text-xl font-semibold mb-5'>Coupon</h1>
                <h1 className='px-4 mb-3'>Enter your coupon code if you have one</h1>
                <div className='flex h-auto px-4 mb-0 w-full justify-between max-md:mb-6'>
                    <input type="text" className='w-[45%] border border-black' placeholder='Enter Coupon code'/>
                    <button type="button" className=" text-base tracking-wide px-5 py-2.5 w-[45%] bg-[#F56A29] hover:bg-[#1F1F1F] text-white">Make Payment</button>

                </div>
                
            </div>
            <div className="w-[50%]  border border-black p-4 max-md:h-auto max-md:w-[90%] max-md:p-6">
                <ul className="text-gray-800 divide-y">
                <li className="flex flex-wrap gap-3 text-base py-3">Subtotal <span className="ml-auto font-bold">$37.00</span></li>
                <li className="flex flex-wrap gap-3 text-base py-3">Shipping <span className="ml-auto font-bold">$4.00</span></li>
                <li className="flex flex-wrap gap-3 text-base py-3">Tax <span className="ml-auto font-bold">$4.00</span></li>
                <li className="flex flex-wrap gap-3 text-base py-3 font-bold">Total <span className="ml-auto">$45.00</span></li>
                </ul>
                <button type="button" className="mt-6 text-base tracking-wide px-5 py-2.5 w-full bg-[#F56A29] hover:bg-[#1F1F1F] text-white ">Make Payment</button>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Cart
