import React from "react";

function AddButton({ description, heading, button, onClick }) {
  return (
    <div>
      {" "}
      <div className=" h-24 w-full flex justify-between  border border-zinc-300 bg-white mt-4 p-6 rounded-lg ">
        <div>
          <h2 className="font-bold text-lg text-black">{heading}</h2>
          <p className="font-light text-[14px] text-black">{description}</p>
        </div>
        <button
          className="px-6 rounded cursor-pointer bg-amber-600 hover:bg-amber-600 text-white font-semibold"
          onClick={onClick}
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default AddButton;
