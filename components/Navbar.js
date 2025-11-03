"use client"
import {React,useState,useEffect} from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  return (
    <nav className='bg-stone-800 text-white p-4 flex justify-between items-center'>
      <div >
        <Link href={"/"} className="logo font-bold text-4xl flex justify-center items-center"
        >
          TipJar <span><img className='size-12' src="/money-jar-2.svg" alt="" /></span>
        </Link>
      </div>
      {/* <ul className='flex justify-between gap-3'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div className='flex justify-center items-center gap-3' >
        {session && <div className='relative'>

          <button onClick={()=>setShowdropdown(!showdropdown)} onBlur={()=>{setTimeout(() => {
            setShowdropdown(false);
          }, 100);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          <div id="dropdown" className={`z-11 ${showdropdown?"":"hidden"} absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-55  dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={"/"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              
            </ul>
          </div>
        </div>}
        {session ? <div className='flex items-center justify-center'>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:cursor-pointer focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={()=>signOut()}>Log Out</button>
          </div> :
          <Link href={"/login"} className='flex items-center justify-center'>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:cursor-pointer focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Log In</button>
          </Link>}
      </div>
    </nav>
  )
}

export default Navbar
