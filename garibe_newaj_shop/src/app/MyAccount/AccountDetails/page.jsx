import React from 'react'

const page = () => {
  return (
<div className="max-w-4xl mx-auto font-[sans-serif]">
      <div className="text-center mb-16">
        <h4 className="text-gray-800 text-2xl font-semibold ">Account Details</h4>
      </div>

      <form>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">First Name</label>
            <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#F56A29] transition-all" placeholder="Enter name" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
            <input name="lname" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#F56A29] transition-all" placeholder="Enter last name" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
            <input name="email" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#F56A29] transition-all" placeholder="Enter email" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
            <input name="number" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#F56A29] transition-all" placeholder="Enter mobile number" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#F56A29] transition-all" placeholder="Enter password" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
            <input name="cpassword" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#F56A29] transition-all" placeholder="Enter confirm password" />
          </div>
        </div>

        <div className="!mt-12">
          <button type="button" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#F56A29] hover:bg-white hover:text-[#F56A29] hover:border hover:border-[#F56A29] focus:outline-none">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default page
