import React from 'react'
import Link from 'next/link'

const Downloads = () => {
  return (
    <div className='h-[60%] w-[70%] bg-white'>
    <h1 className='text-3xl font-semibold mb-12'>
      Downloads
    </h1>
     <table className=' h-auto w-full px-8 py-8 border border-black'>
         <tbody>
          <tr className='bg-slate-200'>
              <th className='border border-black'>Product</th>
              <th className='border border-black '>Date</th> 
              <th className='border border-black '>Download</th>
          </tr>
          <tr>
              <td className='text-center border border-black'>Jackets</td>
              <td className='text-center border border-black'>May 10, 2024</td>
              <td className='text-center border border-black text-[#F56A29]'>Click Here to Download File</td>
          </tr>
          <tr>
              <td className='text-center border border-black'>T-Shirt</td>
              <td className='text-center border border-black'>May 10, 2024</td>
              <td className='text-center border border-black text-[#F56A29]'>Click Here to Download File</td>
          </tr>
        </tbody>   
      </table>
  </div>

  )
}

export default Downloads
