function FormSection({ title, description, children }) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-[50%]">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}

export default FormSection;
