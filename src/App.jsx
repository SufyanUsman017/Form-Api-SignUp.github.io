import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import SignupForm from './component/SignupForm'
import SigninForm from './component/SigninForm'
import { Route, Routes, useNavigate } from 'react-router-dom'


function App() {
  
  // const log = false;
  // const login = ()=>{
  //   if(log){
  //     navigate("/signup")
  //   }
  //   alert("you Are not login")
  // }


const navigate = useNavigate();


  return (
    <div>
      <Navbar/>
    
        <Routes>
          <Route path="/" element={  <h1>i am From Home</h1>} />
          <Route path="signup" element={<SignupForm/>} />
          <Route path="signin" element={<SigninForm/>} />

        </Routes>
        
        {/* <button onClick={login}>Click Me</button>
       */}
    
      


    </div>
  )
}

export default App
