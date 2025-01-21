function Button({ onClick, name, className }) {
  return (
    <button
      className={`bg-customBlack text-wrap bg-slate-500 text-white h-10 w-[30%] rounded hover:text-accent3 focus:outline-none font-openSans ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
export default Button;
