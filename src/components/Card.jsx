import star from "../assets/star.png";

const Card = (props={coverImg, price, rating, reviewCount, title, location, openSpots}) => {
console.log(props)
  let badgeText

  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if(props.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
   <>
   <div className="text-sm flex flex-col w-[30%] min-w-[30%] h-fit relative rounded-md ">
   {badgeText&&<div className="absolute top-2 left-2 bg-white py-1 px-2 rounded-sm font-bold">{badgeText}</div>}
    <img src={props.coverImg} alt="" className="w-full h-[280px] rounded-md "/>
    <div className="py-3 flex flex-col px-1 gap-2">
      <div className="flex">
      <img src={star} alt="" className="h-4" />
      <p>{props.stats.rating} <span className="text-slate-500">({props.stats.reviewCount}).{props.location}</span></p>
      </div>
      <p>{props.title}</p>
      <p><span className="font-bold">From ${props.price}</span> / person</p>
      
    </div>
   </div>
   
   
   </>
  );
};

export default Card;
