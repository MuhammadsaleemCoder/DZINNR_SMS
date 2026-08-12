import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LeftSide from "../../components/auth/LeftSide";
import api from "../../../api/axios";
export default function Login() {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFromData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const selectRoleUser = (role) => {
    setSelectedRole(role);
  };
  const navigate = useNavigate();

  const handleForm = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        role: selectedRole,
        email: formData.email,
        password: formData.password,
      });

      console.log(res.data);
      setMsg(res.data.message);
      console.log(errorMsg);
      setTimeout(() => {
        if (res.data.user.role === "admin") {
          navigate("/admin/dashboard");
        } else if (res.data.user.role === "teacher") {
          navigate("/teacher/dashboard");
        } else if (res.data.user.role === "student") {
          navigate("/Students/dashboard");
        }
      }, 2000);
    } catch (error) {
      console.log(error.message);
      setErrorMsg(error.response?.data?.message);
    }
  };

  return (
    <div className=" h-screen w-full flex  justify-center">
      <LeftSide />
      <div className="w-[85%] h-screen p-8 flex flex-col items-center sm:w-full sm:h-screen sm:justify-center ">
        <div className="bg-amber-100 w-12 h-12 flex items-center justify-center rounded p-3 border border-amber-300 sm:block  sm:items-center sm:justify-center">
          <i className="fa-solid fa-lock text-2xl text-amber-600"></i>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="text-3xl font-bold mt-2">Welcome Back!</h1>
          <p className="text-gray-800 text-xl mt-2">
            {" "}
            Log in to your account to continue
          </p>
        </div>

        <form
          className="w-full h-full sm:w-[80%] sm:h-full  "
          onSubmit={formSubmit}
        >
          <div className="flex flex-col items-center gap-4  ">
            {!selectedRole ? (
              <p className="text-[#1A2332] font-semibold mt-4">
                {" "}
                <i className="fa-regular fa-circle-check font-semibold text-amber-700"></i>{" "}
                Select your role
              </p>
            ) : (
              <p className="text-[#1A2332] font-semibold mt-4">
                {" "}
                <i className="fa-regular fa-circle-check font-semibold text-amber-700"></i>{" "}
                {selectedRole} role selected
              </p>
            )}
            <div className="flex gap-5 w-full md:justify-center ">
              <button
                type="button"
                onClick={() => selectRoleUser("admin")}
                className={` ${selectedRole === "admin" ? "bg-amber-50 border-amber-600" : "border-zinc-300"} flex flex-col justify-center items-center  rounded  border  w-42 h-32 gap-1`}
              >
                <i className="fa-solid fa-user-tie text-3xl text-amber-600"></i>
                <p className="font-bold">Admin</p>
                <p>Full Access</p>
              </button>
              <button
                type="button"
                onClick={() => selectRoleUser("teacher")}
                className={` ${selectedRole === "teacher" ? "bg-amber-50 border-amber-600" : "border-zinc-300"} flex flex-col justify-center items-center rounded  border  w-42 h-32 gap-1`}
              >
                <i className="fa-solid fa-person-chalkboard text-3xl text-amber-700"></i>
                <p className="font-bold">Teacher</p>
                <p>Manage Classes</p>
              </button>
              <button
                type="button"
                onClick={() => selectRoleUser("student")}
                className={`${selectedRole == "student" ? "bg-amber-50 border-amber-600" : "border-gray-300"}
                 flex flex-col justify-center items-center  rounded  border w-42 h-32 gap-1  `}
              >
                <i className="fa-solid fa-user-graduate text-3xl text-amber-700"></i>
                <p className="font-bold">Student</p>
                <p>View & Learn</p>
              </button>
            </div>

            {errorMsg && (
              <div className="w-[52%] bg-[#FDE8E8] h-24 flex items-center justify-around rounded border border-red-400">
                <div>
                  <i className="fa-solid fa-triangle-exclamation text-6xl text-red-700 "></i>
                </div>
                <div>
                  <p className="text-red-700 font-bold">Login Failed</p>
                  <p className="text-[14px]">{errorMsg} </p>
                  <p className="text-[14px]">
                    Please select the correct role and try again
                  </p>
                </div>
              </div>
            )}
            {msg && (
              <div className="w-[52%] bg-green-100 py-3 flex items-center justify-around rounded border border-green-400">
                <div>
                  <i className="fa-solid fa-circle-check text-green-500 text-5xl"></i>
                </div>
                <div>
                  <p className="text-green-700 font-bold">Login Successfully</p>
                  <p className="text-[14px]">{msg} </p>
                  <p className="text-[14px]">You are login to your account</p>
                </div>
              </div>
            )}
          </div>

          <div className=" h-24 mt-10 w-full ">
            <label htmlFor="email" className="font-semibold">
              Email Address
            </label>{" "}
            <br />
            <div className="flex items-center justify-between  h-12 w-full border rounded mt-3">
              <i className="fa-regular fa-envelope px-4"></i>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full h-11 focus:outline-none rounded px-4"
                value={formData.email}
                onChange={handleForm}
              />
            </div>
          </div>
          <div className=" h-24 mt-6">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>{" "}
            <br />
            <div className="w-full h-12 outline rounded px-4 flex items-center justify-between  gap-2 mt-3">
              <i className="fa-solid fa-lock "></i>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full h-full   px-4 focus:outline-none"
                value={formData.password}
                onChange={handleForm}
              />
            </div>
          </div>
          <div className="w-full mt-12">
            <button
              type="submit"
              className="bg-amber-600 text-white w-full h-12 rounded flex gap-2 justify-center items-center"
            >
              <i className="fa-solid fa-right-to-bracket"></i>
              Login
            </button>
          </div>
        </form>

        <p className="font-medium">
          Don't have an account ?{" "}
          <span className="text-amber-600 font-medium">
            Contact your administrator
          </span>
        </p>
      </div>
    </div>
  );
}
