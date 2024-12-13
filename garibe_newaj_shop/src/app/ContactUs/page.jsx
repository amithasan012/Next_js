import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div className='h-[8vh] ml-12 w-[90%] bg-white flex items-center text-2xl font-bold'>
            <h1>Home /</h1><h1 className='text-[#F56A29]'> Contact Us</h1>
      </div>
      <div className="grid sm:grid-cols-2 items-start gap-16 justify-between py-4 mx-4 max-w-full px-9  font-[sans-serif]">
            <div>
                <h1 className="text-gray-800 text-3xl font-extrabold"> Contact US</h1>
                <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out wed love to hear about your project  and provide help.</p>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Email</h2>
                    <ul className="mt-4">
                        <li className="flex items-center">
                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-[#F56A29]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <a href="javascript:void(0)" className="text-[#F56A29] text-sm ml-4">
                                <small className="block">Mail</small>
                                <strong>info@example.com</strong>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Socials</h2>

                    <ul className="flex mt-4 space-x-4">
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="javascript:void(0)" className='text-[#F56A29]'>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>

                            </a>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="javascript:void(0)" className='text-[#F56A29]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            </a>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="javascript:void(0)" className='text-[#F56A29]'>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <form className="ml-auto space-y-4">
                <input type='text' placeholder='Name'
                    className="w-full rounded-md py-3 px-4 border border-black  text-gray-800 text-sm outline-[#F56A29] focus:bg-transparent" />
                <input type='email' placeholder='Email'
                    className="w-full rounded-md py-3 px-4 border border-black  text-gray-800 text-sm outline-[#F56A29] focus:bg-transparent" />
                <input type='text' placeholder='Subject'
                    className="w-full rounded-md py-3 px-4 border border-black  text-gray-800 text-sm outline-[#F56A29] focus:bg-transparent" />
                <textarea placeholder='Message' rows="6"
                    className="w-full rounded-md px-4 border border-black  text-gray-800 text-sm pt-3 outline-[#F56A29] focus:bg-transparent"></textarea>
                <button type='button'
                    className="text-white bg-[#F56A29] hover:bg-[#1F1F1F] tracking-wide rounded-md text-sm px-4 py-3 w-[30%] !mt-6">Send</button>
            </form>
        </div>
        <div className=" h-[400px] max-md:min-h-[350px]">
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                    allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default ContactUs
