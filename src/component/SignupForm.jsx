import React, { useState } from 'react'

function SignupForm() {

    const [inputName,setInputName] = useState();
    const [inputUName,setInpUtUName] = useState();
    const [inputPswd,setInputPswd] = useState();
    const {users,setUsers} = useState([]);

    const register = ()=>{
       console.clear();
       console.log(inputName,inputUName,inputPswd)
       
       const person = {
        fullName: inputName,
        userName: inputUName,
        userPswd: inputPswd
       }

   
    }

  return (
    <div class="signup-container">
        <h2>Sign Up</h2>
        <form class="signup-form">
            <label for="name">Full Name:</label>
            <input type="text"  placeholder="Enter your full name" onChange={(e)=>{setInputName(e.target.value)}} required/>

            <label for="username">Username:</label>
            <input type="text"  placeholder="Enter your username" onChange={(e)=>{setInputPswd(e.target.value)}} required/>

            <label for="password">Password:</label>
            <input type="password"  placeholder="Enter your password" onChange={(e)=>{setInputPswd(e.target.value)}} required/>

            <button type="submit" onClick={register}>Register</button>
        </form>
    </div>
    
  )
}

export default SignupForm
