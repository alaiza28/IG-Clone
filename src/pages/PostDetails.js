import React, { useState } from "react";
import { useParams } from "react-router-dom";
import listPost from "../data";

// import icons
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { BiBookmark } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import Footer from "../components/Footer";

const PostDetails = () => {
  const { id } = useParams();
  console.log(id);
  const post = listPost.find((item) => {
    return item.id === Number(id);
  });

  const { name, imgPhoto, postPhoto, likes, text, isFollow } = post;

  const [btn, setBtn] = useState(false);

  const checkInput = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const item = e.target.value;
    if (item.length !== 0) {
      console.log("Hello");
      setBtn(true);
    } else if (item.length === 0) {
      console.log("No Input");
      setBtn(false);
    }
  };

  var arr = [];
  for (let i = 1; i < 10; i++) {
    arr.push(i);
  }

  console.log(arr);

  return (
    <div className="w-full absolute left-[300px] section-points px-40 py-20 h-auto bg-black">
      <div className="flex border-all">
        <div className="w-[700px] h-[800px] ">
          <div>
            <img
              src={postPhoto}
              alt=""
              className="object-cover w-full h-[800px]"
            />
          </div>
        </div>
        <div className="flex-1 h-[800px] relative">
          <div className="flex justify-between items-center h-[60px] px-2 post-nav py-10">
            <div className="flex items-center justify-center space-x-3 px-2">
              <img
                src={imgPhoto}
                alt=""
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <p>{name}</p>
              <span>
                <MdVerified className="text-blue-300" size={20} />
              </span>
              <p>{isFollow ? "Following" : "Follow"}</p>
            </div>

            <button>
              <BiDotsVerticalRounded size={23} />
            </button>
          </div>

          <div className="flex items-center space-x-3 px-4 py-3">
            <img
              src={imgPhoto}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <p>{name}</p>
            <span>
              <MdVerified className="text-blue-300" size={20} />
            </span>
          </div>

          <p className="px-4">{text}</p>

          <div className="h-[200px] w-full absolute bottom-0 post-bot px-4">
            <div className="flex justify-between py-3 items-center">
              <div className="flex items-center text-white space-x-6">
                <AiOutlineHeart size={31} />
                <FaRegComment size={29} />
                <TbSend size={28} />
              </div>

              <div>
                <BiBookmark size={29} />
              </div>
            </div>

            <p className="font-bold">{likes} likes</p>
            <p className="py-4">14 hour ago</p>

            <div className="flex items-center justify-between py-4 post-bot px-4">
              <BsEmojiSmile className="" size={30} />
              <input
                type="text"
                className="border-none outline-none bg-transparent -ml-40"
                placeholder="Add Commment..."
                onChange={checkInput}
              />
              <button
                className={`${
                  btn ? "text-blue-500" : "text-gray-500"
                } duration-300`}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-800 px-20 mt-32"></div>
      <p className="my-10 text-gray-400">
        More posts from <span className="font-medium text-white">{name}</span>
      </p>

      <div className="w-full h-auto grid grid-cols-3 gap-2">
        {arr.map((item) => (
          <div
            key={item}
            className="h-[400px] border group relative overflow-hidden border-white/50"
          >
            <div className="group-hover:bg-white/20 w-full h-full absolute z-40 transition-all duration-300"></div>
            <div className="absolute -bottom-full left-20 group-hover:bottom-44 transition-all duration-500 z-50">
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
        ))}
      </div>

      <div>
            <Footer />
      </div>
    </div>
  );
};

export default PostDetails;
