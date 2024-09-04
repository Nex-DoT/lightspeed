import picture from "../../../image/photos/4.png";
import Link from "../../atom/Link";
import CheckedText from "../../atom/checked-text";
import { PaymentsText } from "../../../utils/StaticData";
const Payments = () => {
  return (
    <section className="w-full p-7 md:p-24 bg-2 flex flex-wrap items-start justify-center">
      <div className=" w-full lg:w-1/2">
        <img src={picture} alt="payments" className="rounded-md" />
      </div>
      <div className=" w-full lg:w-1/2 p-3 md:pl-10 flex flex-col gap-10">
        <h1 className=" text-3xl md:text-4xl font-bold">A complete payments solution embedded into your point of sale system.</h1>
        <p> Lightspeed Payments is a modern, secure and affordable payments solution with all the tools you need to accept in-person, online and contactless transactions, while getting paid fast.</p>
        <div className=" w-[350px] md:w-[500px]">
          <hr />
          {PaymentsText.map((text) => ( <CheckedText text={text} />))}
        </div>
        <Link text={"Learn more about integrated payments"} />
      </div>
    </section>
  );
};

export default Payments;
