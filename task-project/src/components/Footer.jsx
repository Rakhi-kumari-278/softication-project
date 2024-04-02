import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import Flowimg1 from "../assets/image/imageflow.png"
import Flowimg2 from "../assets/image/imageflow.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Footimg from "../assets/image/image6.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer1'>
            <ul>
                <li>
                    <div style={{backgroundColor:"#171b34",borderRadius:"50%",padding:"8px 12px",fontSize:"27px"}}><CiLocationOn></CiLocationOn></div>
                    <div style={{lineHeight:"20px"}}>
                        <h6 style={{fontSize:"10px",fontWeight:"normal"}}>Address</h6>
                        <h5 style={{fontSize:"12px"}}>Sydney, Floor 9, Aus-20034</h5>
                    </div>
                </li>
                <li>
                <div style={{backgroundColor:"#171b34",borderRadius:"50%",padding:"8px 12px",fontSize:"22px"}}><TfiEmail></TfiEmail></div>
                    <div style={{lineHeight:"20px"}}>
                        <h6 style={{fontSize:"10px",fontWeight:"normal"}}>Email</h6>
                        <h5 style={{fontSize:"12px"}}>info@ndis.com</h5>
                    </div>
                </li>
                <li>
                <div style={{backgroundColor:"#171b34",borderRadius:"50%",padding:"10px 12px",fontSize:"22px"}}><LuPhoneCall></LuPhoneCall></div>
                    <div style={{lineHeight:"20px"}}>
                        <h6 style={{fontSize:"10px",fontWeight:"normal"}}>Phone</h6>
                        <h5 style={{fontSize:"12px"}}>+641-7404664714</h5>
                    </div>
                </li>   
            </ul>
        </div>
        <div className='footer2' style={{display:"flex",gap:"4%",justifyContent:"center",alignItems:"center"}}>
            <div><img style={{marginTop:"36%"}} src={Flowimg1}></img></div>
            <div style={{height:"42vh",width:"45vw",display:"flex",flexDirection:"column",gap:"8%"}}>
            <div><img style={{height:"80px",width:"170px"}} src={Footimg}></img></div>
               <p style={{fontSize:"10px",fontWeight:"100",lineHeight:"15px"}}>Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis</p>
               <ul style={{listStyle:"none",display:"flex",gap:"2%"}}>
                <li style={{border:"1px solid white",padding:"4px 4px 1px 4px"}}><FaFacebookF></FaFacebookF></li>
                <li style={{border:"1px solid white",padding:"4px 4px 1px 4px"}}><FaTwitter></FaTwitter></li>
                <li style={{border:"1px solid white",padding:"4px 5px"}}><FaLinkedinIn></FaLinkedinIn></li>
                <li style={{border:"1px solid white",padding:"4px 5px"}}><FaYoutube></FaYoutube></li>
               </ul>
            </div>
            <div style={{height:"25vh",width:"40vw"}}>
               <h4>Quick Links</h4>
               <br></br>
               <ul style={{listStyle:"none",fontSize:"11px",lineHeight:"20px"}}>
                <li><span><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></span>About Us</li>
                <li><span><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></span>Contact</li>
                <li><span><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></span>Blog</li>
                <li><span><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></span>Faq</li>
                <li><span><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></span>Sign Up / Login</li>
               </ul>
            </div>
            <div style={{height:"25vh",width:"40vw"}}>
            <h4>Our Services</h4>
               <br></br>
               <ul style={{listStyle:"none",fontSize:"11px",lineHeight:"20px"}}>
                <li><span><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></span>Services 2</li>
                <li><span><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></span>Services 1</li>
                <li><span><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></span>Services 3</li>
                <li><span><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></span>Services 4</li>
                <li><span><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></span>Services 5</li>
               </ul>
            </div>
            <div style={{height:"25vh",width:"60vw",display:'flex',flexDirection:"column",gap:"4%"}}>
            <h4>Subscribe Newsletter</h4>
            <p style={{fontSize:"10px",fontWeight:"100",lineHeight:"15px"}}>Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a laciniacurabitur lacinia mollis</p>
            <form>
                <label style={{fontSize:"9px"}}>First name</label><br></br>
                <input style={{borderRadius:"10px"}} type='text' required></input><br></br>
                <label style={{fontSize:"9px"}}>Email</label><br></br>
                <input style={{borderRadius:"10px"}} type='email' required></input><br></br>
                <button style={{fontSize:"9px",borderRadius:"9px",padding:"3px 10px",marginTop:"5px",border:"2px solid white"}}>Subscribe</button>
                
            </form>
            
            </div>
            <div><img style={{marginTop:"36%"}} src={Flowimg2}></img></div>
        </div>
        <div className='footer3' style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"32%",fontFamily:"Arial"}}>
            <h5 style={{fontSize:"12px",fontWeight:"normal"}}>© NIDS All rights reserved 2024</h5>
            <ul style={{display:"flex",fontSize:"9px",fontWeight:"normal",listStyle:"none",gap:"5px"}}>
                <li>Terms of use</li>
                <li>Privacy Policy</li>
                <li>Blog  |</li>
                <li style={{marginTop:"-7px"}}><select style={{padding:"6px 14px",fontSize:"8px",backgroundColor:"#171b34",color:"white"}}>
                    <option>En</option>
                </select></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer