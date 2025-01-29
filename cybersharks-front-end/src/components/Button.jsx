// function Button({ onClick, name, className }) {
//   return (
//     <button
//       className={`bg-customBlack  text-white h-10 w-[30%] rounded hover:text-accent3 focus:outline-none font-openSans ${className}`}
//       onClick={onClick}
//     >
//       {name}
//     </button>
//   );
// }
// export default Button;

function Button({ onClick, children, className }) {
  return (
    <button
      className={`rounded-full font-openSans h-10 hover:opacity-90 transition-all ${className}`} // Removed text-white from base styles
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
