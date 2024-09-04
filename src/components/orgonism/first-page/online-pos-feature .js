import Card from "../../molecules/card";
import { DataPosOnline } from "../../../utils/StaticData";
const OnlinePOSFeature = () => {
  return (
    <section className="w-full bg-2 flex flex-col items-center gap-16 p-7 md:p-24">
      <h1 className="text-3xl md:text-4xl text-center font-bold"> Go even further with an online point of sale for your retail shop or restaurant</h1>
      <div className="flex flex-wrap gap-10 items-center justify-center lg:justify-between w-full">
        {DataPosOnline.map((items) => (
          <Card data={items} />
        ))}
      </div>
    </section>
  );
};

export default OnlinePOSFeature;
