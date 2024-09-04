import { useState, useRef, useEffect } from "react";
import { BiSolidChevronDownSquare } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa";

const Accordion = ({ data }) => {
/* ---------------------------------- datas --------------------------------- */
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);
/* -------------------------------- handeler -------------------------------- */
  const openHandler = () => {
    setOpen(!open);
  };

/* ------------- calculate the height of the p for the accordion ------------ */
  useEffect(() => {
    if (open) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className={`w-full overflow-hidden border border-zinc-200 rounded-md transition-all duration-300`}>
      <div className="flex items-center justify-between w-full h-14 cursor-pointer pr-5 pl-5" onClick={openHandler}>
        <h2 className=" text-sm md:text-lg font-semibold">{data.title}</h2>
        <span className={`text-xl ${!open && "text-3xl"} text-red-500`}>
          {open ? <FaArrowUp /> : <BiSolidChevronDownSquare />}
        </span>
      </div>
      <div  ref={contentRef}  style={{ maxHeight: height }}  className="overflow-hidden transition-max-height duration-300 ease-in-out" >
        <div className="px-5 py-4 pr-20">
          <p className="text-sm">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
