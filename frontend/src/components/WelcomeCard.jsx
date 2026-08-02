import React from "react";

function WelcomeCard({ name }) {
  return (
    <div>
      {" "}
      <div className="border border-gray-300 bg-white p-4 rounded w-full h-24 mt-10 justify-between items-center flex ">
        <div className="">
          <h1 className="text-2xl font-semibold">Welcome Back, {name}!</h1>
          <p className="text-[12px]">
            Here's what's happening in your school today
          </p>
        </div>
        <div className="border border-gray-600 py-2 px-4 rounded-lg flex gap-2 items-center">
          <i className="fa-regular fa-calendar-days"></i>
          <p>
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;
