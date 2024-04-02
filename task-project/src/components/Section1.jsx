import React from 'react'
import Img1 from "../assets/image/image_1.png"
import Img2 from "../assets/image/image_2.png"
import Img3 from "../assets/image/image_3.png"
import Img4 from "../assets/image/image_4.png"
const Section1 = () => {
  return (
    <div className='section1'>
        <h6 style={{fontSize:"12px" ,fontFamily:"Arial"}}>4 EASY STEPS</h6>
        <h2 style={{fontSize:"26px" ,fontWeight:"700",fontFamily:"Arial",color:"#000080"}}>Check how lesting works for your business</h2>
        <div className='container'>
            <div className='containerchild '>
                <img style={{height:"70px",marginLeft:"14px"}} src={Img1}></img>
                <h5>Create an Account</h5>
                <h4 style={{lineHeight:"25px",fontSize:"11px"}}>There are many variations of the <span style={{marginLeft:"36px"}}>passages of available</span></h4>
            </div>
            <div className='containerchild '>
            <img style={{height:"70px",marginLeft:"14px"}} src={Img2}></img>
                <h5>Add Listings</h5>
                <h4 style={{lineHeight:"25px"}}>There are many variations of the <span style={{marginLeft:"36px"}}>passages of available</span></h4>
            </div>
            <div className='containerchild '>
            <img style={{height:"70px",marginLeft:"14px"}} src={Img3}></img>
                <h5>Publish Listings</h5>
                <h4 style={{lineHeight:"25px"}}>There are many variations of the <span style={{marginLeft:"36px"}}>passages of available</span></h4>
            </div>
            <div className='containerchild '>
            <img style={{height:"70px",marginLeft:"14px"}}src={Img4}></img>
                <h5>Get Exposure</h5>
                <h4 style={{lineHeight:"25px"}}> There are many variations of the <span style={{marginLeft:"36px"}}>passages of available</span></h4>
            </div>
        </div>
    </div>
  )
}

export default Section1