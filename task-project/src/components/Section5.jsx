import React from 'react'
import Sec5img from '../assets/image/image4.png'
import Image from "../assets/image/imaged.png"
const Section5 = () => {
  return (
    <div className='section5'>
      <div className='section5-1' style={{fontFamily:"Arial",marginLeft:"150px"}}>
        <h6 style={{color:"#F6A83C"}}>WHAT LESTIN OFFERS</h6><br></br>
        <h1 style={{color:"#050E40"}}>Grow your business <br></br>with Lestin platform</h1><br></br>
        <p style={{fontSize:"11px",color:"gray"}}>There cursus massa at urnaaculis estie. Sed vitae ultrs leo massa mollis <br></br>miristum nulla sed medy fringilla vitae.</p>
        <br></br>
        <h5 style={{color:"#F6A83C",textTransform:"uppercase",fontWeight:"600",marginLeft:"20px",fontSize:"12px",borderRight:"5px solid #F6A83C",height:"55px",width:"400px"}}>Committed to the providing our customers with <br></br>exceptional service.</h5>
        <ul style={{display:"flex",listStyle:"none"}}>
          <li><img style={{height:"50px"}} src={Image}></img></li>
          <li style={{fontSize:"14px",marginTop:"16px",color:"#050E40",fontWeight:"600"}}>Find the best places in the city for food, activities<br></br>and relaxation</li>
        </ul>
        <br></br>
        <button style={{backgroundColor:"#050E40",color:"white",fontSize:"10px",borderRadius:"4px",padding:"9px 14px",border:"none"}}>Search Now</button> 
      </div>
      <div className='section5-2'><img style={{height:"500px",marginTop:"-150px"}} src={Sec5img}></img></div>
    </div>
  )
}

export default Section5