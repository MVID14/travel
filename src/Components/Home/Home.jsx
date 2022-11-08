import React,{useEffect} from 'react'
 
import './home.scss'
// import video1 from '../../assets/video1.mp4'
import img from '../../assets/img.jpg'


import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='home'>
      <div className='overlay'></div>
      {/* <video src={video1} muted autoPlay loop type="video/mp4" className='video'></video> */}
      <img src={img} alt="" className='video'/>
      <div className='homeContent container'>
        <div className='textDiv'>
          <span data-aos="fade-up" className='smallText'>Our Packages</span>
          <h1 data-aos="fade-up" className='homeTittle'>Search your Holiday</h1>
        </div>

        <div className='cardDiv grid' data-aos="fade-up">
          <div className='destinationInput'>
            <label htmlFor='city' >Search you destination: </label>
            <div className='input flex'>
              <input type="text" placeholder='Enter name here...' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className='inputDate'>
            <label htmlFor='date'>Search you destination: </label>
            <div className='input flex'>
              <input type="date" placeholder='Enter name here...' />
            </div>
          </div>

          <div className='inputPrice'>
            <div className='label_total flex'>
              <label htmlFor='price'>MAX PRICE :</label>
              <h3 className='total'>10000$ </h3>
            </div>
            <div className='input flex'>
              <input type="range" max={10000} min={1000} />
            </div>
          </div>
    
          <div className='searchOptions flex'>
            <HiFilter className='icon'/>
            <span>More Filter</span>
          </div>

          

        </div>

        <div className="homeFooterIcons flex" data-aos="fade-up">
          <div className="rightIcons">
            <AiOutlineFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
          </div>

          <div className="leftIcons">
          <BsListTask className="icon"/>
          <TbApps className="icon"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home