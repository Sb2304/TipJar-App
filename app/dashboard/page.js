"use client"
import {React,useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useSession,signIn,signOut } from 'next-auth/react'
import Dashboard from '@/components/Dashboard'

const DashboardPage = () => {
    const {data:session, status}=useSession();
    const router = useRouter();
    useEffect(()=>{
        if(status === "unauthenticated"){
            router.push("/login");
        }
    },[status,router]);

    if(status === "loading"){
        return <div className='flex justify-center items-center h-screen'>Loading...</div>
    }
    
  return (
    <div>
      {session && <Dashboard/>}
    </div>
  )
}

export default DashboardPage

