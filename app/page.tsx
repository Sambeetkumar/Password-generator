import Image from "next/image";
import { Inter } from "next/font/google";
import { BsClipboardPlus } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3N3b3JkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Be a pro !💥
          </h1>
          <p className="text-3xl my-4">
            Fortify Your Online Security with Our Password Generator
          </p>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
      >
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3N3b3JkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="my-6 font-sans font-bold text-3xl md:text-4xl">
            Password Generator 💻
          </h1>
          <div className="rounded-lg relative flex items-center justify-center bg-gray-800 py-6 px-4 text-white w-[80%] sm:w-[65%] mx-auto h-10 my-auto">
            <h3 className="p-2 text-xl font-mono tracking-wide">Password</h3>
            <button className="tooltip tooltip-bottom text-2xl rounded-lg absolute bg-gray-950 text-white border-none p-2 cursor-pointer top-[10%] right-[3px]" data-tip="copy">
                <BsClipboardPlus />
            </button>
          </div>
          <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="flex flex-col items-start justify-around px-6 py-6 gap-6">
              <div className="w-full">
                <p className="pb-4 text-start ml-3 text-lg font-semibold">
                  Password length
                </p>
                <input
                  type="range"
                  min="0"
                  max="8"
                  className="range range-primary"
                  step="1"
                />
                <div className="w-full flex justify-between text-xs px-2">
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                </div>
              </div>
              <label className="relative inline-flex items-center mr-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                <span className="ml-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Include Uppercase Letters
                </span>
              </label>
              <label className="relative inline-flex items-center mr-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                <span className="ml-3 text-sm font-semibold text-gray-900 dark:text-gray-300">
                  Include Lowercase Letters
                </span>
              </label>
              <label className="relative inline-flex items-center mr-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                <span className="ml-3 text-sm font-semibold text-gray-900 dark:text-gray-300">
                  Include Numbers
                </span>
              </label>
              <label className="relative inline-flex items-center mr-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                <span className="ml-3 text-sm font-semibold text-gray-900 dark:text-gray-300">
                  Include Symbols
                </span>
              </label>
            </div>
            <div className="px-4 pb-2 pt-4">
              <button className="tracking-wider block w-[80%] mx-auto p-2 text-lg font-semibold rounded-full bg-purple-600 hover:bg-purple-800 focus:outline-none duration-150">
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
