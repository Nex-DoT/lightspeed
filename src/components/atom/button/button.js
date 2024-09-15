const Button = ({ text }) => {
  return (
    <button className="h-10  bg-red-600 w-full sm:w-44 rounded-full mt-3 font-extrabold text-white">
      {text}
    </button>
  );
};

export default Button;
