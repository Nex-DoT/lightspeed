import React from "react";

const FooterList = ({ list }) => {
  return (
    <ul className="text-white w-[150px] h-[345px] lg:w-[190px] lg:h-[300px] text-sm font-semibold">
      {list.map((item, index) => (<li className="mt-2 hover:text-orange-500 cursor-pointer" key={index}>{item}</li>))}
    </ul>
  );
};

export default FooterList;
