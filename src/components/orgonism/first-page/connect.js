import { useState } from "react";
import Button from "../../atom/button/button";
import Input from "../../molecules/Input";
import { DataInput } from "../../../utils/StaticData";
const Connect = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    Phone: "",
    companyName: "",
    products: "",
    revenue: "",
  });
  return (
    <section className="flex flex-col items-center gap-10 bg-4 text-white w-full p-7 md:p-24">
      <h1 className=" text-4xl font-bold">Lets connect</h1>
      <p className="text-lg font-bold"> Our experts know what it takes to help you succeed. Fill out your contact details and we’ll get in touch.</p>
      <div className="flex flex-col gap-3">
        {DataInput.map((item, index) => (<Input data={item} key={index} />))}
      </div>
      <Button text={"Talk to an expert"} />
      <p className=" w-[350px] md:w-[450px] text-center text-xs font-bold "> By submitting your phone number, you agree to receive text messages about Lightspeed deals. Your data is handled in accordance with our <a href="" className="text-orange-500 underline"> Privacy Policy </a>. Message/data rates may apply. Message frequency varies. Text STOP to unsubscribe at any time.</p>
    </section>
  );
};

export default Connect;
