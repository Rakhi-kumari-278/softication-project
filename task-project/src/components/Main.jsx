import React from 'react'
import Mainimg from '../assets/image/image2.png'
import { IoSearch } from "react-icons/io5";
const Main = () => {
  return (
    <div className='main'>
      <div className='main-1'>
        <h2 style={{fontFamily:"Arial",fontWeight:"900"}}>Discover new amazing 
        <br></br>places around you</h2>
        <br></br>
        <p style={{fontFamily:"Arial",fontSize:"12px",fontWeight:"800"}}>Donec vitae dignissim magna, viverra semper justo.
           <br></br>Cras blandit enim blandit porta elementum.</p>
           <br></br>
        <div className="grid-container">
          <div className="grid-item first-row" style={{fontSize:"11px",textAlign:"left",fontFamily:"arial",color:"gray",fontWeight:"normal",padding:"10px"}}>Search any address, zip code or city...</div>
          <div className="grid-item second-row">
          <select style={{padding:"0px 52px",fontSize:"10px",backgroundColor:"transparent",color:"gray",border:"none",fontFamily:"arial"}}>
                    <option>Select Categories</option>
              </select>
          </div>
          <div className="grid-item second-row">
             <select style={{padding:"2px 52px",fontSize:"10px",backgroundColor:"transparent",color:"gray",border:"none",fontFamily:"arial"}}>
                    <option>Select Services</option>
              </select>
          </div>
          <div className="grid-item second-row"><img  style={{height:"15px"}} src={<IoSearch></IoSearch>}></img></div>
          <div className="grid-item third-row"><button style={{backgroundColor:"orange",padding:"3px 12px",borderRadius:"20px",color:"white",fontSize:"9px",fontFamily:"Arial"}}>Search Now <img  style={{height:"15px"}} src={<IoSearch></IoSearch>}></img></button></div>
        </div>
        <br></br>
        <br></br>
         <div className='flex' style={{display:"flex",flexWrap:"wrap",rowGap:"12px", columnGap:"8px",justifyContent:"center"}}>
            <div className='divchild1' style={{backgroundColor:"#050E40",color:"white",fontSize:"12px",padding:"4px 6px",borderRadius:"3px"}}>Therapy</div>
            <div className='divchild2' style={{backgroundColor:"#050E40",color:"white",fontSize:"12px",padding:"4px 6px",borderRadius:"3px"}}>Support Worker</div>
            <div className='divchild3' style={{backgroundColor:"#050E40",color:"white",fontSize:"12px",padding:"4px 6px",borderRadius:"3px"}}>Physiotherapy</div>
            <div className='divchild4' style={{backgroundColor:"#050E40",color:"white",fontSize:"12px",padding:"4px 6px",borderRadius:"3px"}}>Psychology</div>
            <div className='divchild5' style={{backgroundColor:"#050E40",color:"white",fontSize:"12px",padding:"4px 6px",borderRadius:"3px"}}>Support Coordinator</div>
            <div className='divchild6' style={{backgroundColor:"#050E40",color:"white",fontSize:"12px",padding:"4px 6px",borderRadius:"3px"}}>Key Worker</div>
            <div className='divchild7' style={{backgroundColor:"#050E40",color:"white",fontSize:"12px",padding:"4px 6px",borderRadius:"3px"}}>Positive Behaviour Support Plan</div>
            <div className='divchild8' style={{backgroundColor:"#050E40",color:"white",fontSize:"12px",padding:"4px 6px",borderRadius:"3px"}}>Plan Manager</div>
         </div>
      </div>
      <div className='main-2'><img style={{height:"400px",width:"630px"}} src={Mainimg}></img></div>
    </div>
  )
}

export default Main