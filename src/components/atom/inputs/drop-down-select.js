import React, { useState } from 'react';

const DropdownSelect = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className={`h-[48px] bg-white border border-gray-300 rounded-sm p-3 flex items-center justify-between cursor-pointer`}
        onClick={toggleDropdown}
      >
        <span className={`${selectedValue ? 'text-black' : 'text-gray-500'}`}>
          {selectedValue || title}
        </span>
        <svg
          className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 text-black">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-3 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelect;