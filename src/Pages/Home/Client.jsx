import React from "react";

const Client = () => {
  return (
    <div className="w-full py-8 flex flex-col justify-center items-center bg-white">
      <div className="w-10/12 px-4 flex flex-col justify-center items-center">
        <div className="py-2 px-4">
          <div className="text-4xl font-semibold text-grey text-center">Our Clients</div>
          <p className="text-grey2 py-2">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="w-full my-6 flex justify-between items-center">
            <img src="client/Vector.svg" alt="" />
            <img src="client/Vector1.svg" alt="" />
            <img src="client/Logo.svg" alt="" />
            <img src="client/Logo1.svg" alt="" />
            <img src="client/Logo2.svg" alt="" />
            <img src="client/Logo3.svg" alt="" />
            <img src="client/Logo4.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Client;

