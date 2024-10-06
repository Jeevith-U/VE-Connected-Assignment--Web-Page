import React from "react";
import Button from "../../Components/Button";

const Customers = () => {
  const data = {
    desc: "We have enjoyed working with the JustGo system to setup and go live with our new membership platform. The initial effort to organize it along the lines of how our sport currently works was quick and relatively easy. The new system has already massively improved the time and effort it takes to setup and process member and club applications. It will help us to communicate with people in our sport in a much more effective way, and collect data to help us improve how our sport is governed.",
    customerName: "Tim Smith",
    customerInfo: "British Dragon Boat Racing Association",
  };
  const { desc, customerName, customerInfo } = data;
  return (
    <div className="w-full py-4 flex justify-center items-center bg-silver">
      <div className="w-10/12 px-4 flex justify-between items-center">
        <div className="w-4/12 flex justify-start items-center">
          <img src="unlock/customers.svg" alt="" className="w-11/12" />
        </div>
        <div className="w-8/12">
          <p className="text-sm text-grey2 font-semibold my-2 mb-4">{desc}</p>
          <h3 className="text-xl font-medium text-primary">{customerName}</h3>
          <p className="text-xs text-grey2 py-2">{customerInfo}</p>
          <div className="flex justify-start items-center">
            <div className="w-8/12 my-6 flex justify-between items-center">
              <img
                src="client/Vector.svg"
                alt=""
                className="w-10 border p-1 rounded-md"
              />
              <img src="client/Vector1.svg" alt="" className="w-10 p-1" />
              <img src="client/Logo.svg" alt="" className="w-10 p-1" />
              <img src="client/Logo1.svg" alt="" className="w-10 p-1" />
              <img src="client/Logo2.svg" alt="" className="w-10 p-1" />
              <img src="client/Logo3.svg" alt="" className="w-10 p-1" />
            </div>
            <div className="w-4/12 flex justify-start items-center px-2">
              <p className="text-sm font-medium text-primary px-2">
                Meet all customers
              </p>
              <img src="unlock/VectorArrow.svg" alt="" className="mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
