import React from 'react'
import stars from "../assets/image/imagestar.png"
import user from "../assets/image/imageuser1.png"
const Section7 = () => {
  return (
    <div className='section7' style={{fontFamily:"Arial"}}>
      <div className='sec7-1' style={{display:"flex",flexDirection:"column",fontFamily:"arial",gap:"2%"}}>
        <h6 style={{textTransform:"uppercase",color:"#F6A83C"}}>Our feedbacks</h6>
        <h1>What they're say<br></br>about us</h1>
        <img style={{width:"150px"}} src={stars}></img>
        <p style={{fontSize:"10px"}}>Trust score 4.5 (Based on 2,500 reviews)</p>
      </div>
      <div className='sec7-2' style={{display:"flex",justifyContent:"center",alignItems:"flex-start",gap:'5%'}}>
        <div><img style={{height:"80px"}} src={user}></img></div>
        <div style={{marginTop:"10px"}}>
        <ul style={{listStyle:"none"}}>
            <li style={{fontSize:"13px"}}>Name</li>
            <li style={{fontSize:"10px",color:"#F6A83C"}}>Founder & CEO</li>
          </ul>
          <br></br>
          <br></br>
          <p style={{fontSize:"12px"}} >Lorem ipsum is simply free text dolor<br></br>not sit amet, notted adipisicing elit<br></br>sed do eiusmod incididunt labore et<br></br>dolore text.</p>
        </div>
      </div>
      <div className='sec7-3' style={{display:"flex",justifyContent:"center",alignItems:"flex-start",gap:'5%'}}>
        <div><img style={{height:"80px"}} src={user}></img></div>
        <div style={{marginTop:"10px"}}>
          <ul style={{listStyle:"none"}}>
            <li style={{fontSize:"13px"}}>Name</li>
            <li style={{fontSize:"10px",color:"#F6A83C"}}>Company Founder</li>
          </ul>
          <br></br>
          <br></br>
          <p style={{fontSize:"12px"}} >Lorem ipsum is simply free text dolor<br></br>not sit amet, notted adipisicing elit<br></br>sed do eiusmod incididunt labore et<br></br>dolore text.</p>
        </div>
      </div>
      <div className='sec7-4'>➔</div>
    </div>
  )
}

export default Section7