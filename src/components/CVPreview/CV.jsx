/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import DisplaySection from "./DisplaySection";
import EducationDetailsCV from "./EducationDetailsCV/EducationDetailsCV";
import PersonalDetailsCV from "./PersonalDetailsCV/PersonalDetailsCV";
import WorkDetailsCV from "./WorkDetailsCV/WordDetailsCV";

function CV({ personalInfo, educationInfo, workInfo }) {
  return (
    <>
      <PersonalDetailsCV {...personalInfo} />
      <DisplaySection title="Education">
        <EducationDetailsCV educationInfo={educationInfo} />
      </DisplaySection>
      <DisplaySection title="Work">
        <WorkDetailsCV workInfo={workInfo} />
      </DisplaySection>
    </>
  );
}

export default CV;
