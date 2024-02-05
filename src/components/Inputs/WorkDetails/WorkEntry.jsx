/* eslint-disable react/prop-types */
function WorkEntry({ company, id, showWorkEditForm, deleteWork }) {
  return (
    <div className="edu-entry df fdr">
      <span className="edu-uni">{company}</span>
      <button className="btn" id="edit" data-id={id} onClick={showWorkEditForm}>
        Edit
      </button>
      <button className="btn" id="delete" data-id={id} onClick={deleteWork}>
        Delete
      </button>
    </div>
  );
}

export default WorkEntry;
