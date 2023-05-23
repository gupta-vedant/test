import React from "react";
import "./content.css";
import {AiOutlineArrowDown, AiOutlineArrowLeft} from "react-icons/ai"
import {TfiMenuAlt} from "react-icons/tfi"
import {GrAdd} from "react-icons/gr"
import {AiOutlineArrowUp} from "react-icons/ai"
import {RiFileExcel2Fill} from "react-icons/ri"

const Content = () => {
    return (
        
        <div className="content_head">
       
        <h5 className="head" > <AiOutlineArrowLeft/> TRANSCODER 1  </h5> 
        <p  className="para" >A video transcoder offers the capabilities of transmuxing, transmiting and transcoding, providing flexibility in manipulating video streams for various purposes such as compatibility, optimization, and format cconversion</p>
        <div className="search">
        <div className="inp"> <input/>
        <br></br>
        <h7><AiOutlineArrowUp/> <RiFileExcel2Fill/> Import</h7>
        <h6><AiOutlineArrowDown/> <RiFileExcel2Fill/> Export</h6>

        </div>
        <div className="menu">
        <TfiMenuAlt/><GrAdd/>
        </div>
      </div>
      </div>
    
     
    )
}

export default Content