import React, { useState } from "react";
import photo from "../assets/IMG_3152.jpg";
import { listOfFriends } from "../data";
import Footer from "./Footer";

const Suggested = () => {
  return (
    <div className="pr-10 py-20">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img
            src={photo}
            className="mr-2 w-[50px] h-[50px] rounded-full object-cover"
            alt=""
          />
          <div>
            <p className="font-medium text-[17px]">programmer.me</p>
            <p className="font-normal text-gray-500">Alaiza Gondraneos</p>
          </div>
        </div>

        <button className="text-blue-500">Switch</button>
      </div>

      <div className="flex justify-between my-10 items-center">
        <h3 className="text-gray-400 text-[1.1rem] font-medium">
          Suggested for You
        </h3>
        <h3>See All</h3>
      </div>

      <div className="space-y-2">
        {listOfFriends.map((item) => {
          const { id, img, name } = item;
    
        
          return (
            <div className="flex justify-between items-center px-2 py-3" key={id}>
              <div className="flex justify-center items-center">
                <img
                  src={img}
                  className="mr-4 w-[50px] h-[50px] rounded-full object-cover"
                  alt=""
                />
                <div>
                  <p className="font-medium text-[17px]">{name}</p>
                  <p className="font-normal text-gray-500">Instagram Recommended</p>
                </div>
              </div>

              <button className="text-blue-500">Follow</button>
            </div>
          );
        })}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Suggested;
