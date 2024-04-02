import React from 'react'
import Sec2img from '../assets/image/image3.png'

const Section2 = () => {
  return (
    <div className='section2'>
      <h2 style={{fontSize:"30px" ,fontWeight:"800",fontFamily:"Arial",color:"#000080"}}>We've helped over 50,000 families</h2>
      <div className='section2div'>
        <div className='section2div-first'>
          <h2 style={{fontSize:"22px" ,fontWeight:"400",fontFamily:"Arial",color:"white"}}>See what people say about <br></br>NDIS Providers</h2>
          <p style={{fontSize:"15px" ,fontWeight:"200",fontFamily:"Arial",color:"white"}}>"OT's are so hard to find and have long waiting lists.<br></br>NDIS Providers found me an OT within days"</p>
          <div style={{fontSize:"16px" ,fontWeight:"600",fontFamily:"Arial",color:"white"}}>Support Coordinator</div>
        </div>
        <div className='section2div-second'><img style={{height:"270px"}} src={Sec2img}></img></div>
      </div>
    </div>
  )
}

export default Section2