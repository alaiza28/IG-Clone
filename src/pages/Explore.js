import React from "react";
//import icons
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import Footer from "../components/Footer";

const Explore = () => {
  const arr = [];
  for (let i = 1; i < 40; i++) {
    arr.push(i);
  }

  return (
    <div className="w-full absolute left-[300px] section-points px-20 py-40 bg-black">
      <div className="w-full h-auto grid grid-cols-3 gap-2">
        {
          arr.map((item)=> (
            <div
            key={item}
            className="h-[400px] border group relative overflow-hidden border-white/50"
          >
            <div className="group-hover:bg-white/20 w-full h-full absolute z-40 transition-all duration-300"></div>
            <div className="absolute -bottom-full left-28 group-hover:bottom-44 transition-all duration-500 z-50">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-medium flex items-center">
                  <AiOutlineHeart className="mr-2"/>
                  <p className="mr-2">4.4M</p>
                </span>
                <span className="flex text-2xl font-medium items-center">
                  <FaRegComment className="mr-2"/>
                  <p className="mr-2">34.5K</p>
                </span>
              </div>
            </div>
          </div>
          ))
        }
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
