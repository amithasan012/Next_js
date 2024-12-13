import React from 'react'
import Link from 'next/link'

const Orders = () => {
  return (
    <div className='h-[60%] w-[70%] bg-white'>
    <h1 className='text-3xl font-semibold mb-12'>
      Orders
    </h1>
     <table className=' h-auto w-full px-8 py-8 border border-black'>
         <tbody>
          <tr className='bg-slate-200'>
              <th className='border border-black'>Order</th>
              <th className='border border-black '>Date</th> 
              <th className='border border-black '>Status</th>
              <th className='border border-black '>Total</th>
              <th className='border border-black '>Action</th>
          </tr>
          <tr>
              <td className='text-center border border-black'>1</td>
              <td className='text-center border border-black'>May 10, 2024</td>
              <td className='text-center border border-black'>Completed</td>
              <td className='text-center border border-black'>20$</td>
              <td className='text-center border border-black text-[#F56A29]'>View</td>
          </tr>
          <tr>
              <td className='text-center border border-black'>1</td>
              <td className='text-center border border-black'>May 10, 2024</td>
              <td className='text-center border border-black'>Completed</td>
              <td className='text-center border border-black'>20$</td>
              <td className='text-center border border-black text-[#F56A29]'>View</td>
          </tr>
        </tbody>   
      </table>
  </div>

  )
}

export default Orders
