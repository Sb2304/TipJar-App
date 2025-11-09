import PaymentPage from '@/components/PaymentPage'
import React from 'react'
import { notFound } from 'next/navigation'
import connectDb from '../db/connectDb'
import User from '../models/User'
import { fetchUser } from '../actions/useractions'

const Username = async ({params}) => {

    const checkUser = async () => {
        await connectDb()
        let u = await User.findOne({username:params.username})
        if(!u){
           notFound()
        }
    }
    await checkUser()

  return (
    <>
    <PaymentPage username={params.username}/>
    </>
  )
}

export default Username

export async function generateMetadata({params}){
    // fetch the user to get their name for the title
    const user = await fetchUser(params.username)

    return{
        title:`${user.name} - TipJar`
    }
}
