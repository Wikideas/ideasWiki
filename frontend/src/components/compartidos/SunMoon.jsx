import React, { useState } from 'react';
import SunIcon from '../../styles/assets/sun-2.svg';
import MoonIcon from '../../styles/assets/moon-stars.svg'
import '../../styles/sunMoon.css';

const SunMoon = () => {
  const [isMoonVisible, setMoonVisible] = useState(true);

  const toggleSunMoon = () => {
    setMoonVisible(!isMoonVisible);
  };

  return (
    <div onClick={toggleSunMoon} style={{ cursor: 'pointer' }}>
      {isMoonVisible ? 
      <img src={MoonIcon} className= "moon" alt="Moon Icon" /> :
      <img src={SunIcon} className="sun" alt="Sun Icon" />}
    </div>
  );
};

export default SunMoon;