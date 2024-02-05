/* eslint-disable react/prop-types */
import InputSection from "../InputSection";
import WorkEntry from "./WorkEntry";
import WorkEditForm from "./WorkEditForm";

function WorkDetails({
  workInfo,
  isWorkFormVisible,
  currentlyEditedWorkEntryId,
  addWork,
  showWorkEditForm,
  hideWorkEditForm,
  deleteWork,
  onChange,
}) {
  if (!isWorkFormVisible) {
    return (
      <InputSection title="Work details">
        {workInfo.map((work) => {
          return (
            <WorkEntry
              company={work.company}
              id={work.id}
              key={work.id}
              showWorkEditForm={showWorkEditForm}
              deleteWork={deleteWork}
            />
          );
        })}
        <button className="btn add" onClick={addWork}>
          Add Work
        </button>
      </InputSection>
    );
  } else {
    console.log(currentlyEditedWorkEntryId);
    const currentlyEditedWorkEntry = workInfo.find(
      (work) => work.id === currentlyEditedWorkEntryId
    );
    return (
      <InputSection title={currentlyEditedWorkEntry.company}>
        <WorkEditForm
          hideWorkEditForm={hideWorkEditForm}
          onChange={onChange}
          {...currentlyEditedWorkEntry}
        />
      </InputSection>
    );
  }
}

export default WorkDetails;
