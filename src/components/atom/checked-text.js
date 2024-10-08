import React from "react";
import { BsCheckLg } from "react-icons/bs";

const CheckedText = ({ text }) => {
  return (
    <div className="font-semibold flex flex-col gap-3 pt-3">
      <div className="flex items-start  gap-3">
        <span className="pt-1">
          <BsCheckLg className="text-red-500 font-bold" />
        </span>
        <p className=" text-sm">{text}</p>
      </div>
      <hr />
    </div>
  );
};

export default CheckedText;
