import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import { IoIosWifi } from "react-icons/io";
import {  MdOutlineSignalCellularAlt } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import myCustomer from '../../assets/customer.png';
import myMotro from "../../assets/moptro logo.png";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import './employeescreen.css'; 

const employees = [
  {'EMP ID':1, NAME:'Sam', DOB:'25-03-1999', ROLE:'Software Developer'},
  {'EMP ID':2, NAME:'Arvi', DOB:'15-11-2009', ROLE:'Software Developer'},
  {'EMP ID':3, NAME:'John Doe', DOB:'05-01-1989', ROLE:'Software Developer'},
  
]

// Employee Screen
function EmployeeScreen() {

  const [searchTerm, setSearchTerm]  = useState('');
  
  const history = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.NAME.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleUserIconClick = () =>{
    history('/homescreen');
  };

  return (
    <div className='employee-screen'>
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

    <div className='employee-imges'>
    <div className='employee-img1'>
      <img src={myCustomer} />
    </div>
    <div className='employee-img2'>
      <img src={myMotro} className='employee-customer-img'/>
    </div>
    <div className='employee4'>4</div>
    </div>
  
      <div className='search-container'>
        <input type='text' placeholder='Search by name...' value={searchTerm} onChange={handleSearch} className='employee-search' style={{width:"400px",color:"rgb(255, 255, 255)", borderRadius:"25px" }}/>
        <FaSearch className='employee-seach-icon' style={{position:"absolute", left:"280px", top:"170px"}}/>
      </div>
      <div className='employee-list'>
       {filteredEmployees.map(employee => (
        <div key={employee['EMP ID']} className='employee-card'>
          
          <p>EMP ID <span className='colon1'>:</span> &nbsp; {employee['EMP ID']}</p>
          <p>NAME   <span className='colon2'>:</span> &nbsp; {employee.NAME}</p>
          <p>DOB    <span className='colon3'>:</span> &nbsp; <span style={{color:"orange"}}>{employee.DOB}</span></p>
          <p>ROLE   <span className='colon4'>:</span> &nbsp; <span style={{color:'#36A546CC'}}> {employee.ROLE}</span></p>
        </div>
       ))}
      </div>

      <footer className='employee-footer-conatiner'>
      <div className='employee-footer-icons'>
      <div className='employee-icon'>
        <FaHome onClick={handleUserIconClick} className='employee-fa-icons' style={{cursor:'pointer'}} />
      </div>
      <div  className='employee-icon' style={{cursor:'pointer'}}>
        <FaUser className='employee-fa-icons' style={{cursor:'pointer'}}/>
      </div>
      </div>
      </footer>
    </div>
  );
};

export default EmployeeScreen;