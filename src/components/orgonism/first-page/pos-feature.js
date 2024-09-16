import React from "react";
import picture from "../../../image/photos/2.png";
import Link from "../../atom/Link";
const ManageBusiness = () => {
  return (
    <section className="w-full bg-2 flex flex-wrap items-center justify-center p-9 md:p-24 ">
      <div className="w-full xl:w-1/2">
            <img src={picture} alt="business" className="rounded-md" />
      </div>
      <div className=" flex flex-col gap-7 w-full py-5 xl:w-1/2 xl:pl-10">
            <h1 className=" text-3xl sm:text-4xl font-semibold sm:font-bold">Manage your business with robust POS system software.</h1>
            <p className=" font-semibold text-base md:text-lg"> Process transactions and manage your stock on the go with Lightspeed’s iPad POS system. Our apps are intuitive to use and easy to train on, so you and your staff can get started right away.</p>
            <span>
                <h3 className=" text-lg !font-bold">Embrace freedom</h3>
                <p className=" font-semibold text-base md:text-lg"> Step away from the computer and work anywhere with a fully featured iPad POS system.</p>
            </span>
            <span>
                <h3 className=" text-lg !font-bold">Stay flexible</h3>
                <p className=" font-semibold text-base md:text-lg"> Manage your business from your iPad with tools like built-in reports and purchase orders.</p>
            </span>
            <span>
                <h3 className=" text-lg !font-bold">Empower staff</h3>
                <p className=" font-semibold text-base md:text-lg">Give your staff the tools to sell anywhere and offer mobile payments with our iPad POS system.</p>
            </span>

            <Link text={"Learn more about iPad POS system"} />
      </div>
    </section>
  );
};

export default ManageBusiness;
