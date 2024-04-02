import React from 'react'
import Sec3img from '../assets/image/image1.png'
import { FaPhone } from "react-icons/fa";
const Section3 = () => {
  return (
    <div className='section3'>
      <div className='section3div'>
        <div className='section3div-first'><img style={{height:"400px",width:"520px"}} src={Sec3img}></img></div>
        <div className='section3div-second'>
          <h2 style={{fontSize:"32px" ,fontWeight:"600",fontFamily:"Arial",color:"#000080"}}>Your NDIS Navigators are <br></br>ready to help</h2>
          <p style={{fontSize:"15px" ,fontWeight:"300",fontFamily:"Arial",color:"#000080"}}>Our friendly Connections Team take away the stress by doing<br></br>the search for you, finding local NDIS Providers that meet your<br></br>needs to choose from.</p>
          <div>
            <button style={{border:"2px solid orange",backgroundColor:"orange", padding:"6px 12px",fontFamily:"Arial",fontWeight:"300",borderRadius:"4px",color:"white"}}>Get started</button> 
            <span style={{fontSize:'12px',color:"#050E40",fontWeight:"bold"}}> <FaPhone></FaPhone> Or call +61 4160000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3