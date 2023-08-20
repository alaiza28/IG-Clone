import React from 'react'
import { videos } from '../data'
import Video from '../components/Video'

const Reels = () => {
  return (
    <div className='w-full absolute left-[300px] h-auto section-points bg-black flex justify-center items-center'>
      <div className='w-[700px] h-auto my-10 flex justify-center items-center flex-col gap-y-6'>
          {
            videos.map((video)=>{
              return(
                <Video video={video}/>
              )
            })
          }
      </div>
    </div>
  )
}

export default Reels