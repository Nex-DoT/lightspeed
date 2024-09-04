import picture from "../../../image/photos/3.png";
import CheckedText from "../../atom/checked-text";
import { SoftwareText } from "../../../utils/StaticData";
import Link from "../../atom/Link";
const CloudBase = () => {
  return (
    <section className=" flex flex-wrap-reverse items-satrt w-full bg-2 p-7 md:p-24">
      <div className=" w-full lg:w-1/2 md:pr-10 flex flex-col gap-8">
            <h1 className=" text-3xl md:text-4xl font-bold">Work wherever you want with cloud-based POS management software.</h1>
            <p className=" text-lg font-semibold">
            Using Lightspeed means your data is available wherever you are—at work, at home or on the road. Whether you're a restaurateur making quick menu edits on the fly or a retailer checking on end-of-day reports in your home office, being cloud-based means managing your business wherever it works for you.
            </p>
            <div className=" w-[350px]  md:w-[500px]">
                <hr />
                {SoftwareText.map((text , index) => (<CheckedText key={index} text={text} />))}
            </div>
            <Link text={"Learn more about our cloud POS"} />
      </div>
      <div className=" w-full lg:w-1/2">
            <img src={picture} alt="software" className="rounded-md w-11/12" />
      </div>
    </section>
  );
};

export default CloudBase;
