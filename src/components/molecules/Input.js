import React from "react";
import CountrySelect from "../atom/inputs/country-select";
import DropdownSelect from "../atom/inputs/drop-down-select";
import TextInput from "../atom/inputs/text-input";

const InputComponent = ({ data }) => {
  return (
    <div className="relative w-[370px] md:w-[500px]">
      {/* حالت انتخاب کشور */}
      {data.selectCountry && (
        <CountrySelect selectCountry={data.selectCountry} />
      )}

      {/* حالت dropdown */}
      {data.select && (
        <DropdownSelect title={data.title} options={data.select} />
      )}

      {/* حالت ورودی ساده */}
      {!data.selectCountry && !data.select && (
        <TextInput name={data.name} type={data.type} />
      )}
    </div>
  );
};

export default InputComponent;
