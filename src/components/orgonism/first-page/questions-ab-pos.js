import React from "react";
import Accordion from "../../molecules/accordion";
import { accordionData } from "../../../utils/accordion-data";
const QuestionsAbPos = () => {
  return (
    <section className="w-full bg-2 flex flex-col items-center gap-16 p-7 md:p-24">
      <h1 className="text-3xl md:text-4xl font-bold">Frequently asked questions about POS systems</h1>
      <div className=" w-full lg:w-10/12 flex flex-col gap-3">
        {accordionData.map((item, index) => (
          <Accordion data={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default QuestionsAbPos;
