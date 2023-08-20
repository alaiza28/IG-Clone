import React, { useState } from "react";
import { Link } from "react-router-dom";

//import icons
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { BiBookmark } from "react-icons/bi";

import { BiDotsVerticalRounded } from "react-icons/bi";



const Posts = ({posts}) => {
    const [listsPosts, setListsPosts] = useState(posts)
  const [seeAll, setSeeAll] = useState(false);
  return (
    <section className="grid grid-cols-1 place-items-center mt-16 font-font-primary space-y-8">
      {listsPosts.map((post) => {
        const {id, name, imgPhoto, postPhoto, likes, text } = post;
        return (
          <div className=" w-[700px]"  key={id}>
            <div className="flex justify-between items-center h-[60px] px-2">
              <div className="flex items-center">
                <img
                  src={imgPhoto}
                  alt=""
                  className="w-[50px] h-[50px] mr-2 rounded-full object-cover"
                />
                <p>{name}</p>
              </div>

              <button>
                <BiDotsVerticalRounded size={23} />
              </button>
            </div>

            <Link to={`/post/${id}`} className="flex items-center mt-4">
              <img
                src={postPhoto}
                alt=""
                className="h-[600px] w-full object-cover"
              />
            </Link>

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

            <div>
                <p className="text-[18px]">{likes} likes</p>
              </div>

            <div className="flex">
              <p>
                <span className="font-medium text-[17px]">{name} </span>{" "}
                {seeAll ? text : `${text.substring(0, 200)}...`} 
                <button
                  className="text-blue-300"
                  onClick={() => setSeeAll(!seeAll)}
                >
                  {seeAll ? "Show Less" : "See All"}
                </button>
              </p>
            </div>

            <p className="text-gray-500 my-2">View All Comments</p>
          </div>
        );
      })}
    </section>
  );
};

export default Posts;
