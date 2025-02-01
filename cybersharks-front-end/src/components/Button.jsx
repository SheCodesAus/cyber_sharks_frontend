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
