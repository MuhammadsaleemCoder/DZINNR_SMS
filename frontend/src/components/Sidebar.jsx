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
    <div className="h-screen w-1/6 border-r-2 border-yellow-200 flex flex-col justify-between bg-zinc-800 ">
      <div className="p-2 h-[10%]  ">
        <div className="flex gap-3 p-4">
          <img src="/images/logo.png" alt="" className=" w-10" />
          <div>
            <h1 className="text-yellow-400 font-bold text-xl">Dzinrr</h1>
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
            className="flex items-center gap-3 text-yellow-400 p-5 font-medium w-[90%] hover:bg-yellow-100  hover:text-zinc-700 rounded-lg"
          >
            <i className={item.icon}></i>
            <p className="">{item.title}</p>
          </NavLink>
        ))}
      </div>
      <div className="h-[10%] flex items-center  justify-center">
        <div className="w-[80%]   flex justify-between items-center border border-yellow-300 p-3 px-4 rounded-xl">
          <div className="h-12 w-12  rounded-full ">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
              alt=""
              className="w-12  object-cover  h-12 border border-blue-600 rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold text-yellow-400">{role}</p>
            <p className="text-white text-sm">{} Senior</p>
          </div>
          <div>
            <i className="fa-solid fa-chevron-down text-xs text-white"></i>
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
