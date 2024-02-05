/* eslint-disable react/prop-types */
import InputSection from "../InputSection";
import EducationEntry from "./EducationEntry";
import EducationEditForm from "./EducationEditForm";

function EducationDetails({
  educationInfo,
  isEducationFormVisible,
  currentlyEditedEducationEntryId,
  addEducation,
  showEducationEditForm,
  hideEducationEditForm,
  onChange,
}) {
  if (!isEducationFormVisible) {
    return (
      <InputSection title="Education details">
        {educationInfo.map((education) => {
          return (
            <EducationEntry
              university={education.university}
              id={education.id}
              key={education.id}
              showEducationEditForm={showEducationEditForm}
            />
          );
        })}
        <button className="btn add" onClick={addEducation}>
          Add Education
        </button>
      </InputSection>
    );
  } else {
    console.log(currentlyEditedEducationEntryId);
    const currentlyEditedEducationEntry = educationInfo.find(
      (education) => education.id === currentlyEditedEducationEntryId
    );
    return (
      <InputSection title={currentlyEditedEducationEntry.university}>
        <EducationEditForm
          hideEducationEditForm={hideEducationEditForm}
          onChange={onChange}
          {...currentlyEditedEducationEntry}
        />
      </InputSection>
    );
  }
}

export default EducationDetails;
