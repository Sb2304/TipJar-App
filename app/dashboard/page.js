"use client"
import {React,useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useSession,signIn,signOut } from 'next-auth/react'
import Dashboard from '@/components/Dashboard'

const DashboardPage = () => {
    const {data:session}=useSession();
    const router = useRouter();
    useEffect(()=>{
        if(!session){
            router.push("/login");
        }
    },[session,router]);
    
  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default DashboardPage
