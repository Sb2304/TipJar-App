"use client"
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession()
  const [username, setUsername] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    if (username.length > 0) {
      router.push(`/${username}`);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[44vh] text-white gap-5 md:px-0 px-5 text-center">
        <div className="font-bold text-5xl flex justify-center items-center text-center">
          Welcome to TipJar
          {session ? `, ${session.user.name}!` : "!"}
          <span className="inline-block align-middle ml-2">
            <img className="size-14 hidden md:inline" src="/money-jar-2.svg" alt="jar" />
          </span>
        </div>
        <p>
          A simple way to tip your favourite creators, developers, and artists.
        </p>
        <div className="flex justify-center items-center gap-3">
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-amber-500 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Start Now!
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-amber-500 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Read More
            </button>
          </Link>
        </div>
        <form onSubmit={handleSearch} className="flex items-center w-full max-w-md mt-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <span className="text-gray-400">tipjar.com/</span>
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-amber-950 border border-amber-800 text-white text-sm rounded-l-lg focus:ring-orange-500 focus:border-orange-500 block w-full ps-[90px] p-2.5" placeholder="Enter username" />
          </div>
          <button type="submit" className="p-2.5 text-sm font-medium h-full text-white bg-amber-700 rounded-e-lg border border-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300">Search</button>
        </form>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-20  md:px-0 px-5 text-center">
        <h2 className="text-2xl font-bold text-center mb-10">
          Your supporters can appreciate you!
        </h2>
        <div className="flex md:flex-row flex-col gap-5 justify-around">
          <div className="item flex flex-col items-center justify-center space-y-3">
            <img
              src="designer.svg" className="size-40 p-1 bg-amber-800/50 rounded-full" alt=""
            />
            <p className="font-bold">Fund yourself</p>
            <p className="text-center">Turn community support into your next creative project.</p>
          </div>
          <div className="item flex flex-col items-center justify-center space-y-3">
            <img
              src="passion.svg" className="size-40 p-1 bg-amber-800/50 rounded-full" alt=""
            />
            <p className="font-bold">Fuel Your Passion</p>
            <p className="text-center">Turn community support into your next creative project.</p>
          </div>
          <div className="item flex flex-col items-center justify-center space-y-3">
            <img
              src="community.svg" className="size-40 p-1 bg-amber-800/50 rounded-full" alt=""
            />
            <p className="font-bold">Connect with Supporters</p>
            <p className="text-center">Provide a path for your audience to show direct appreciation.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-20 flex flex-col items-center justify-center  md:px-0 px-5">
        <h2 className="text-2xl font-bold text-center mb-10">
          Learn more about us
        </h2>
        <div className="w-full max-w-xl aspect-[16/10]">
          <iframe src="https://www.youtube-nocookie.com/embed/ym1zJGAW3WE?si=cFZj33EMbRxLyijf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full rounded-md drop-shadow-amber-500 drop-shadow-sm focus:bg-transparent"></iframe>
        </div>
      </div>
    </>
  );
}
