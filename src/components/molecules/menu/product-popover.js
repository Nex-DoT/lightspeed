import { productListData } from "../../../utils/menu-list-data";
const Product = () => {
  return (
    <div className=" flex items-start justify-around w-full h-full p-10 className='text-base'">
      <ul className="flex flex-col items-start h-full gap-5 relative before:absolute before:h-full before:w-[1px] before:bg-zinc-200 before:-right-10 ">
        <h3 className="text-base">Retail</h3>
        {productListData[0].map((item , index)=>(<li className="font-semibold hover:text-orange-500 cursor-pointer" key={index}>{item}</li>))}
      </ul>
      <ul className="flex flex-col items-start h-full gap-5 relative before:absolute before:h-full before:w-[1px] before:bg-zinc-200 before:-right-10">
        <h3 className="text-base">Restaurant</h3>
        {productListData[1].map((item , index)=>(<li className="font-semibold hover:text-orange-500 cursor-pointer" key={index}>{item}</li>))}
      </ul>
      <ul className="flex flex-col items-start gap-5">
        <h3 className="text-base">Golf</h3>
        {productListData[2].map((item , index)=>(<li className="font-semibold hover:text-orange-500 cursor-pointer" key={index}>{item}</li>))}
      </ul>
    </div>
  );
};

export default Product;
