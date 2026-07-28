import React from "react";

function Card({ count, icon, chart, name, iconBox }) {
  return (
    <div className="bg-white h-36 w-56 mt-8 shadow-[0_4px_10px_rgba(0,0,0,.2)] p-4">
      <div className="  flex items-center  justify-center gap-4 ">
        <div className={iconBox}>
          <i className={icon}></i>
        </div>
        <div>
          <p className="text-[14px] font-medium">{name}</p>
          <p className="font-bold text-xl">{count}</p>
        </div>
      </div>

      <div>{chart}</div>
    </div>
  );
}

export default Card;
