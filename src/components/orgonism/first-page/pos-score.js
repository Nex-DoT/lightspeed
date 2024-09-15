/* ---------------------------------- pics ---------------------------------- */
import { scorePicks } from "../../../utils/StaticData";

const PosScore = () => {
  return (
    <section className="w-full bg-5 flex flex-wrap items-center justify-center gap-3 md:p-20">
      {scorePicks.map((item, index) => (
        <img key={index} src={item} alt="score" className=" mix-blend-darken w-1/3 md:w-52"/>
      ))}
    </section>
  );
};

export default PosScore;
