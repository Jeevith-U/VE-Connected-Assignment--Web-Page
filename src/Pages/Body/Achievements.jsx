import React from "react";

const Achievements = () => {
    const intro = {
        title_grey: "Helping a local",
        title_green: "business reinvent itself",
        desc: "We reached here with our hard work and dedication"
    }

    const counts = [
        {
            icon: "achievements/Icon1.svg",
            count: "2,245,341",
            label: "Members"
        },
        {
            icon: "achievements/Icon2.png",
            count: "46,328",
            label: "Clubs"
        },
        {
            icon: "achievements/Icon3.svg",
            count: "828,867",
            label: "Event Bookings"
        },
        {
            icon: "achievements/Icon4.svg",
            count: "1,926,436",
            label: "Payments"
        }
    ]
  return (
    <div className="w-full py-6 flex justify-center items-center bg-silver">
      <div className="w-10/12 px-4 flex justify-center items-center">
        <div className="w-5/12">
            <h1 className="text-4xl font-semibold text-grey">{intro.title_grey}</h1>
            <h1 className="text-4xl font-semibold text-primary">{intro.title_green}</h1>
            <p className="text-sm py-2">{intro.desc}</p>
        </div>
        <div className="w-7/12 flex justify-center items-center">
        <div className="w-max grid grid-flow-row grid-cols-2">
            {counts.map((item, i) => {
                return (
                    <div key={i} className="w-max flex justify-center items-center my-4 mx-6">
                        <img src={item.icon} alt="" className="w-8"/>
                        <div className="py-1 px-2">
                            <h2 className="text-2xl font-semibold text-grey">{item.count}</h2>
                            <p className="text-sm text-grey2">{item.label}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
