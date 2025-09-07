    
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImage from "../heroImage.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        
        {/* متن سمت چپ */}
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h1 className="text-4xl font-semibold text-white sm:text-6xl">
            I'm a Full Stack Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, Next.js, and GraphQL.
          </p>
          <div>
            <button
              className=" group w-fit rounded-md text-white px-6 py-3 my-2 flex items-center
              bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>

        {/* عکس سمت راست */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;