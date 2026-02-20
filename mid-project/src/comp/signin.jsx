import React from 'react'
import { useState } from 'react'

function Signin() {
  return (
    <>
   
    <div id ='form1'>
         <h1 id='nav'>sign in </h1>
        <form action="" id='form2'>
    <input type="text" placeholder='username'className='sign' />
    <input type="password" placeholder='password'className='sign' />
    <br />
    <a href="" id='regester'>rigester</a>
    <button id='buton'>sign in</button>
    </form>
    </div>
    <button id='back' onClick={()=>window.location.href="/Facepage"}>Back to Home</button>

    </>
  )
}

export default Signin