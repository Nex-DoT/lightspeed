import picture from "../../../image/photos/1.jpg";
const PosSystem = () => {
  return (
  <section className="flex items-center flex-wrap flex-col sm:flex-row justify-between w-full pt-20 sm:pt-24 pb-10 bg-3">
      <div className=" text-center sm:text-left p-2 md:pl-24 w-full md:w-3/5 h-[540px] sm:h-[440px] flex flex-col justify-around sm:justify-around gap-3 md:gap-0 px-8 sm:px-10">
          <p className=" text-red-500 tracking-widest font-bold">POS SYSYEM</p>
          <h1 className=" text-4xl md:text-5xl font-bold">Grow your business with a POS system built for your needs</h1>
          <p className="md:w-2/3 font-semibold"> Lightspeed's cloud-based POS system helps retailers and restaurateurs bring their customer experience to the next level. With our powerful point of sale, we unlock your business' potential.</p>
          <span className=" w-full flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3">
              <button className=" h-12 sm:h-14 bg-red-600 w-full sm:w-52 rounded-full font-bold text-white">Watch a demo</button>
              <button className=" h-12 sm:h-14 border-2 !border-red-500 transition-colors hover:bg-red-600 hover:text-white w-full sm:w-52 rounded-full font-bold text-red-500">Talk to an expert</button>
          </span>
      </div>
      <div className=" w-full md:w-2/5 flex items-center">
          <img src={picture} alt="POSSYSTEM" className=" w-full" />
      </div>
  </section>
  );
};

export default PosSystem;
