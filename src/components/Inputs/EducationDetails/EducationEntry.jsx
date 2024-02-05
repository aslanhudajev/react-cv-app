/* eslint-disable react/prop-types */
function EducationEntry({
  university,
  id,
  showEducationEditForm,
  deleteEducation,
}) {
  return (
    <div className="edu-entry df fdr">
      <h3 className="edu-uni">{university}</h3>
      <div className="entry-controls">
        <button
          className="btn"
          id="edit"
          data-id={id}
          onClick={showEducationEditForm}
        >
          Edit
        </button>
        <button
          className="btn"
          id="delete"
          data-id={id}
          onClick={deleteEducation}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EducationEntry;
