import React from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import { WiDaySnowThunderstorm } from "react-icons/wi";


function Nav(){
    
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="text-white">
                <Navbar.Brand href="#home">
                    <WiDaySnowThunderstorm size="2em"/>
                    React Weather App
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
export default Nav;