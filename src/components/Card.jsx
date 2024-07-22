import React from "react";
import star from "../assets/star.png";
import sport from "../assets/sport.png";

const Card = () => {
  return (
    <div className="relative rounded-md  w-[36%] flex flex-col gap-2">
      <img src={sport} alt=""/>
      <p className="absolute  top-2 left-2 bg-white rounded-md p-1 w-[6.1rem] text-center h-8 ">SOLD OUT</p>
      <div className="text-sm flex flex-col gap-1">
        <div className="flex">
          <img src={star} alt="" className="h-4" />
          <p>
          &nbsp;5.0 &nbsp;<span className="text-slate-400">(6).USA</span>
          </p>
        </div>
        <p className="font-light">Life lessons with Katie Zaferes</p>
        <p className="font-light"> 
          <span className="font-semibold">From $136 </span>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
