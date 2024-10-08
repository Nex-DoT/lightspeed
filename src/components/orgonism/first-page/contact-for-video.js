import Button from "../../atom/button/button";
import InputComponent from "../../molecules/Input";
import { DataInput1 } from "../../../utils/StaticData";
const VideoLightspeed = () => {
  return (
    <section className="w-full bg-4 flex flex-col items-center justify-center gap-6 text-white p-7 md:p-24 text-center">
      <h1 className="text-4xl font-bold">See how easy it is to get ahead with Lightspeed</h1>
      <p className="text-lg ">Fill out your contact details to watch a free video demo of our built-in features.</p>
      <div className="w-28 flex justify-between items-center">
        <span className="w-8 h-8 font-semibold border-2 !border-red-500 rounded-full flex items-center justify-center relative after:absolute after:h-[2px] after:w-12 after:bg-zinc-600 after:top-1/2  after:left-8 text-red-500">1</span>
        <span className="w-8 h-8 font-semibold border-2 !border-zinc-600 rounded-full flex items-center justify-center text-zinc-500">2</span>
      </div>
      <div className="flex flex-col gap-3 items-center">
        {DataInput1.map((item, index) => (
          <InputComponent data={item} key={index} />   ))}
          <span className=" w-10/12">
            <Button text={"Next"} />
          </span>
      </div>
      <p className="w-96 text-xs text-center font-semibold p-2">By submitting your phone number, you agree to receive text messages about Lightspeed deals. Your data is handled in accordance with our <a href="#" className="text-xs text-orange-500 underline">Privacy Policy.</a> Message/data rates may apply. Message frequency varies. Text STOP tounsubscribe at any time.</p>
    </section>
  );
};

export default VideoLightspeed;
