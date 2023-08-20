import React from 'react'

const Notifications = ({openNotif}) => {
  return (
    <div
    className={`fixed left-[300px] top-0 w-[500px] z-40 h-screen bg-black ${
      openNotif ? "translate-x-0" : " translate-x-[-800px]"
    } duration-500 border-all `}
  >
  <div className='px-3 py-5'>
  <h1 className='text-3xl font-medium'>Notifications</h1>
  </div>
    
  <div className='h-[180px] post-nav mb-8'>
    <h3 className='text-[23px] font-medium ml-3'>Today</h3>
  </div>

  <div className='h-[350px] post-nav mb-8'>
  <h3 className='text-[23px] font-medium ml-3'>This Week</h3>
</div>

<div className='h-[200px]  mb-5'>
    <h3 className='text-[23px] font-medium ml-3'>Earlier</h3>
  </div>

  </div>
  )
}

export default Notifications