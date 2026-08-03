import React from "react";

function Card({ count, icon, chart, name, iconBox, title }) {
  return (
    <div className="bg-zinc-800 h-36 w-56 mt-8  p-4 rounded-lg border border-yellow-300">
      <div className="  flex items-center  justify-center gap-4 ">
        <div className={iconBox}>
          <i className={icon}></i>
        </div>
        <div>
          <h1 className=" text-2 font-medium ">{title}</h1>
          <p className="text-[14px] font-light text-white">{name}</p>
          <p className="font-bold text-xl text-white">{count}</p>
        </div>
      </div>

      <div>{chart}</div>
    </div>
  );
}

export default Card;
