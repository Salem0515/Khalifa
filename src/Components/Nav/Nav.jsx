import React, {useState } from 'react'
import './NavBar.css'
import main_logo from '../../assets/main-logo2.png'
import fram_1 from '../../assets/fram1.png'
import fram_2 from '../../assets/fram2.png'
import fram_3 from '../../assets/fram3.png'
import fram_4 from '../../assets/fram4.png'
import fram_5 from '../../assets/fram5.png'
import fram_6 from '../../assets/fram6.png'
import bell_1 from '../../assets/Bell.png'
import bell_2 from '../../assets/Bell2.png'
import Ellipse10 from '../../assets/Ellipse10.png'
import Moon from '../../assets/Moon.png'
import vector from '../../assets/Vector.png'
import language from '../../assets/Language.png'
import settings from '../../assets/Settings.png'
import LogOut from '../../assets/LogOut.png'
import suadie from '../../assets/suadie.png'
const Nav = () => {
  
    const [ isdropdown, setdropdown ] = useState(false)

    const toggleDropdown = ()=> {
        setdropdown(!isdropdown)
    }

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };
  return (
    <nav>
      <div className="mainBar">
            <img src={main_logo} alt="" className='logo' />
            <div className="navComponents">
                <img src={fram_3} alt="" />
                <img src={fram_1} alt="" />
                <img src={fram_2} alt="" />
                <img src={fram_4} alt="" />
                <img src={fram_5} alt="" />
                <img src={fram_6} alt="" />
            </div>
            <div className="socialComponents">
                <img src={bell_1} alt="" />
                <img src={bell_2} alt="" />
                <img src={Ellipse10} alt="" className='user_icon' onClick={toggleDropdown} />

                {isdropdown && (
        <ul className="dropdown">
          <li><img src={Ellipse10} alt="" />Ahmed Ali</li>
          <li><img src={vector} alt="" /> My Profile</li>
          <li> <img src={Moon} alt="" onClick={toggleDarkMode} /> Dark Mode</li>
          <li><img src={language} alt="" />Language <span>العربية</span> <img src={suadie} alt="" /></li>
          <li><img src={settings} alt="" />Account Settings</li>
          <li><img src={LogOut} alt="" />Logout</li>
        </ul>
      )}
            </div>
      </div>
    </nav>
  )
}

export default Nav
