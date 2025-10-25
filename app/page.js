import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[44vh] text-white gap-5">
        <div className="font-bold text-5xl flex justify-center items-center gap-2">
          TipJar
          <span>
            <img className="size-20 p-0" src="/money-jar-2.svg" alt="jar" />
          </span>
        </div>
        <p>
          A simple way to tip your favourite creators, developers, and artists.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Now!
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-20">
        <h2 className="text-2xl font-bold text-center mb-10">
          Your supporters can appreciate you!
        </h2>
        <div className="flex gap-5 justify-around">
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

      <div className="text-white container mx-auto py-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-10">
          Learn more about us
        </h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ym1zJGAW3WE?si=cFZj33EMbRxLyijf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-md drop-shadow-amber-500 drop-shadow-sm focus:bg-transparent"></iframe>
      </div>
    </>
  );
}
