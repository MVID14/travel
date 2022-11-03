import React from 'react'
import './home.scss'
import video from '../../assets/video1.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'

const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4" className='video'></video>

      <div className='homeContent container'>
        <div className='textDiv'>
          <span className='smallText'>Our Packages</span>
          <h1 className='homeTittle'>Search your Holiday</h1>
        </div>

        <div className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>Search you destination: </label>
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
      </div>
    </section>
  )
}

export default Home