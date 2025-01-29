function FormSection({ title, description, children }) {
  return (
    <div className="sm:grid grid-cols-2 border-b-[1px] border-customBlack py-4">
      <div className="flex flex-col flex-1 gap-3 ">
        <h1 className="font-bold">{title}</h1>
        <p className="w-full sm:max-w-[90%]">{description}</p>
      </div>
      {children}
    </div>
  );
}

export default FormSection;
