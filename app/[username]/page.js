import React from 'react'

const Username = ({params}) => {
  return (
    <>
    <div className="cover w-full relative mx-auto">
        <div className="banner">
            <img className='object-cover w-full h-fit' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=az0I0MlhlHLSBMLf_JXny_P7577ORkn_OlfFvxJ3Sh4%3D&token-time=1762214400" alt="creator banner" />
        </div>

        <div className="profile flex flex-col justify-center items-center relative gap-5 -translate-y-1/4">
            <img width={125} height={100} className='rounded-lg border border-gray-300/25' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets.labroots.com%2F_public%2F_files%2Fsystem%2Fcontent-articles%2Fimages%2Fprofile%2F1685_4096x4096.jpg&f=1&nofb=1&ipt=b243cb45e53b53e9b0eb2afff76e4a26d6ce73dc20d67299f19a1b41f24b14fa" alt="creator avatar" />
            <div></div>
            <div className='info flex flex-col justify-center items-center'>
                <div className="font-bold text-3xl">
                    @{params.username}
                </div>
                <div className='text-slate-300'>
                    Creating Animated art for VTT's
                </div>
                <div className='text-slate-300'>
                    21,130 members &bull; 104 posts &bull; $18,320/release
                </div>
            </div>
        </div>
            <div className="payment flex gap-3 w-4/5 mx-auto" >
                <div className="supporters w-1/2 bg-amber-900 rounded-lg p-10">
                    <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                    {/* Show list of all supporters as a leaderboard */}
                    <ul className='flex flex-col gap-4 mx-5'>
                        <li className='flex items-center gap-3'>
                            <img width={30} height={30} className='bg-amber-600 rounded-full p-1' src="user.svg" alt="user avatar" />
                            <span>
                                Shubham donated <span className='font-bold'>$30</span> with a message "I appreciate what you do. Lots of ❤️.Keep it up!"
                            </span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <img width={30} height={30} className='bg-amber-600 rounded-full p-1' src="user.svg" alt="user avatar" />
                            <span>
                                Shubham donated <span className='font-bold'>$30</span> with a message "I appreciate what you do. Lots of ❤️.Keep it up!"
                            </span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <img width={30} height={30} className='bg-amber-600 rounded-full p-1' src="user.svg" alt="user avatar" />
                            <span>
                                Shubham donated <span className='font-bold'>$30</span> with a message "I appreciate what you do. Lots of ❤️.Keep it up!"
                            </span>
                        </li>
                        
                       
                    </ul>
                </div>
                <div className="makePayment w-1/2 bg-amber-900 rounded-lg p-10">
                    <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                    <div className="flex gap-2 flex-col">
                        <input type="text" className='w-full p-3 rounded-lg bg-amber-950' placeholder='Enter Name' />
                        <input type="text" className='w-full p-3 rounded-lg bg-amber-950' placeholder='Enter Message' />
                        <input type="text" className='w-full p-3 rounded-lg bg-amber-950' placeholder='Enter Amount' />
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:cursor-pointer focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Pay</button>
                    </div>
                    {/* Or choose from these amounts */}
                    <div className="flex gap-2 mt-5 font-bold">
                        <button className='bg-amber-700 p-3 rounded-lg px-5'>$5</button>
                        <button className='bg-amber-700 p-3 rounded-lg px-5'>$10</button>
                        <button className='bg-amber-700 p-3 rounded-lg px-5'>$50</button>
                    </div>
                </div>
            </div>

    </div>
    </>
  )
}

export default Username
