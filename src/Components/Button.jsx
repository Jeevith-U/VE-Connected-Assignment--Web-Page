import React from "react";

const Button = ({ name, bgOn, icon }) => {
  return (
    <button
      className={`w-max px-4 py-3 rounded-md text-sm font-medium flex justify-center items-center ${
        bgOn ? "bg-primary text-white" : "text-primary"
      }`}
    >
      <p className="px-1">{name}</p>
      <img src={icon} alt="" className="mt-1" />
    </button>
  );
};

export default Button;
