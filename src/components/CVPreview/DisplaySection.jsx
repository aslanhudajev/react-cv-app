/* eslint-disable react/prop-types */
function DisplaySection({ title, children }) {
  return (
    <section className="cv-display-sect">
      <h2 className="cv-display-sect-title">{title}</h2>
      {children}
    </section>
  );
}

export default DisplaySection;
