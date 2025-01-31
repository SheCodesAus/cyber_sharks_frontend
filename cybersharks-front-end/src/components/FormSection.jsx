function FormSection({ title, description, children, style }) {
  return (
    <div className={`sm:grid grid-cols-2 py-4 ${style || ""}`}>
      <div className="flex flex-col flex-1 gap-3">
        <h1 className="font-bold">{title}</h1>
        <p className="w-full sm:max-w-[90%]">{description}</p>
      </div>
      {children}
    </div>
  );
}

export default FormSection;
