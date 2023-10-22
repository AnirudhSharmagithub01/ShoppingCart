import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const SignIn = () => {
  const[confirmPassword , setConfirmPassword] = useState(false);
  return (
    <div className=" max-w-[400px] h-auto flex flex-col justify-between items-center mx-auto mt-16 rounded-md mb-16 bg-black">
      <form className=" text-white py-5 px-8 border-none border-black">
        <h1 className="text-3xl font-bold mb-5">Signup</h1>
        <div className="flex flex-col mt-4 gap-6 ">
        <input
            type="text"
            required="*"
            placeholder="Username*"
            className="bg-transparent border-white
        rounded-md w-[350px] p-3 text-white border-double border-2"
          />
          <input
            type="email"
            required="*"
            placeholder="Email address*"
            className="bg-transparent border-white
        rounded-md w-[350px] p-3 text-white border-double border-2"
          />
          <input
            type="password"
            required="*"
            placeholder="Password*"
            className="bg-transparent border-white
        rounded-md w-[350px] p-3 text-white border-double border-2"
          />
          <input
            type={setConfirmPassword ? "password" :""}
            required="*"
            placeholder="Confirm Password*"
            className="bg-transparent border-white
        rounded-md w-[350px] p-3 text-white border-double border-2"
          />
          <Link to={"/signup"}>
            <button
              className="bg-red-600 w-[350px] border-none rounded-md
          text-xl h-12 font-bold flex  items-center justify-center gap-2 p-2"
            >
              SignUp
            </button>
          </Link>
          <Link to={"/google"}>
            <button
              className="bg-red-600 w-[350px] border-none rounded-md
          text-xl h-12 font-bold flex  items-center justify-center gap-2 p-2"
            >
              SignUp with Google
              <FcGoogle/>
            </button>
          </Link>
          <div className=" cursor-pointer">
            <h3 className=" font-light">
               Already an account ? {"  "}
              <Link to="/login" className="font-semibold">
                LogIn
              </Link>
            </h3>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn
