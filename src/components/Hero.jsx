import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="px-20 py-28  flex flex-col gap-3">
      <img src={hero} alt="" className="h-full w-full self-center" />
      {/* <div></div> */}
      <h1 className="font-semibold text-[2rem]">Online Experiences</h1>
      <p className="max-w-xs font-light text-base">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
