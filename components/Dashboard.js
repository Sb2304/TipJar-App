"use client";
import React, { useState,useEffect } from 'react';
import { useSession,signIn,signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';


// The main Dashboard component
const Dashboard = () => {
  const {data:session}=useSession();
  const router = useRouter();
  const [form, setForm] = useState({})
  useEffect(() => {
    if(!session){
      router.push("/login")
    }
  }, [router,session])
  
  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    // Main container with dark background
    <div className="container mx-auto py-5">
        <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>
        <form className="max-w-2xl mx-auto">
          
          <div className="my-2">
            <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
            <input value={form.name?form.name:""} onChange={handleChange} type="text" name="name" id="name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          </div>
          {/* input for email */}
          <div className="my-2">
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
            <input value={form.email?form.email:""} onChange={handleChange} type="email" name="email" id="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          </div>
          {/* input for username */}
          <div className="my-2">
            <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
            <input value={form.username?form.username:""} onChange={handleChange} type="text" name="username" id="username" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          </div>
          {/* input for profile picture with input type text */}
          <div className="my-2">
            <label htmlFor="profile" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Profile Picture</label>
            <input value={form.profile?form.profile:""} onChange={handleChange} type="text" name="profile" id="profile" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          </div>
          {/* input for cover pic */}
          <div className="my-2">
            <label htmlFor="cover" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Cover Picture</label>
            <input value={form.cover?form.cover:""} onChange={handleChange} type="text" name="cover" id="cover" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          </div>
          {/* input for razorpay id */}
          <div className="my-2">
            <label htmlFor="razorpayid" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay ID</label>
            <input value={form.razorpayid?form.razorpayid:""} onChange={handleChange} type="text" name="razorpayid" id="razorpayid" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          </div>
          {/* input for razorpay secret */}
          <div className="my-2">
            <label htmlFor="razorpaysecret" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay Secret</label>
            <input value={form.razorpaysecret?form.razorpaysecret:""} onChange={handleChange} type="text" name="razorpaysecret" id="razorpaysecret" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          </div>
          
          <div className="my-6">
            <button type="button" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:cursor-pointer focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Save</button>
          </div>
        </form>
    </div>
  );
};

export default Dashboard;


