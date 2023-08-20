import React, { useState } from "react";
//import icons
import { LuEdit } from "react-icons/lu";

//import img
import { Link } from "react-router-dom";
import { messageData } from "../data";
import { IoCallOutline, IoVideocamOutline, IoMdCall } from "react-icons/io";
import { AiOutlineInfoCircle, AiOutlineHeart } from "react-icons/ai";
import { BsEmojiSmile, BsMic } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import {FiVideo} from "react-icons/fi"
const Messages = ({ openMessage }) => {
  const [msg, setMsg] = useState(messageData);
  const [value, setValue] = useState(0);
  const [chats, setChats] = useState(messageData);

  //  const newFunc = (id) => {
  //     const arr = msg.find((item)=>{
  //       return id === item.id
  //     })
  //  }
  const [open, setOpen] = useState(false);
  const { name, img, chat, username } = chats[value];
  return (
    <div className="w-full absolute left-[300px] section-points">
      <div className="relative w-full h-full bg-red-300">
        <div
          className={`fixed left-[300px] top-0 w-[500px] z-40 h-screen bg-black ${
            openMessage ? "translate-x-0" : " translate-x-[-800px]"
          } duration-500 border-all px-3 pt-4`}
        >
          <div className="flex justify-between items-center font-font-primary pt-14">
            <p className="text-2xl font-medium">programmer.me</p>
            <LuEdit size={30} />
          </div>

          <div className="flex justify-between items-center my-4 font-font-primary">
            <h3 className="text-[1.3rem]">Messages</h3>
            <h3 className="text-gray-400 text-[1.3rem]">Requests</h3>
          </div>

          <div>
            {msg.map((data, index) => {
              const { id, name, img, chat, username } = data;
              return (
                <div
                  key={id}
                  className="flex items-center p-3 cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    // newFunc(id)
                    setValue(index);
                  }}
                >
                  <div className="mr-4">
                    <img
                      src={img}
                      className="w-[80px] h-[80px] rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-[20px]">{name}</h3>
                    <p className="text-gray-500">{chat.substring(0, 45)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`fixed left-[800px] top-0 w-[1000px] z-30 h-screen bg-black ${
          open ? "translate-x-0" : " translate-x-[1250px]"
        } duration-500 border-all px-3`}
      >
        <div className="relative h-full">
        <div className="py-4 flex justify-between items-center post-nav">
        <div className="flex items-center">
          <img src={img} alt="" className="w-[60px] h-[60px] mr-2 rounded-full object-cover"/>
          <p className="text-[18px] font-medium mr-3">{name}</p>
          <span><MdVerified size={23} className="text-blue-500"/></span>
        </div>

        <div className="flex items-center space-x-5">
          <IoMdCall size={35}/>
          <FiVideo size={35}/>
          <AiOutlineInfoCircle size={35}/>
        </div>
      </div>

      <div className=" w-full mt-10">
      <div className="flex justify-center w-full">
      <img
        src={img}
        alt=""
        className="w-[200px] h-[200px] rounded-full object-cover"
      />
    </div>
    <div>
      <p className="text-[20px] text-center mt-4">{username}</p>
    </div>

    <p className="text-center text-[20px]">{name} <span className="text-gray-500 text-[20px]">Instagram</span></p>

    <div className="grid place-items-center mt-3">
    <button className="outline-none border-none rounded-md px-6 py-3 bg-white text-[17px] font-medium text-black">View Profile</button>

    </div>
    
    </div>
      
      <div className="px-6 absolute bottom-0 py-5 w-full">
        <div className="border-all rounded-full bg-transparent p-4 flex justify-between items-center">
            <div className="flex items-center">
              <BsEmojiSmile size={25}/>
              <input type="text" placeholder="Message" className="text-[19px] px-3 py-2 w-full border-none outline-none bg-transparent"/>
            </div>

            <div className="flex space-x-6">
              <BsMic size={25}/>
              <CiImageOn size={25}/>
              <AiOutlineHeart size={25}/>
            </div>
        </div>
      </div>
        </div>


      </div>
    </div>
  );
};

export default Messages;
