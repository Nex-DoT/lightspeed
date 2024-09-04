import React from "react";

const CardReview = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center w-80">
      <img src={data.img} alt="review" className="" />
      <h3 className="text-xl font-semibold">{data.title}</h3>
      <p className="text-lg">{data.description}</p>
      <p className="text-lg font-bold">{data.rating}</p>
    </div>
  );
};

export default CardReview;
