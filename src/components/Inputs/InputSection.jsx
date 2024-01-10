function InputSection({ title, children }) {
  return (
    <section className="input-sect">
      <h2 className="input-sect-title">{title}</h2>
      <div className="input-sect-form">{children}</div>
    </section>
  );
}

export default InputSection;
