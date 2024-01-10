/* eslint-disable react/prop-types */
function EducationEntry({ university }) {
  return (
    <div className="edu-entry df fdr">
      <span className="edu-uni">{university}</span>
      <button className="btn" id="edit">
        Edit
      </button>
      <button className="btn" id="delete">
        Delete
      </button>
    </div>
  );
}

export default EducationEntry;
