import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-stone-800 text-white p-4 flex justify-between items-center'>
      <Link href={"/"}><div className="logo font-bold text-4xl flex justify-center items-center">TipJar <span><img className='size-12' src="/money-jar-2.svg" alt="" /></span></div></Link>
      {/* <ul className='flex justify-between gap-3'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div>
        <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none   focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
