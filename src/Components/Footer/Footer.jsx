import React,{useEffect} from 'react'
import './footer.scss'
//import icon
import {FiSend} from 'react-icons/fi'
import {MdTravelExplore} from 'react-icons/md'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HiChevronRight} from 'react-icons/hi'

import video2 from '../../assets/video2.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
      <section className="footer container">
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>
        
        <div className="secContent container" >
            <div className="contactDiv flex" >
              <div className="text" data-aos="fade-up">
                <small>KEEP IN TOUCH</small>
                <h2>Travel with us</h2>
              </div>

              <div className="inputDiv flex" >
                <input type="text" placeholder="Enter email address" data-aos="fade-up"/>
                <button className="btn flex " data-aos="fade-up"> <FiSend className="icon" /> Send</button>
              </div>
            </div>

            <div className="footerCard flex">
              <div className="footerIntro flex">
                <div className="logoDiv">
                  <a href="a"  >
                    <MdTravelExplore className="icon"/>
                    <h4 className='logo'>Travel</h4>.
                  </a>
                </div>

                <div className="footerPara" data-aos="fade-up">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, labore? Eveniet nesciunt quis incidunt totam alias, quidem perspiciatis corporis cumque aliquam ratione distinctio ad, fugiat temporibus non asperiores dignissimos consequatur quo quos quae minima odio impedit nisi nemo doloribus! Omnis reiciendis, ratione porro optio quos perspiciatis. Asperiores inventore aut delectus.
                </div>

                <div className="footerSocials flex" data-aos="fade-up">
                  <FiTwitter className="icon"/>
                  <AiOutlineYoutube className="icon"/>
                  <AiOutlineFacebook className="icon"/>
                  <AiOutlineInstagram className="icon"/>
                </div>
              </div>             

              <div className="footerLinks grid" >
                    {/* GROUPT ONE  */}

                  <div className="linkGroup" data-aos="fade-up" data-aos-duration="3000">
                    <span className='groupTitle'>
                      OUR AGENCY
                    </span>

                    <li className="footerList flex"><HiChevronRight className='icon'/>Service</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>Insurance</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>Agency</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>Tourism</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>Payment</li>

                  </div>
                    {/* GROUPT TWO  */}
                  <div className="linkGroup" data-aos="fade-up" data-aos-duration="5000">
                    <span className='groupTitle'>
                      PARTNERS
                    </span>

                    <li className="footerList flex"><HiChevronRight className='icon'/>Bookings</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>Rencars</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>HostelWorld</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>Trivago</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>TripAdvisor</li>

                  </div>
                    {/* GROUPT THREE  */}
                  <div className="linkGroup" data-aos="fade-up" data-aos-duration="7000">
                    <span className='groupTitle'>
                      LAST MINUTE
                    </span>

                    <li className="footerList flex"><HiChevronRight className='icon'/>London</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>Cali</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>Indonesia</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>Viet Nam</li>
                    <li className="footerList flex"><HiChevronRight className='icon'/>France</li>

                  </div>
              </div>

              <div className="footerDiv flex">
                <smalL>BEST TRAVEL WEBSITE</smalL>
                <smalL>COPPYRIGHTS RESERVED - ISRATECH 2022</smalL>
              </div>

            </div>

            
        </div>
      </section>
    )
}

export default Footer