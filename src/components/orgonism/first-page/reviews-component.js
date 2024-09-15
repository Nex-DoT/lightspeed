import React from "react";
import { reviewData } from "../../../utils/StaticData";
import CardReview from "../../molecules/card-review ";
const ReviewComponent = () => {
  return (
    <section className="w-full bg-2 p-7 md:p-24 flex flex-col items-center justify-center gap-16 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold w-full md:w-[650px]">A POS system you can trust, day-in and day-out.</h1>
      <p className="text-lg text-semibold mb-4 md:mb-40 w-full md:w-[650px]"> See what business owners just like you have to say about Lightspeed point of sale systems.</p>
      <div className=" flex flex-wrap items-center justify-center gap-16 md:gap-24 ">
          {reviewData.map((item, index) => (<CardReview data={item} key={index} />))}
      </div>
      <h1 className="mt-16 text-4xl w-full lg:w-[700px] text-start md:text-center">See how Lightspeed POS system compares to the rest</h1>
      <div className="flex flex-col items-start md:items-center justify-center">
        <a  href=""  className="text-orange-500 underline text-lg font-semibold hover:no-underline">Lightspeed vs. Shopify</a>
        <a  href=""  className="text-orange-500 underline text-lg font-semibold hover:no-underline">Lightspeed vs. Square</a>
        <a  href=""  className="text-orange-500 underline text-lg font-semibold hover:no-underline">Lightspeed Restaurant vs. Toast</a>
        <a  href=""  className="text-orange-500 underline text-lg font-semibold hover:no-underline">Lightspeed Restaurant vs. TouchBistro</a>
        <a  href=""  className="text-orange-500 underline text-lg font-semibold hover:no-underline">Lightspeed Restaurant vs. Square</a>
        <a  href=""  className="text-orange-500 underline text-lg font-semibold hover:no-underline">Lightspeed Restaurant vs. Revel</a>
      </div>
    </section>
  );
};

export default ReviewComponent;
