import React from "react";
import { FiSettings } from 'react-icons/fi';
import { RiFileWordLine} from 'react-icons/ri';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {CgProfile} from 'react-icons/cg';
import './header.css';
const Header = () => {
    return (
        <header>
            <div className="container header__container">

            <h5 className="text_light" >nestocast <RiFileWordLine/></h5>
            
            <div className="heading">
            <h8><FiSettings/></h8>
            <h10> 03 <IoIosNotificationsOutline/> </h10>
            <h9> Vedant Gupta <CgProfile/> </h9>
            </div>
            </div>
        </header>
    )
}


export default Header