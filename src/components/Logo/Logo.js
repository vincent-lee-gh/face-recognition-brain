import React from 'react';
import Tilt from 'react-tilt';
import { FaRobot } from "react-icons/fa";
const Logo = () => {
  return(
    <div className='logo'>
      <Tilt className='Tilt'option={{max : 100}} >
        <div className='Tilt-inner'> <a href='#0' id="logo-icon"> <FaRobot /> </a> </div>
      </Tilt>
{/* 🧠 */}
      {/* <Tilt className='Tilt'option={{max : 25}} style={{height: 150, width:150 }}>
        <div className='Tilt-inner'></div>
      </Tilt> */}
      
    </div>
    );
}

export default Logo;