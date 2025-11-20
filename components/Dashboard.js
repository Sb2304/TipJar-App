"use client";
import React, { useState,useEffect } from 'react';
import { useSession,signIn,signOut } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { fetchUser,updateProfile } from '@/app/actions/useractions';



const Dashboard = () => {
  const {data:session, update}=useSession();
  const router = useRouter();
  const [form, setForm] = useState({})
  useEffect(() => {
    
    if(!session){
      router.push("/login")
    }
    else{
      getData()
    }
  }, [router,session])
  
  const getData = async () => {
    let u = await fetchUser(session.user.username)
    setForm(u)
  }
  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit = async (e)=>{
    let a = await updateProfile(e,session.user.username)
    await update({username: form.username})
    toast.success('Profile Updated Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div className="container mx-auto py-5 px-5 md:px-0">
        <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>
        <form className="max-w-2xl mx-auto" action={handleSubmit}>
          
          <div className="my-2">
            <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
            <input value={form.name?form.name:""} onChange={handleChange} type="text" name="name" id="name" className='w-full p-2.5 rounded-lg bg-amber-900' />
          </div>
          {/* input for email */}
          <div className="my-2">
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
            <input value={form.email?form.email:""} onChange={handleChange} type="email" name="email" id="email" className='w-full p-2.5 rounded-lg bg-amber-900' />
          </div>
          {/* input for username */}
          <div className="my-2">
            <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
            <input value={form.username?form.username:""} onChange={handleChange} type="text" name="username" id="username" className='w-full p-2.5 rounded-lg bg-amber-900' />
          </div>
          {/* input for profile picture with input type text */}
          <div className="my-2">
            <label htmlFor="profilepic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Profile Picture</label>
            <input value={form.profilepic?form.profilepic:""} onChange={handleChange} type="text" name="profilepic" id="profilepic" className='w-full p-2.5 rounded-lg bg-amber-900' />
          </div>
          {/* input for cover pic */}
          <div className="my-2">
            <label htmlFor="coverpic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Cover Picture</label>
            <input value={form.coverpic?form.coverpic:""} onChange={handleChange} type="text" name="coverpic" id="coverpic" className='w-full p-2.5 rounded-lg bg-amber-900' />
          </div>
          {/* input for razorpay id */}
          <div className="my-2">
            <label htmlFor="razorpayid" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay ID</label>
            <input value={form.razorpayid?form.razorpayid:""} onChange={handleChange} type="text" name="razorpayid" id="razorpayid" className='w-full p-2.5 rounded-lg bg-amber-900' />
          </div>
          {/* input for razorpay secret */}
          <div className="my-2">
            <label htmlFor="razorpaysecret" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay Secret</label>
            <input value={form.razorpaysecret?form.razorpaysecret:""} onChange={handleChange} type="password" name="razorpaysecret" id="razorpaysecret" className='w-full p-2.5 rounded-lg bg-amber-900' />
          </div>
          
          <div className="my-6">
            <button type="submit" className="w-full text-white bg-gradient-to-br from-amber-500 to-orange-600 hover:bg-gradient-to-bl hover:cursor-pointer focus:ring-4 focus:outline-none  focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Save</button>
          </div>
        </form>
    </div>
  );
};

export default Dashboard;
