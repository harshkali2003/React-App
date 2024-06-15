import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const [name , setName] = useState("");
  const [email , setEmail]= useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  })


  const Collectdata = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/register', {name , email , password})
    .then(result => {console.log(result)
      localStorage.setItem('user',JSON.stringify(result))
      navigate('/')
    })
    .catch(err => console.log(err))
    
  }
  return (
   <>
   <div className='signup'>

   <div className='wel'>
   <h1>WELCOME</h1>
    <h1>SIGN UP</h1>
    <p>register for Stay On Track</p>
   </div>
   
    <input type='text' placeholder='Your Name' id='su1' value={name} onChange={(e) =>setName(e.target.value)}/>
    <input type='email' placeholder='Your Email' id='su2' value={email} onChange={(e) =>setEmail(e.target.value)}/>
    <input type='password' placeholder='Your Password' id='su3' value={password} onChange={(e) =>setPassword(e.target.value)}/>
    <button id='sub' onClick={Collectdata}>SUBMIT</button>

   </div>

   </>
  )
}
