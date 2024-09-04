const Card = ({ data }) => {
  return (
    <div className="w-80 flex flex-col items-center gap-4 ">
      <span className="text-4xl">{data.icon}</span>
      <h3 className="text-lg font-bold">{data.title}</h3>
      <p className="text-center text-lg">{data.description}</p>
    </div>
  );
};

export default Card;
