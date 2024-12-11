import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSiginInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSiginInForm)
  }
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg" 
        alt="back_ground" />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80 "> 
            <h1 className=" font-bold text-3xl py-4">{isSiginInForm ? "Sign In" : "Sign up"}</h1>
           {!isSiginInForm && <input type="text" placeholder="Full name" className="p-4 my-4 w-full bg-gray-700 rounded-xl" />}
           {!isSiginInForm && <input type="number" placeholder="Enter your mobile number" className="p-4 my-4 w-full bg-gray-700 rounded-xl" />}
            <input type="email address" placeholder="email address" className="p-4 my-4 w-full bg-gray-700 rounded-xl" />
            <input type="Password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-xl"/>
            <button className="p-4 my-6 bg-red-700 w-full rounded-xl" >{isSiginInForm ? "Sign In" : "Sign Up"}</button>
            <p className="font-bold text-xl py-4 cursor-pointer" onClick={toggleSignInForm}>{isSiginInForm ? "Already a user? login now" : "New to netflix? sign up now"}</p>
        </form>
    </div>
  )
}

export default Login