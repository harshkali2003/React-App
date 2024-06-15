import React from 'react'
import { Link } from 'react-router-dom'

export default function Training() {
  return (
    <>
    <div className='trainbody'>
    <div className='yoga'>
    <div id='y1'>
      <img src='https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height="400px" width="300px" />
      <h1>YOGA</h1>
      <Link to="/yoga" id='y3'>GET STARTED </Link>
    </div>
    </div>
    <hr/>

    <div className='gain'>
    <div id='g1'>
      <img src='https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=600' height="400px" width="300px" />
      <h1>WEIGHT GAIN</h1>
      <Link to="/gain" id='g3'>GET STARTED </Link>
    </div>
    </div>
    <hr/>

    <div className='loss'>
    <div id='l1'>
      <img src='https://images.pexels.com/photos/4498155/pexels-photo-4498155.jpeg?auto=compress&cs=tinysrgb&w=600' height="400px" width="300px" />
      <h1>WEIGHT LOSS</h1>
      <Link to="/loss" id='l3'>GET STARTED </Link>
    </div>
    </div>
    <hr/>

    <div className='maintain'>
    <div id='m1'>
      <img src='https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height="400px" width="300px" />
      <h1>MAINTAIN BODY</h1>
      <Link to="/maintain" id='m3'>GET STARTED </Link>
    </div>
    </div>
    </div>
    </>
  )
}
