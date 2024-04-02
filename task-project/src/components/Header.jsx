import React from 'react'
import image7 from "../assets/image/image7.png"
import { FaRegHeart } from "react-icons/fa";
import { RiEarthFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className='header' style={{display:"flex",justifyContent:"space-around",alignItems:"center",fontFamily:"arial"}}>
      <div>
         <img style={{height:"55px",marginLeft:"40px"}} src={image7}></img>
      </div>
      <ul style={{display:"flex",gap:"2%",listStyle:"none",marginRight:"150px",marginLeft:"20px"}}>
        <li style={{fontSize:"11px",color:"#050E40",fontWeight:"bolder",marginTop:"3px",marginLeft:"-10px"}}>Services</li>
        <li>
        <select style={{padding:"6px 14px",fontSize:"11px",color:"#050E40",border:"none",fontWeight:"bolder",marginTop:"-14px"}}>
                    <option>Directory</option>
                </select></li>
        <li style={{fontSize:"11px",color:"#050E40",fontWeight:"bolder",marginTop:"3px"}}>News</li> 
        <li>
        <select style={{padding:"6px 14px",fontSize:"11px",color:"#050E40",border:"none",fontWeight:"bolder",marginTop:"-14px"}}>
                    <option>ForBusiness</option>
                </select></li> 
        <li style={{fontSize:"11px",color:"#050E40",fontWeight:"bolder",marginTop:"3px"}}>About</li> 
        <li style={{fontSize:"11px",color:"#050E40",fontWeight:"bolder",marginTop:"3px"}}>Help</li>  
      </ul>
      <div>
      <ul style={{display:"flex",gap:"5%",marginRight:"150px",listStyle:"none"}}>
        <li><button type='submit' style={{backgroundColor:"#0C1FA1",width:"130px",height:"25px",padding:"3px 12px",borderRadius:"20px",color:"white",fontSize:"9px",fontFamily:"Arial"}}>| Search</button></li>
        <li><select style={{fontWeight:"800",fontFamily:"arial", padding:"6px 14px",fontSize:"10px",backgroundColor:"transparent",color:"#0C1FA1",border:"none"}}>
                    <option>En</option>
                </select></li>
        <li style={{color:"#0C1FA1",marginTop:"2px"}}><FaRegHeart></FaRegHeart></li> 
        <li style={{backgroundColor:"#0C1FA1",width:"150px",height:"25px",padding:"4px 5px",textAlign:"center",borderRadius:"7px",color:"white",fontSize:"12px",fontFamily:"Arial"}}><span style={{fontSize:"14px",paddingTop:"6px"}}><FaRegUser></FaRegUser></span> sign in</li> 
        <button style={{backgroundColor:"#0C1FA1",width:"150px",height:"25px",padding:"3px 5px",borderRadius:"7px",color:"white",fontSize:"11px",fontFamily:"Arial"}}>Add Listing</button> 
          
      </ul>
      </div>
    </div>
  )
}

export default Header