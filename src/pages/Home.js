import React, { useState } from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import listPost from "../data";
import Suggested from "../components/Suggested";
import Search from "../components/Search";
import Notifications from "../components/Notifications";

//icons
import { IoIosImages } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Home = ({ openSearch, handleSearch, openNotif, openModal, handleModal }) => {
  const [posts, setPosts] = useState(listPost);
  return (
    <div className="absolute left-[300px] bg-black section-points h-auto overflow-hidden">
      <div className="relative">
        <div className="flex">
          <div className=" w-[900px] ">
            <div className="w-[90%] m-auto h-[140px] pt-10">
              <Stories />
            </div>

            <div className="px-20">
              <Posts posts={posts} />
            </div>
          </div>
          <div className="flex-1 ">
            <Suggested />
          </div>
        </div>

        <Search openSearch={openSearch} handleSearch={handleSearch} />
        <Notifications openNotif={openNotif} />

        <div className={`overlay z-50 fixed top-0 left-0 w-full h-full duration-300 ${openModal ? 'visible' : 'hidden'}`}>
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="bg-[#27272a] rounded-md w-[600px] h-[700px]">
              <div className="post-nav py-3">
                <h2 className="font-meduim text-center text-[21px]">
                  Create New Post
                </h2>
              </div>

              <div className="flex justify-center items-center h-full">
                <div className="-mt-40">
                  <span className="flex justify-center items-center">
                    <IoIosImages className="text-[10rem]" />
                  </span>
                  <h3 className="text-2xl py-4">Drag photos & video here</h3>
                  <div className="flex justify-center">
                    <button className="border-none outline-none bg-blue-600 rounded-lg text-white px-6 py-4 text-[18px] font-medium">
                      Select from Computer
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-6 right-6 cursor-pointer" onClick={handleModal}>
              <RxCross1 size={30}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
