import React from "react";
import { FaChevronRight } from "react-icons/fa";
const Link = ({ text }) => {
  return (
    <a href="#" className="text-red-500 decoration-red-500 hover:underline text-lg font-bold flex items-center gap-1 hover:gap-3 transition-all">
      {text} <FaChevronRight />
    </a>
  );
};

export default Link;
