/* eslint-disable react/prop-types */
function EducationEntry({ university, id, showEducationEditForm }) {
  return (
    <div className="edu-entry df fdr">
      <span className="edu-uni">{university}</span>
      <button
        className="btn"
        id="edit"
        data-id={id}
        onClick={showEducationEditForm}
      >
        Edit
      </button>
      <button className="btn" id="delete" data-id={id}>
        Delete
      </button>
    </div>
  );
}

export default EducationEntry;
