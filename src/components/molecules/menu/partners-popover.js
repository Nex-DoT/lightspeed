const Partners = () => {
  return (
    <div className="flex flex-col items-start justify-around p-5 w-full h-full">
      <h2 className=" hover:text-orange-500 text-lg cursor-pointer">PARTNER PROGRAM</h2>
      <ul className="font-semibold flex flex-col gap-1">
        <li className="hover:text-orange-500 cursor-pointer">Become a partner</li>
        <li className="hover:text-orange-500 cursor-pointer">NuORDER by Lightspeed</li>
        <li className="hover:text-orange-500 cursor-pointer">Toolkit</li>
      </ul>
    </div>
  );
};

export default Partners;
