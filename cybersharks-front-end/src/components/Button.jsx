function Button({ onClick, name, className }) {
  return (
    <button
      className={`bg-customBlack text-white h-10 w-[30%] rounded hover:text-orange-400 focus:outline-none  ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
export default Button;
