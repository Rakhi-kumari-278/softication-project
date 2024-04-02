import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
const Iconsection = () => {
  return (
    <div className='icon'>
        <div className='icon-first'>
            <ul>
                <li style={{fontSize:"10px",textAlign:"center",paddingTop:"4px"}}><MdMailOutline></MdMailOutline>  Mail : <span style={{fontSize:"9px"}}>yourmail@domain.com</span></li>
                <li style={{fontSize:"10px",textAlign:"center",paddingTop:"4px"}}><ImLocation></ImLocation>  Address : <span style={{fontSize:"9px"}}>Sydney, australia, 2001</span></li>
                <li style={{fontSize:"10px",textAlign:"center",paddingTop:"4px"}}><FaPhone></FaPhone>  Phone : <span style={{fontSize:"9px"}}>+641-417405678</span></li>
            </ul>
        </div>
        <div className='icon-second'>
            <ul>
                <li><FaLinkedinIn/></li>
                <li><AiFillInstagram/></li>
                <li><IoLogoWhatsapp/></li>
                <li><BsTwitterX/></li>
                <li><FaYoutube/></li>
                <li><FaFacebookF/></li>
            </ul>
        </div>
    </div>
  )
}

export default Iconsection