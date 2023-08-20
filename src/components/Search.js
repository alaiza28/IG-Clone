import React, { useState } from "react";
import { searchFriend } from "../data";

//import icons
import { AiFillCloseCircle } from "react-icons/ai";

const Search = ({ openSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      className={`fixed left-[300px] top-0 w-[500px] z-40 h-screen bg-black ${
        openSearch ? "translate-x-0" : "translate-x-[-800px]"
      } duration-500 border-all px-3 pt-4`}
    >
      <h2 className="text-white text-[1.8rem] pb-10">Search</h2>

      <div className="flex justify-between items-center bg-[#27272a] p-3 rounded-md">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-none outline-none px-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span>
          <AiFillCloseCircle
            size={25}
            className="text-gray-400"
            onClick={(e) => setSearchTerm("")}
          />
        </span>
      </div>

      <hr className="w-full h-[1px] bg-[#27272a] my-10" />

      <h3 className=" text-[1.5rem] font-medium">Recent</h3>

      <div>
        {
            searchFriend.filter((val)=>{
                if (searchTerm === ''){
                    return <div>No Search Found</div>
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val, key)=>{
                const {id, name, img, username} = val
                return <div className="flex justify-between items-center px-2 py-3" key={id}>
                <div className="flex justify-center items-center">
                  <img
                    src={img}
                    className="mr-4 w-[50px] h-[50px] rounded-full object-cover"
                    alt=""
                  />
                  <div>
                    <p className="font-medium text-[17px]">{username}</p>
                    <p className="font-normal text-gray-500">{name}</p>
                  </div>
                </div>
  
               
              </div>
            })
        } 
        
      </div>
    </div>
  );
};

export default Search;
