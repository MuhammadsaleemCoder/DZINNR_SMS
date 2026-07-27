import React from "react";

import { Link } from "react-router";
import LeftSide from "../../components/auth/LeftSide";
function Signup() {
  return (
    <div className=" h-screen w-full flex">
      <LeftSide />
      <div className=" w-full h-full flex flex-col sm:w-[40%] p-5 justify-center items-center ">
        <div className="p-10 h-[95%] w-full items-center justify-center flex flex-col ">
          <form className="w-full">
            <h1 className="text-5xl font-medium mb-2">Welcome Back!</h1>
            <p className="text-gray-800">
              Log in to start learning and growing every day
            </p>
            <div className=" h-24 mt-10">
              <label htmlFor="name">Name</label> <br />
              <input
                type="name"
                name="name"
                id="name"
                className="w-full h-12 outline rounded px-4"
              />
            </div>
            <div className=" h-24 mt-3w-full">
              <label htmlFor="email">Email</label> <br />
              <input
                type="email"
                name="email"
                id="email"
                className="w-full h-12 outline rounded px-4"
              />
            </div>

            <div className=" h-24 ">
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                name="password"
                id="password"
                className="w-full h-12 outline rounded px-4"
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="bg-black text-white w-full h-12 rounded"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
        <p>
          <span className="text-gray-700"> I have account?</span>
          <Link to="/login">
            <b> login here</b>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
