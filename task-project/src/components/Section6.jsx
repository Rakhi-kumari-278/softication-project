import React from 'react'
import Img1 from "../assets/image/imagee.png"
import Img2 from "../assets/image/imagef.png"
import Img3 from "../assets/image/imageg.png"
import Img4 from "../assets/image/imageh.png"
import Img5 from "../assets/image/imagei.png"
import Img6 from "../assets/image/imagej.png"
const Section6 = () => {
  return (
    <div className='section6' style={{display:"flex",flexDirection:"column",justifyContent:"center"
    ,alignItems:"center",gap:"10%",padding:"40px 70px",color:"white",fontFamily:"arial"}}>
      <h2>We've got you covered</h2>
      <p style={{textAlign:"center",width:"740px"}}>Looking for specific services but not sure whether they're covered in your NDIS plan? We're here to help you 
navigate the NDIS and find trusted providers.</p>
      <div style={{display:"flex",gap:"1%"}}>
        <ul style={{display:"flex",listStyle:"none",gap:"3%",flexWrap:"wrap",width:'560px'}}>
            <li style={{height:"100px",width:"160px", backgroundColor:"white",borderRadius:"8px",marginBottom:"14px", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
              <div><img style={{height:"50px"}} src={Img1}></img></div>
              <div style={{fontFamily:"arial",color:"#050E40",fontSize:"11px",fontWeight:"bold"}}>Occupational Therapy</div>
            </li>
            <li style={{height:"100px",width:"160px", backgroundColor:"white",borderRadius:"8px", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
              <div><img  style={{height:"50px"}} src={Img2}></img></div>
              <div style={{fontFamily:"arial",color:"#050E40",fontSize:"11px",fontWeight:"bold"}}>Support Coordination</div>
            </li>
            <li style={{height:"100px",width:"160px", backgroundColor:"white",borderRadius:"8px", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
              <div><img  style={{height:"50px"}} src={Img3}></img></div>
              <div style={{fontFamily:"arial",color:"#050E40",fontSize:"11px",fontWeight:"bold"}}>Plan Management</div>
            </li>
            <li style={{height:"100px",width:"160px", backgroundColor:"white",borderRadius:"8px", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
              <div><img  style={{height:"50px"}} src={Img4}></img></div>
              <div style={{fontFamily:"arial",color:"#050E40",fontSize:"11px",fontWeight:"bold"}}>Cleaning</div>
            </li>
            <li style={{height:"100px",width:"160px", backgroundColor:"white",borderRadius:"8px", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
              <div><img  style={{height:"50px"}} src={Img5}></img></div>
              <div style={{fontFamily:"arial",color:"#050E40",fontSize:"11px",fontWeight:"bold"}}>Physiotherapy</div>
            </li>
            <li style={{height:"100px",width:"160px", backgroundColor:"white",borderRadius:"8px", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
              <div><img  style={{height:"50px"}} src={Img6}></img></div>
              <div style={{fontFamily:"arial",color:"#050E40",fontSize:"11px",fontWeight:"bold"}}>Psychology</div>
            </li>
        </ul>
        <button style={{width:"60px",marginTop:"100px",fontSize:"16px",height:"27px",color:"#F6A83C",backgroundColor:"white",border:"none",borderRadius:"12px"}}>➔</button>
        <div style={{marginLeft:"20px",width:"400px"}}>
          <h2>Trails that fit your
          <br></br>nature</h2>
          <br></br>
          <p style={{fontSize:"14px",fontWeight:"100"}}>Whether you’re pushing your limits or pushing a<br></br>stroller, we've got you covered.</p>
          <br></br>
          <button style={{width:"60px",fontSize:"10px",height:"27px",backgroundColor:"#F6A83C",color:"white",border:"none",borderRadius:"12px"}} >Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Section6