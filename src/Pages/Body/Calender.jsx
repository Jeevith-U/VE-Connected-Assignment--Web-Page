import React from "react";
import Button from "../../Components/Button";

const Calender = () => {
  const title = "How to design your site footer like we did";
  const desc =
    "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.";

  return (
    <div className="w-full py-8 flex justify-center items-center bg-white">
      <div className="w-10/12 px-4 flex justify-center items-center">
        <div className="min-h-80 w-5/12">
          <img src="unlock/pana.svg" alt="" />
        </div>
        <div className="w-7/12">
          <div className="w-11/12">
            <h1 className="my-4 text-3xl font-semibold text-grey">{title}</h1>
            <p className="text-sm my-2 mb-4">{desc}</p>
            <Button name={"Learn more"} bgOn={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
