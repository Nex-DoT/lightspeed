import React from "react";
/* --------------------------- Collaboration picks -------------------------- */
import pic1 from "../../../image/businesses/1.png";
import pic2 from "../../../image/businesses/2.png";
import pic3 from "../../../image/businesses/3.png";
import pic4 from "../../../image/businesses/4.png";
import pic5 from "../../../image/businesses/5.png";
import pic6 from "../../../image/businesses/6.png";
import pic7 from "../../../image/businesses/7.png";
import pic8 from "../../../image/businesses/8.png";
import pic9 from "../../../image/businesses/9.png";

const Collaboration = () => {
  return (
    <section className=" bg-2 w-full flex flex-col items-center justify-center gap-10  p-7">
      <h1 className="text-3xl md:text-4xl font-bold text-center px-4">Powering the best businesses in Quebec</h1>
      <div className="flex items-center justify-center flex-wrap w-full md:w-3/4">  
        <img src={pic1} alt="collab" className=" w-1/2 sm:w-52 " />
        <img src={pic2} alt="collab" className=" w-1/2 sm:w-52 " />
        <img src={pic3} alt="collab" className=" w-1/2 sm:w-52 " />
        <img src={pic4} alt="collab" className=" w-1/2 sm:w-52 " />
        <img src={pic5} alt="collab" className=" w-1/2 sm:w-52 " />
        <img src={pic6} alt="collab" className=" w-1/2 sm:w-52 " />
        <img src={pic7} alt="collab" className="w-52 hidden sm:block" /> {/*hidden image for phone version*/}
        <img src={pic8} alt="collab" className="w-52 hidden sm:block" /> {/*hidden image for phone version*/}
        <img src={pic9} alt="collab" className="w-52 hidden sm:block" /> {/*hidden image for phone version*/}
      </div>
    </section>
  );
};

export default Collaboration;
