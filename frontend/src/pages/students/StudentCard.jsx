import React from "react";
import { useEffect, useState } from "react";
import api from "../../../api/axios";

function StudentCard({ iconBox, icon, title, name, count, chart, subject }) {
  return (
    <div className="bg-white h-36 w-56 mt-8  p-4 rounded-lg border border-gray-300">
      <div className="  flex items-center  justify-center gap-1 ">
        <div className={iconBox}>
          <i className={icon}></i>
        </div>
        <div>
          <h1 className=" text-2 font-medium ml-3 mb-2">{title}</h1>
          <p className="text-[14px] font-light ml-3">{name}</p>
          <p className="font-bold text-xl ">{count}</p>
        </div>
      </div>
      <div>{chart}</div>
    </div>
  );
}

export default StudentCard;
