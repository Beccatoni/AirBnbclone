import star from "../assets/star.png";

const Card = ({img, price, rating, reviewCount, title, location}) => {
  return (
    <div className="relative  w-[36%] flex flex-col gap-2">
      <img src={img} alt="" className="w-[25rem] h-[32rem] object-cover rounded-md "/>
      <p className="absolute  top-2 left-2 bg-white rounded-md p-1 w-[6.1rem] text-center h-8 ">
        SOLD OUT
      </p>
      <div className="text-sm flex flex-col gap-1">
        <div className="flex">
          <img src={star} alt="" className="h-4" />
          <p>
            &nbsp;{rating} &nbsp;
            <span className="text-slate-400">({reviewCount}). {location}</span>
          </p>
        </div>
        <p className="font-light">{title}</p>
        <p className="font-light">
          <span className="font-semibold">From {price} </span>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
