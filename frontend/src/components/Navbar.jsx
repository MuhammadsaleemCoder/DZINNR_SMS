import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <i className="fa-solid fa-bars-staggered font-bold text-xl"></i>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center  gap-4">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search anything"
            className="px-3 h-10  border border-gray-500 rounded-lg  focus:outline-none focus:border-gray-600"
          />
        </div>
        <i className="fa-regular fa-bell text-2xl"></i>
        <div className=" flex items-center  justify-center">
          <div className="   flex justify-between items-center gap-4">
            <div className="h-12 w-12  rounded-full ">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                alt=""
                className="w-12  object-cover  h-12 border border-blue-600 rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">Admin</p>
            </div>
            <div>
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
