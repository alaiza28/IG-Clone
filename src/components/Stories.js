import React from 'react';
import Carousel from "react-elastic-carousel";

import img from "../assets/IMG_3152.jpg";
import friend1 from "../assets/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg";
import friend2 from "../assets/joseph-pearson-827XUhVSp8M-unsplash.jpg";
import friend3 from "../assets/kelly-sikkema-JN0SUcTOig0-unsplash.jpg";
import friend4 from "../assets/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg";
import friend5 from "../assets/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";

import search1 from "../assets/search/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import search2 from "../assets/search/ian-dooley-d1UPkiFd04A-unsplash.jpg";
import search3 from "../assets/search/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import search4 from "../assets/search/susan-g-komen-3-day-6RlHij-pwpw-unsplash.jpg";
import search5 from "../assets/search/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg";

const listStories = [
    {
        id: 1,
        name: "Auny",
        img: search1,
      },
      {
        id: 2,
        name: "Ian",
        img: search2,
      },
      {
        id: 3,
        name: 'Michael',
        img: search3
      },
      {
        id: 4,
        name: 'Susan',
        img: search4
      },
      {
        id: 5,
        name: 'Toa',
        img: search5
      },
    {
        id: 6,
        img: friend1,
        name: "Houcin",
      },
      {
        id: 7,
        img: friend2,
        name: "Joseph",
      },
      {
        id: 8,
        img: friend3,
        name: "Kelly",
      },
      {
        id: 9,
        img: friend4,
        name: "Sergio",
      },
      {
        id: 10,
        img: friend5,
        name: "Vicky",
      },
]


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 7 },
    { width: 750, itemsToShow: 8 },
    { width: 1200, itemsToShow: 10 },
  ];
const Stories = () => {
  return (
    <div className='w-full h-[120px] flex items-center justify-center space-x-2'>
              <Carousel breakPoints={breakPoints} className="space-x-2">
                {
                    listStories.map((list)=>(
                        <div key={list.id} className='w-[80px] h-auto flex-col items-center justify-center mr-2'>
                            <div className='flex justify-center items-center p-1 linear rounded-full'>
                            <img src={list.img} alt="" className='w-[70px] h-[70px] rounded-full object-cover'/>
                            </div>
                            <h3 className='text-center'>{list.name}</h3>
                        </div>
                    ))
                }
              </Carousel>
            </div>
  )
}

export default Stories