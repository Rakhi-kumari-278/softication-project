import React from 'react'
import { TiTick } from "react-icons/ti";
const Section8 = () => {
  return (
    <div className='section8'>
      <div className='sec8'>
        <div className='sec8-1'>
           <h6 style={{textTransform:"uppercase",color:"orange",fontSize:"11px"}}>Subscribe to newsletter</h6>
           <h1 style={{fontSize:"34px"}}>Signup to get daily new offers</h1>
           <ul>
            <li><span style={{background:"orange", borderRadius:"50%",color:"white",fontSize:"10px"}}><TiTick></TiTick></span> Making this the first true generator on Internet</li>
            <li><span style={{background:"orange", borderRadius:"50%",color:"white",fontSize:"10px"}}><TiTick></TiTick></span> Lorem Ipsum is not simply random text</li>
            <li><span style={{background:"orange", borderRadius:"50%",color:"white",fontSize:"10px"}}><TiTick></TiTick></span> If you are going to use a passage</li>
           </ul>
        </div>
        <div className='sec8-2'>
            <h5 style={{color:"white"}}>Newsletter</h5>
            <p style={{color:"white",fontSize:"12px"}}>Subscribe to our newsletter to get our daily latest news and updates.</p>
            <br></br>
            <input style={{fontSize:"10px",padding:"14px",borderRadius:"5px", border:"transparent"}} type='email' placeholder='Email address'></input><br></br>
            <button style={{marginRight:"160px",backgroundColor:"#000039",fontWeight:"400",fontSize:"9px",color:"white",padding:"9px",borderRadius:"5px",border:"transparent"}}>Subscribe Now</button>
        </div>
        
      </div>   
    </div>
  )
}

export default Section8