import React from 'react'
import Link from 'next/link'

const Checkout = () => {
  return (
    <div className='h-[auto]  w-full flex flex-col justify-center items-center gap-5'>
        <div className='h-[8vh] w-[90%] bg-white flex items-center text-2xl font-bold'>
            <h1>Shop /</h1><h1 className='text-[#F56A29]'> Checkout</h1>
        </div>
        <div className='h-[8vh] w-[90%] bg-[#F2F2F2] flex items-center px-3'>
            <h1>Returning Customer ?</h1>
            <Link href='' className='text-[#F56A29]'>Click Here Login</Link>
        </div>
        <div className='h-[8vh] w-[90%] mb-12 bg-[#F2F2F2] flex items-center px-3'>
            <h1>Returning Customer ?</h1>
            <Link href='' className='text-[#F56A29]'>Click Here To Enter Your Code</Link>
        </div>
        <div className='h-[auto] mb-12 w-[90%]  flex justify-between max-md:flex-col max-md:items-center max-md:gap-6'>
            <div className='h-[auto] w-[45%] flex flex-col  max-md:w-full'>
                <div className='h-[70px] w-[100%] flex justify-center items-center bg-[#F56A29]'>
                    <h1 className='text-white text-2xl font-bold'>BILLING DETAILS</h1>
                </div>
                <div className='h-[70px] w-[full] flex justify-between items-center '>
                    <div className='h-full w-[45%] flex flex-col justify-center'>
                        <h1>First Name</h1>
                        <input type="text" className='border border-black  ' />
                    </div>
                    <div className='h-full w-[45%] flex flex-col justify-center'>
                        <h1>Last Name</h1>
                        <input type="text" className='border border-black  ' />
                    </div>
                </div>
                <div className='h-[70px] w-full flex flex-col justify-center '>
                    <h1>Company Name</h1>
                    <input type="text" className='border border-black ' />
                </div>
                <div className='h-[70px] w-full flex flex-col justify-center '>
                    <h1>Street Address</h1>
                    <input type="text" className='border border-black  ' />
                </div>
                <div className='h-[70px] w-full flex flex-col justify-center '>
                    <h1>Town / City</h1>
                    <input type="text" className='border border-black ' />
                </div>
                <div className='h-[70px] w-[full] flex justify-between items-center '>
                    <div className='h-full w-[45%] flex flex-col justify-center'>
                        <h1>Mobie No</h1>
                        <input type="text" className='border border-black  ' />
                    </div>
                    <div className='h-full w-[45%] flex flex-col justify-center'>
                        <h1>Email Address</h1>
                        <input type="text" className='border border-black  ' />
                    </div>
                </div>
                <div className='h-auto w-full flex mt-2'>
                    <input type="checkbox" /><h1>Create an account ?</h1>
                </div>
                <div className='h-auto w-full flex mb-2'>
                    <input type="checkbox" /><h1>Ship to a different address ?</h1>
                </div>
                <div className='h-auto w-full flex flex-col '>
                    <h1>Order Notes</h1>
                    <textarea name="" id="" className='border border-black  h-[100px] p-2' placeholder='Notes about your order'></textarea>
                </div>
            </div>
            <div className='h-[auto] w-[45%]  flex flex-col max-md:w-full'>
                <div className='h-[70px] w-[100%] flex justify-center items-center bg-[#F56A29]'>
                    <h1 className='text-white text-2xl font-bold'>YOUR ORDER</h1>
                </div>
                <div className='h-auto w-full'>
                    <table className=' h-auto w-full'>
                        <tbody>
                        <tr className='bg-slate-200'>
                            <th className='border border-r-black border-b-black '>Product</th>
                            <th className='border border-r-black border-b-black '>Quantity</th> 
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td className='text-center border border-black'>Punjabi</td>
                            <td className='text-center border border-black'>2</td>
                            <td className='text-center border border-black'>20$</td>
                        </tr>
                        <tr>
                            <td className='text-center border border-black'>Punjabi</td>
                            <td className='text-center border border-black'>2</td>
                            <td className='text-center border border-black'>20$</td>
                        </tr>
                        <tr>
                            <td className='text-center border border-black '>Punjabi</td>
                            <td className='text-center border border-black '>2</td>
                            <td className='text-center border border-black '>20$</td>
                        </tr>
                        <tr>
                            <td className='text-center border border-black '>Punjabi</td>
                            <td className='text-center border border-black '>2</td>
                            <td className='text-center border border-black '>20$</td>
                        </tr>
                        <tr>
                            <td className='text-center border border-black '>Punjabi</td>
                            <td className='text-center border border-black '>2</td>
                            <td className='text-center border border-black '>20$</td>
                        </tr>
                        <tr>
                            <td className='text-center border border-black '>Punjabi</td>
                            <td className='text-center border border-black '>2</td>
                            <td className='text-center border border-black '>20$</td>
                        </tr>
                        <tr>
                            <td className='text-center border border-black '>Punjabi</td>
                            <td className='text-center border border-black '>2</td>
                            <td className='text-center border border-black '>20$</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='h-auto w-full mt-3 flex gap-3'>
                    <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="card1" />
                    <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="card2" />
                    <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="card3" />
                </div>
                <div className='h-auto w-full flex items-center mt-3'>
                    <button className='bg-[#F56A29] p-2 text-white cursor-pointer'>Continue to Payment</button>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Checkout
