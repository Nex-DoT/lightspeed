import React, { useState } from "react";

const CountrySelect = ({ selectCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState(
    selectCountry ? selectCountry.code : "",
  );
  const [selectedFlag, setSelectedFlag] = useState(
    selectCountry ? selectCountry.flag : "",
  );

  const handleCountryChange = (event) => {
    const selectedCode = event.target.value;
    const selectedCountryData = selectCountry.options.find(
      (country) => country.code === selectedCode,
    );

    if (selectedCountryData) {
      setSelectedCountry(selectedCode);
      setSelectedFlag(selectedCountryData.img); // تغییر تصویر پرچم
    }
  };

  return (
    <div className="flex items-center border-none bg-2 rounded-sm h-12">
      <div className="flex items-center bg-1 h-full w-24 p-1 rounded-sm">
        <img src={selectedFlag} alt="country-flag" className="w-5 mr-1" />
        <select  value={selectedCountry}  onChange={handleCountryChange}  className="bg-transparent text-black focus:outline-none">
          {selectCountry.options.map((country, index) => (<option key={index} value={country.code}>
                                                          {country.code}
                                                          </option>))}
        </select>
      </div>
      <input
        type="number"
        className="w-full text-black h-10 border-none p-2 focus:outline-none"
        placeholder="Phone number"
      />
    </div>
  );
};

export default CountrySelect;
