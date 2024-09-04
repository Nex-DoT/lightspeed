import React from "react";
const Resources = () => {
  return (
    <div className="w-full h-full p-3">
      <ul className="text-sm font-semibold w-full h-full flex flex-col items-start justify-around">
        <li className="hover:text-orange-500 cursor-pointer ">Blog</li>
        <li className="hover:text-orange-500 cursor-pointer ">Free Retail Tools</li>
        <li className="hover:text-orange-500 cursor-pointer ">Free Restaurant Tools</li>
        <li className="hover:text-orange-500 cursor-pointer ">Free Golf Tools</li>
        <li className="hover:text-orange-500 cursor-pointer ">Customers</li>
        <li className="hover:text-orange-500 cursor-pointer ">Events and Webinars</li>
      </ul>
    </div>
  );
};

export default Resources;
