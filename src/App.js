import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Reels from './pages/Reels'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import PostDetails from './pages/PostDetails'

window.addEventListener('DOMContentLoaded', ()=>{
  alert('This website is not yet responsive');
})

const App = () => {
  

  const [openSearch, setOpenSearch] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  const handleNotif = () => {
    setOpenNotif(!openNotif)
  }

  const handleOpenMessage = () => {
    setOpenMessage(!openMessage);
  }

  const handleSearch = () => {
    setOpenSearch(!openSearch)
  };

  const handleModal = () =>{
    setOpenModal(!openModal)
  }
  return (
    <BrowserRouter>
      <div className='relative font-font-primary flex bg-black text-white w-screen h-screen '>
        <Navbar openSearch={openSearch} handleSearch={handleSearch} handleOpenMessage={handleOpenMessage} handleNotif={handleNotif} handleModal={handleModal}/>

        <Routes>
            <Route path='/' element={<Home  openSearch={openSearch} handleSearch={handleSearch} openNotif={openNotif} openModal={openModal} handleModal={handleModal}/>}/>
            <Route path='/explore' element={<Explore />} />
            <Route path='/reels' element={<Reels />} />
            <Route path='/messages' element={<Messages openMessage={openMessage}/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/post/:id' element={<PostDetails />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App