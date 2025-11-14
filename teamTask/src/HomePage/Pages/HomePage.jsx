import React from 'react'
import Header from '../../LandingPage/Components/Header'
import Footer from '../../LandingPage/Components/Footer'
import AddPost from '../Components/AddPost'

function HomePage() {
  return (
    <div className='bg-[#F1F5FA]'>
      <Header/>
      <div className='bg-white w-[90%] md:w-[95%] shadow-lg pt-[12%] mx-auto flex justify-center items-start'>
        <div className='pt-2 pb-5'>
            <AddPost clas></AddPost>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
