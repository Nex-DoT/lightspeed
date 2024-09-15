import React from "react";
import { FaChevronRight } from "react-icons/fa";
const Link = ({ text }) => {
  return (
    <a href="#" className="text-red-500 decoration-red-500 hover:underline text-lg font-bold flex items-start gap-1 hover:gap-3 transition-all">
      {text} 
      <span className=" pt-2">
        <FaChevronRight />
      </span>
    </a>
  );
};

export default Link;
