import React from "react";
import Button from "../../Components/Button";

const Unlock = () => {
  const title = "The unseen of spending three years at Pixelgrade";
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. ";

  return (
    <div className="w-full py-6 flex justify-center items-center bg-white">
      <div className="w-10/12 px-4 flex justify-center items-center">
        <div className="min-h-96 w-5/12">
          <img src="unlock/Illustration.svg" alt="" />
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

export default Unlock;
