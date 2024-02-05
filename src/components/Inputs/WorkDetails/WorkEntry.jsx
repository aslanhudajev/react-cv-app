/* eslint-disable react/prop-types */
function WorkEntry({ company, id, showWorkEditForm, deleteWork }) {
  return (
    <div className="work-entry df fdr">
      <h3 className="work-uni">{company}</h3>
      <div className="entry-controls">
        <button
          className="btn"
          id="edit"
          data-id={id}
          onClick={showWorkEditForm}
        >
          Edit
        </button>
        <button className="btn" id="delete" data-id={id} onClick={deleteWork}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default WorkEntry;
