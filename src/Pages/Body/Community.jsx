import React from "react";

const Community = () => {
  const data = {
    title: "Caring is the new marketing",
    desc: "The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​",
  };
  return (
    <div className="w-full py-10 flex justify-center items-center bg-white">
      <div className="w-10/12 px-4 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold text-grey text-center">
            {data.title}
          </h1>
          <p className="text-grey2 py-2 text-center w-8/12">{data.desc}</p>
        </div>
        <div className="flex justify-center items-center">
          <Card
            img={"community/image1.png"}
            text={"Creating Streamlined Safeguarding Processes with OneRen"}
          />
          <Card
            img={"community/image2.png"}
            text={
              "What are your safeguarding responsibilities and how can you manage them?"
            }
          />
          <Card
            img={"community/image3.png"}
            text={"Revamping the Membership Model with Triathlon Australia"}
          />
        </div>
      </div>
    </div>
  );
};

export default Community;

export const Card = ({ img, text }) => {
  return (
    <div className="w-full m-2.5 flex flex-col justify-center items-center">
        <div>
            <img src={img} alt="" />
        </div>
        <div className="shadow-custom-light rounded-lg bg-silver w-10/12 min-h-32 p-2 relative bottom-16 flex flex-col justify-center items-center">
            <p className="font-semibold text-grey2 text-center">{text}</p>
            <button className="w-full flex justify-center items-center font-semibold text-primary mt-auto">
                <p className="px-1">Read more</p>
                <img src="unlock/VectorArrow.svg" alt="" className="mt-1"/>
            </button>
        </div>
    </div>
  );
};
