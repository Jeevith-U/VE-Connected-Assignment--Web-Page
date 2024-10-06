import React from "react";

const Client = () => {
  return (
    <div className="w-full py-8 flex flex-col justify-center items-center bg-white">
      <div className="w-10/12 px-4 flex flex-col justify-center items-center">
        <div className="py-2 px-4">
          <div className="text-4xl font-semibold text-grey text-center">
            Our Clients
          </div>
          <p className="text-grey2 py-2">
            We have been working with some Fortune 500+ clients
          </p>
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
        <div className="w-full my-8 flex flex-col justify-center items-center">
          <div className="w-6/12 px-6 text-center text-3xl font-bold text-grey">
            Manage your entire community in a single system
          </div>
          <p className="text-grey2 my-2">Who is Nextcent suitable for?</p>
        </div>
        <div className="w-full flex justify-evenly items-center">
          <Card
            src={"client/Icon1.svg"}
            title={"Membership Organizations"}
            desc={
              "Our membership management software provides full automation of membership renewals and payments"
            }
          />
          <Card
            src={"client/Icon2.svg"}
            title={"National Associations"}
            desc={
              "Our membership management software provides full automation of membership renewals and payments"
            }
          />
          <Card
            src={"client/Icon3.svg"}
            title={"Clubs And Groups"}
            desc={
              "Our membership management software provides full automation of membership renewals and payments"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Client;

export const Card = ({ src, title, desc }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="shadow-md w-8/12 h-full p-3 rounded-md">
        <div className="flex flex-col justify-center items-center">
          <img src={src} alt="" />
          <div className="text-2xl font-bold text-grey text-center">
            {title}
          </div>
        </div>
        <p className="py-2 text-sm text-grey2 text-center">{desc}</p>
      </div>
    </div>
  );
};
