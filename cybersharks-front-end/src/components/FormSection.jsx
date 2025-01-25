function FormSection({ title, description, children }) {
  return (
    <div className="grid grid-cols-2 border-b-[1px] border-accent1  max-h-80  py-6">
      <div className="flex flex-col flex-1 gap-3 ">
        <h1 className="font-bold">{title}</h1>
        <p className="max-w-[90%]">{description}</p>
      </div>
      {children}
    </div>
  );
}

export default FormSection;
