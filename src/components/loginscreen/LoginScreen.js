import React from 'react';
import { database } from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import myTheme from "../../assets/theme.png";
import { IoIosWifi } from "react-icons/io";
import {  MdOutlineSignalCellularAlt } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import './loginscreen.css';

function LoginScreen() {

  const history = useNavigate();

  //conditions
  // const [emailValid, setEmailValid] = useState(true);
  // const [passwordValid, setPasswordValid] = useState(true);
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log(e.target.email.value);

     //Destructuring
    //  const {email, password} = e.target.elements;

    const email = e.target.email.value;
    const password = e.target.password.value; 

    createUserWithEmailAndPassword(database, email, password)
    .then(data=>{
      console.log(data,"authData");
      history('/homescreen');
    });
  
  };

  const handleReset = () =>{
    history("/reset")
  }


  return (
    <div className='login-container'>
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
       <div className='img-container'>
       <img src={myTheme} className='image'/>
       <p className='img-sub-heading'>We are Electric</p>
       </div>
  
       <div className='form-container'>
       <form onSubmit={(e) => handleSubmit(e) }>
       <input name='email' type='email' placeholder='E-mail' className='email-input'/>
           <br/>
           <br/>
           <input name='password' type='password' placeholder='Password' className='psw-input'/>
           <br/>
           <br/>
           <button className='login-btn'>Login</button>
       </form>
       </div>
       <div className='forgetten-btn'>
       <p onClick={handleReset}>Forget Password?</p>
       </div>
    </div>
  )
}

export default LoginScreen;




// <input name='email' type='email' placeholder='E-mail' className='email-input'/>
// <input name='password' type='password' placeholder='Password' className='psw-input'/>