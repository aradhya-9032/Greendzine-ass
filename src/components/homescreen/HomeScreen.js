import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";// Assuming you have imported the Home icon
import { FaUser } from "react-icons/fa6";
import { IoIosWifi } from "react-icons/io";
import {  MdOutlineSignalCellularAlt } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import myCustomer from '../../assets/customer.png';
import myMotro from "../../assets/moptro logo.png";
import { useNavigate } from 'react-router-dom';
import myFour from '../../assets/four.png';
import './homescreen.css';

// Home Screen
function HomeScreen() {
  const [showDashboard, setShowDashboard] = useState(false);

  const history = useNavigate();

  const toggleDashboard = () =>{
    setShowDashboard(!showDashboard);
  };

  const productivityData = [4, 92, 122, 93, 89, 98];

  const handleUserIconClick = () =>{
    history('/employeescreen');
  };

  return (
    <div className='home-container'>
    <div>
    <div className='login-nav-container'>
        <div className='timer'>
        11:30
      </div>
      <div className='login-nav'>
         <MdOutlineSignalCellularAlt className='signal'/>
         <IoIosWifi className='wifi'/>
         <BsBatteryHalf className='battery'/>
      </div>
    </div>
    <div className='home-imges'>
      <div className='home-img1'>
        <img src={myCustomer} />
      </div>
      <div className='home-img2'>
        <img src={myMotro} className='home-customer-img'/>
        <img src={myFour} style={{borderRadius:"50px", height:"30px", width:"30px", position:"relative", top:"-23px",left:"-3px" }}/>
      </div>
    </div>
  <div className='home-content-container'>
{setShowDashboard &&(
  <div className='home-main'>
    <button className='home-heading'>Employee Productivity Dashboard</button>
    <ul className='home-ul'>
    {productivityData.map((percentagae, index) => (
      <li key={index}>
      Productivity on {['Monday','Thusday', 'Wednesday', 'Thursday', ' F riday', 'Saturday'][index]}:
      <div style={{display:'inline-block', width:"200px", backgroundColor: '#f0f0f0', borderRadius: '5px'}}>
         <div style={{width:`${percentagae}%`, height:'10px',background:'#36A546CC', borderRadius:'5px'}}></div>
      </div>
      <span className='home-span'>{percentagae}%</span>
      </li>
      ))}
    </ul>   
  </div>
)}
   </div>
     
    <footer className='home-footer-conatiner'>
    <div className='home-footer-icons'>
    <div className='icon'>
      <FaHome onClick={toggleDashboard} style={{cursor:'pointer'}} className='fa-icons' />
    </div>
    <div className='icon'>
      <FaUser onClick={handleUserIconClick} className='fa-icons'  style={{cursor:'pointer'}} />
    </div>
    </div>
    </footer>
      
    </div>
    </div>
  );
};

export default HomeScreen;



























