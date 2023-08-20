import React, { useState } from 'react'
import {FiSettings} from "react-icons/fi"
import img from "../assets/IMG_3152.jpg"
import { profileImg } from '../data'
import Footer from '../components/Footer'



const Profile = () => {
  const [imgs, setImgs] = useState(profileImg);
  const [value, setValue] = useState(0);

  const {id, name, img1, img2, img3} = imgs[value]
  return (
    <div className='w-full absolute left-[300px] section-points px-20'>
      <div className='w-[80%] mx-auto py-16 post-nav'>
          <div className='flex space-y-4'>
              <div className='flex justify-center mr-20'>
                  <img src={img} alt="" className='w-[230px] h-[230px] rounded-full object-cover'/>
              </div>
              <div className='space-y-6 text-[22px]'>
                <div className='flex items-center space-x-5'>
                  <h5 className='text-2xl '>programmer.me</h5>
                  <button className='text-black bg-white rounded-md px-5 py-2 text-[20px]'>Edit Profile</button>
                  <span className='text-2xl'><FiSettings /></span>
                </div>
              <div className=' flex space-x-10'>
                <p>2 Post</p>
                <p>200 Followers</p>
                <p>4 Following</p>
              </div>

              <div>
                <p className='text-[18px]'>Alaiza Gondraneos</p>
                <span>...</span>  
              </div>

              </div>
          </div>

          
      </div>
      <div className='flex justify-center pb-10 space-x-4'>
      {
        imgs.map((item, index)=>{
          return <button key={item.id} onClick={()=>setValue(index)} className={`${index=== value && 'active-btn'} text-white text-[1.2rem] py-2 px-4 duration-500`}>{item.name}</button>
        })
      }
      </div>

      <div>
            <div className='grid grid-cols-3 gap-x-2'>
                <div>
                  <img src={img1} alt="" className='h-[300px] w-full object-cover'/>
                </div>
                <div>
                  <img src={img2} alt="" className='h-[300px] w-full object-cover'/>
                </div>
                <div>
                  <img src={img3} alt="" className='h-[300px] w-full object-cover'/>
                </div>
            </div>
          </div>

          <div>
            <Footer />
          </div>
    </div>
  )
}

export default Profile