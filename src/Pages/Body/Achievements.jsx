import React from "react";

const Achievements = () => {
    const intro = {
        title: "Helping a local business reinvent itself",
        desc: "We reached here with our hard work and dedication"
    }

    const counts = [
        {
            icon: "achievements/Icon1.svg",
            count: "2,245,341",
            label: "Members"
        },
        {
            icon: "achievements/Icon2.svg",
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

      </div>
    </div>
  );
};

export default Achievements;
