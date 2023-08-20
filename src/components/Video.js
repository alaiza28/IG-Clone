import React, { useState } from "react";
//import icons
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { BiBookmark } from "react-icons/bi";

import { BiDotsVerticalRounded } from "react-icons/bi";


const Video = ({ video }) => {
  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  const { id, vid, name, imgPhoto, isFollow, text } = video;
  return (
    <div
      className="w-[500px] h-[800px] relative border font-font-primary"
      key={id}
    >
      <video
        src={vid}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      />

      <div className="absolute bottom-0 h-[150px] px-6">
        <div className=" flex items-center space-x-3">
          <img
            src={imgPhoto}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <p className="text-[18px]">{name}</p>
          <p className="text-[20px] font-medium">
            {isFollow ? "· Following" : "· Follow"}
          </p>
        </div>

        <div className="flex">
        <p className="py-2">
        <span className="font-medium text-[17px]">{name} </span>{" "}
        {seeMore ? text : `${text.substring(0, 35)}...`} 
        <button
          className="text-blue-300"
          onClick={handleSeeMore}
        >
          {seeMore ? "See Less" : "See More"}
        </button>
      </p>
        </div>
      </div>

      <div className="absolute -right-24 h-[300px] w-[80px] bottom-0">
        <div className="flex flex-col justify-center w-[60px] mx-auto">
            <div className="text-center flex justify-center items-center flex-col mb-4">
                <AiOutlineHeart size={30}/>
                <p className="font-medium text-[17px]">4.4M</p>
            </div>

            <div className="text-center flex justify-center items-center flex-col mb-4">
                <FaRegComment size={28}/>
                <p className="font-medium text-[17px]">23.1K</p>
            </div>

            <div className="text-center flex justify-center items-center flex-col mb-4 space-y-8">
                <TbSend size={30} />
                <BiBookmark size={30} />
                <BiDotsVerticalRounded size={30} />
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Video;
