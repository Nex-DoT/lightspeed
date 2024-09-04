import React from "react";

const IconBtn = ({ data }) => {
  return (
    <button className="flex justify-center items-center w-56 h-[70px] rounded-md border bg-2 shadow-md hover:text-white hover:bg-4 gap-3">
      <span className="text-4xl w-2/5 flex items-center justify-end">
        {data.icon}
      </span>
      <h2 className="font-semibold w-3/5 flex justify-start">{data.name}</h2>
    </button>
  );
};

export default IconBtn;
