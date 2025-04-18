import React from 'react'
import AITS_Logo from '../assets/images/logo2.jpg'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div class="bg-sky-100 container flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div class="w-1/2 h-screen hidden lg:block">
        <img src={AITS_Logo} alt="AITS Logo" class="object-cover w-full h-full"/>
      </div>
    {/* Right: Log In Form */}
    <div class= "lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4 text-center">Log in to Academic Issue Tracking System</h1>
      <form action="#" method="">
        {/* Email Input */}
        <div class="mb-4 bg-sky-100">
          <label for="email" class="block text-gray-600">Email</label>
          <input required type="email" id="email" name="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
        </div>
        {/* Password Input */}
        <div class="mb-4">
          <label for="password" class="block text-gray-800">Password</label>
          <input required type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
        </div>
        {/* Remember Me Checkbox */}
        <div class="mb-4 flex items-center">
          <input required type="checkbox" id="remember" name="remember" class="text-red-500"/>
          <label for="remember" class="text-green-900 ml-2">Remember Me</label>
        </div>
        {/* Forgot Password Link */}
        <div class="mb-6 text-blue-500">
          <a href="/" className="hover:underline">Forgot Password?</a>
        </div>
        {/* Login Button */}
        <button type="submit" class="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Log in</button>
      </form>
      {/* Sign Up Link */}
      <div class="mt-6 text-green-500 text-center">
        <Link to="/signup" class="hover:underline">Sign Up Here</Link> 
      </div>
    </div>
    </div>
  )
}

export default LoginPage