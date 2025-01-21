import React from "react";

const hows = [
  {
    name: "Sign Up",
    image: "",
    description:
      "Buy a coupon from our website, sign up and get upt to 500 points",
  },
  {
    name: "Do Tasks",
    image: "",
    description:
      "Click on the task center to completed simple tasks and earn more points",
  },
  {
    name: "Read motivational stories",
    image: "",
    description: "Read motivational stories to fram more points",
  },
  {
    name: "Refer Friends",
    image: "",
    description:
      "Refer your friends aad family, give them a chance to alsoo earn from kliks",
  },
  {
    name: "Redeem Points",
    image: "",
    description: "Redeem your points on the pay day",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div>
      <h2 className=" text-2xl md:text-4xl text-center text-primary font-bold">
        How it works
      </h2>
      <div className="flex flex-col gap-5 md:gap-10 justify-center mt-5">
        {hows.map((how, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center  md:gap-10 md:even:flex-row-reverse"
          >
            <div className="w-full h-[200px] md:w-1/2 md:h-[400px] rounded-xl bg-primary/20"></div>
            <div className="flex flex-col items-center justify-center gap-1 md:gap-5 px-10 py-8 md:w-1/2">
              <p className="text-center text-xl font-semibold">{how.name}</p>
              <p className="text-center text-lg">{how.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
