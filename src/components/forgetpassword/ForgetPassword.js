import React from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { database } from '../../Firebase';
import './forgetpassword.css';

function ForgetPassword() {

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(database, emailVal)
        .then(data=>{
            alert("Check your Gmail")
        }).catch(error =>{
            alert(error.code)
        })
    }

  return (
    <div className='forget-psw-container'>
      <h1 className='forget-heading'>Forget Password</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input name="email" className='forget-email'/><br/><br/>
        <button className='reset-btn'>Reset</button>
      </form>
    </div>
  )
}

export default ForgetPassword;