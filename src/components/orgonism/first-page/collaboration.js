import React from "react";
import { pics } from "../../../utils/StaticData";
const Collaboration = () => {
  return (
    <section className=" bg-2 w-full flex flex-col items-center justify-center gap-10 ">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Powering the best businesses in Quebec</h1>
      <div className="flex items-center justify-center flex-wrap w-full md:w-3/4">
        {pics.map((pic) => (<img src={pic} alt="collab" className="w-52" />))}
      </div>
    </section>
  );
};

export default Collaboration;
