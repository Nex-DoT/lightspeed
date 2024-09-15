import React from "react";
import IconBtn from "../../atom/button/icon-btn";
import { btnData } from "../../../utils/StaticData";
import pic1 from "../../../image/section/1.png";
import pic2 from "../../../image/section/2.png";
import pic3 from "../../../image/section/3.png";
import pic4 from "../../../image/section/4.png";
import pic5 from "../../../image/section/5.png";
const BtnsComponent = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-14 w-full  bg-5 p-7 lg:p-24 pb-48 overflow-hidden">
      <span>
        <img className="w-52 xl:w-80 absolute xl:block bottom-28 -right-14   xl:-top-28 xl:left-20" src={pic1} alt="pic1" />
        <img className=" w-52 xl:w-72 absolute bottom-32 -left-4  xl:-left-20 xl:top-44" src={pic2} alt="pic2" />
        <img className=" w-44 xl:w-64 absolute left-14 bottom-0 xl:-bottom-24 xl:left-28" src={pic3} alt="pic3" />
        <img className="w-44 absolute hidden xl:block top-4 right-14" src={pic4} alt="pic4" />
        <img className="w-44 xl:absolute xl:block bottom-0 right-0 sm:right-16 hidden" src={pic5} alt="pic5" />
      </span>


      <h1 className=" text-3xl text-center md:text-4xl font-semibold">Get what your business needs</h1>
      <div className="flex flex-wrap gap-3 items-center justify-center mb-36 lg:mb-0">
        {btnData.map((item, index) => (<IconBtn data={item} key={index} />))}
      </div>
    </section>
  );
};

export default BtnsComponent;
