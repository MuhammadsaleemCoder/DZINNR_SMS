import React from "react";

function WelcomeCard({ name }) {
  return (
    <div className="border border-zinc-300 bg-white p-4 sm:p-6 rounded-lg w-full mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center">
      <div>
        <h1 className="text-lg sm:text-2xl font-semibold text-black">
          Welcome Back, {name}!
        </h1>
        <p className="text-[12px] text-black">
          Here's what's happening in your school today
        </p>
      </div>
      <div className="border border-zinc-300 py-2 px-4 rounded-lg flex gap-2 items-center bg-[#1F2933] text-white w-fit">
        <i className="fa-regular fa-calendar-days text-white"></i>
        <p className="text-sm sm:text-base whitespace-nowrap">
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}

export default WelcomeCard;
