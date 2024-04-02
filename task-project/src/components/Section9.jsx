import React from 'react'
import Sec9img from "../assets/image/image5.png"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
const Section9 = () => {
  return (
    <div className='section9'>
      <div className='sec9' style={{fontFamily:"Arial",color:"#050E40"}}>
        <h2>Frequently Asked Questions</h2>
        <div className='sec9-1'>
          <div className='sec9-1-1'>
            <details>
              <summary style={{fontSize:"14px",fontWeight:"500"}}>What does a NDIS directory do?</summary>
              <p style={{fontSize:"10px",lineHeight:"20px"}}>Our free NDIS Navigators connect you with verified local therapy providers 
              who have availability or short waitlists, Our free NDIS Navigators connect you 
              with verified local therapy providers who have availability or short waitlists</p>
            </details>
            <details>
              <summary style={{fontSize:"14px",fontWeight:"500"}}>How much does a NDIS cost?</summary>
              <p style={{fontSize:"10px",lineHeight:"20px"}}>Our free NDIS Navigators connect you with verified local therapy providers 
              who have availability or short waitlists, Our free NDIS Navigators connect you 
              with verified local therapy providers who have availability or short waitlists</p>
            </details>
            <details>
              <summary style={{fontSize:"14px",fontWeight:"500"}}>What is the role of a NDIS?</summary>
              <p style={{fontSize:"10px",lineHeight:"20px"}}>Our free NDIS Navigators connect you with verified local therapy providers 
              who have availability or short waitlists, Our free NDIS Navigators connect you 
              with verified local therapy providers who have availability or short waitlists</p>
            </details>
          </div>
          <div className='sec9-1-2'></div>
          <div className='sec9-1-3'></div>
        </div>
      </div>
      <div><img style={{height:"82vh",width:"82vh"}} src={Sec9img}></img></div>
    </div>
  )
}

export default Section9