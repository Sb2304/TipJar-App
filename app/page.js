"use client"
import Image from "next/image";

export default function Home() {
  const ClickHandle = () => {
    console.log("Button Clicked");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[44vh] text-white">
        <div className="font-bold text-5xl flex justify-center items-center gap-2">TipJar <span><img className="w-20 p-0" src="/money-jar.svg" alt="jar" /></span></div>
        <p>
          A simple way to tip your favourite creators, developers, and artists.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br hover:cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={ClickHandle}
          >
            Start Now
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
        eadadawd
      </div>
    </>
  );
}
