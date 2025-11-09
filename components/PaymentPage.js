"use client"
import React,{useEffect,useState} from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { initiate,fetchPayment, fetchUser } from '@/app/actions/useractions'



const PaymentPage = ({ username }) => {
    const {data:session}=useSession()
    const [paymentform, setPaymentform] = useState({ })
    const [currentuser, setCurrentuser] = useState({ })
    const [payments, setPayments] = useState([])
    const [topPayments, setTopPayments] = useState([])
    const [recentPayments, setRecentPayments] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const handleChange =(e)=>{
        setPaymentform({...paymentform,[e.target.name]:e.target.value})
        
    }
    const getData = async (params) => {
        let u = await fetchUser(username)
        setCurrentuser(u)
        let dbpayments = await fetchPayment(username)
        setPayments(dbpayments) 
        setTopPayments(dbpayments) // Already sorted by amount from the server
        // Sort by date for recent supporters
        let recent = [...dbpayments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setRecentPayments(recent);
        
    
    }
    const pay = async (amount) => {
        //get order id
        let serverAmount = amount * 100;
        let a = await initiate(serverAmount, username, paymentform)
        let orderId=a.id
        var options = {
            "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "TipJar", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className="cover w-full relative mx-auto">
                <div className="banner h-1/5">
                    <img className='object-cover w-full h-fit max-h-[400]' src={currentuser.coverpic?currentuser.coverpic:  "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=C4WLw6ofDWu9MPjao0uNR8XjWLxPIWgYPRXnILMAdGE%3D&token-time=1764806400"} alt='creator cover' />
                </div>

                <div className="profile flex flex-col justify-center items-center relative gap-5 -translate-y-1/4">
                    <img className='rounded-lg border border-gray-300/25 size-32' src={currentuser.profilepic?currentuser.profilepic:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets.labroots.com%2F_public%2F_files%2Fsystem%2Fcontent-articles%2Fimages%2Fprofile%2F1685_4096x4096.jpg&f=1&nofb=1&ipt=b243cb45e53b53e9b0eb2afff76e4a26d6ce73dc20d67299f19a1b41f24b14fa"} alt="creator avatar" />
                    <div></div>
                    <div className='info flex flex-col justify-center items-center'>
                        <div className="font-bold text-3xl">
                            {currentuser.name}
                        </div>
                        <div className='text-slate-300'>
                            @{username}
                        </div>
                        <div className='text-slate-300'>
                            A total of ₹<span>{payments.reduce((a,b)=>a+b.amount,0)}</span> has been raised from <span>{payments.length}</span> amazing supporters!
                        </div>
                    </div>
                </div>
                <div className="payment flex gap-3 w-4/5 mx-auto" >
                    <div className="supporters w-3/4 flex gap-3">
                        <div className="top-supporters w-1/2 bg-amber-800 rounded-lg py-10 px-5">
                            <h2 className='text-2xl font-bold my-5'>Top Supporters</h2>
                            <ul className='flex flex-col gap-4 max-h-60 overflow-y-auto'>
                                {topPayments.length === 0 && <li>No top supporters yet</li>}
                                {topPayments.map((p, i) => {
                                    return (
                                        <li key={i} className='flex items-center gap-3'>
                                            <img width={30} height={30} className='bg-amber-600 rounded-full p-1' src="/user.svg" alt="user avatar" />
                                            <span>
                                                {p.name ? p.name : "Anonymous"} donated <span className='font-bold'>₹ {p.amount}</span> {p.message ? `with a message "${p.message}"` : ""}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="recent-supporters w-1/2 bg-amber-800 rounded-lg py-10 px-5">
                            <h2 className='text-2xl font-bold my-5'>Recent Supporters</h2>
                            <ul className='flex flex-col gap-4 max-h-60 overflow-y-auto'>
                                {recentPayments.length === 0 && <li>No recent supporters yet</li>}
                                {recentPayments.map((p, i) => {
                                    return (
                                        <li key={i} className='flex items-center gap-3'>
                                            <img width={30} height={30} className='bg-amber-600 rounded-full p-1' src="/user.svg" alt="user avatar" />
                                            <span>
                                                {p.name ? p.name : "Anonymous"} donated <span className='font-bold'>₹ {p.amount}</span> {p.message ? `with a message "${p.message}"` : ""}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="makePayment w-1/2 bg-amber-900 rounded-lg p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            <input onChange={handleChange} name='name' value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-amber-950' placeholder='Enter Name' />
                            <input onChange={handleChange} name='message' value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-amber-950' placeholder='Enter Message' />
                            <input onChange={handleChange} name='amount' value={paymentform.amount || ''} type="text" inputMode='numeric' className='w-full p-3 rounded-lg bg-amber-950' placeholder='Enter Amount' />
                            <button onClick={()=>{pay(paymentform.amount)}} type="button" className= "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:cursor-pointer focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:from-gray-500 disabled:to-gray-400 disabled:cursor-not-allowed disabled:text-black"  disabled={!paymentform.amount}>Pay</button>
                        </div>
                        {/* Or choose from these amounts */}
                        <div className="flex gap-2 mt-5 font-bold">
                            <button className='bg-amber-700 p-3 rounded-lg px-5' onClick={()=>{pay(5)}}>₹5</button>
                            <button className='bg-amber-700 p-3 rounded-lg px-5' onClick={()=>{pay(10)}}>₹10</button>
                            <button className='bg-amber-700 p-3 rounded-lg px-5' onClick={()=>{pay(50)}}>₹50</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentPage
