import React from "react";

function WelcomeCard({ name }) {
  return (
    <div>
      {" "}
      <div className="border  border-yellow-300 bg-zinc-800 p-4 rounded-lg w-full h-24 mt-10 justify-between items-center flex ">
        <div className="">
          <h1 className="text-2xl font-semibold text-yellow-400">
            Welcome Back, {name}!
          </h1>
          <p className="text-[12px] text-white">
            Here's what's happening in your school today
          </p>
        </div>
        <div className="border border--300 py-2 px-4 rounded-lg flex gap-2 items-center bg-yellow-400">
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
