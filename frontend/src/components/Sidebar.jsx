import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../api/axios";

function Sidebar({ items, role }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await api.post("/auth/logout");
      console.log(res.data);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log("error to logout", error);
    }
  };
  return (
    <div className="h-screen w-1/6 border-r border-amber-600 flex flex-col justify-between bg-[#0A0E12] ">
      <div className="p-2 h-[10%]  ">
        <div className="flex gap-3 p-4">
          <img src="/images/logo.png" alt="" className=" w-10" />
          <div>
            <h1 className="text-amber-500 font-bold text-xl">Dzinrr</h1>
            <p className="text-white text-[12px]">School Management System</p>
          </div>
        </div>
      </div>
      {/* icon */}

      <div className="w-full flex flex-col items-center h-[80%] mt-1 ">
        {items.map((item, idx) => (
          <NavLink
            to={item.path}
            key={idx}
            className="flex items-center gap-3 text-white  p-5 font-medium w-[90%] hover:bg-white  hover:text-black rounded-lg"
          >
            <i className={item.icon}></i>
            <p className="">{item.title}</p>
          </NavLink>
        ))}
      </div>
      <div className="h-[10%] flex items-center  justify-center">
        <div className="w-[80%]   flex justify-between items-center border border-white p-3 px-4 rounded-xl bg-[#1F2933]">
          <div className="h-12 w-12  rounded-full ">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
              alt=""
              className="w-12  object-cover  h-12 border border-blue-600 rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold text-white">{role}</p>
            <p className="text-white text-sm">{} Senior</p>
          </div>
          <div className="gap-2 items-center  flex">
            <i className="fa-solid fa-arrow-right-from-bracket text-white"></i>
            <button
              onClick={handleLogout}
              className="text-sm text-white hover:text-yellow-400"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
