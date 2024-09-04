const Product = () => {
  return (
    <div className=" flex items-start justify-around w-full h-full p-10 className='text-base'">
      <ul className="flex flex-col items-start gap-5 relative before:absolute before:h-full before:w-[1px] before:bg-zinc-200 before:-right-10 ">
        <h3 className="text-base">Retail</h3>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Point of Sale</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Payments</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">eCommerce</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Inventory Management</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Inventory Managemen</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Advanced Marketin</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Lightspeed Insight</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Scanne</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Hardwar</li>
      </ul>
      <ul className="flex flex-col items-start gap-5 relative before:absolute before:h-full before:w-[1px] before:bg-zinc-200 before:-right-10">
        <h3 className="text-base">Restaurant</h3>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Point of Sale</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Order Anywhere</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Advanced Insights</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Inventory</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Tableside</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Payments</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Accounting</li>
      </ul>
      <ul className="flex flex-col items-start gap-5">
        <h3 className="text-base">Golf</h3>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Tee Sheet</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Point of Sale</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Sales & Marketing</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Reporting & Intelligence</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Website & App</li>
        <li className="font-semibold hover:text-orange-500 cursor-pointer">Accounting</li>
      </ul>
    </div>
  );
};

export default Product;
