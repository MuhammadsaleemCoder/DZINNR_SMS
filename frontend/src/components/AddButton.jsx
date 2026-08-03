import React from "react";

function AddButton({ description, heading, button, onClick }) {
  return (
    <div>
      {" "}
      <div className=" h-24 w-full flex justify-between  border border-yellow-300 bg-zinc-800 mt-4 p-6 rounded-lg">
        <div>
          <h2 className="font-bold text-lg text-yellow-400">{heading}</h2>
          <p className="font-light text-[14px] text-white">{description}</p>
        </div>
        <button
          className="bg-yellow-400 text-zinc-1000 px-6 rounded cursor-pointer"
          onClick={onClick}
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default AddButton;
