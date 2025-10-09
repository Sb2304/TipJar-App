import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-stone-800 text-white p-4 flex justify-between items-center'>
      <div className="logo font-bold text-4xl">TipJar</div>
      <ul className='flex justify-between gap-3'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
