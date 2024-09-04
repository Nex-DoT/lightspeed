import React, { useState } from "react";

const TextInput = ({ name, type }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor="input-field"
        className={`absolute text-sm font-bold opacity-70 left-2 transition-all duration-300 transform ${
          isFocused || hasValue
            ? "-translate-y-0 scale-75 text-gray-700 "
            : "translate-y-3 scale-100 text-gray-500"
        }`}
      >
        {name}
      </label>
      <input
        id="input-field"
        type={type}
        className="w-full h-[46px] border border-gray-300 rounded-sm pl-4 focus:outline-none text-black"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== "");
        }}
      />
    </div>
  );
};

export default TextInput;
