import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import error from '@/app/assets/404.png'
const NotFound = () => {
  return (
 
        <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">
                <Image alt='no image' src={error}></Image>

                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Oops ! That Page Can't Be Found.
                </p>

                <p className="mt-4 text-gray-500">Sorry , this page not found take a moment and search  do velue</p>

                <Link
                href="/"
                className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                Go Back Home
                </Link>
            </div>
        </div>

  )
}

export default NotFound


