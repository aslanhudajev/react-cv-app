/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import DisplaySection from "./DisplaySection";
import EducationDetailsCV from "./EducationDetailsCV/EducationDetailsCV";
import PersonalDetailsCV from "./PersonalDetails/PersonalDetailsCV";

function CV({ personalInfo, educationInfo }) {
  return (
    <>
      <PersonalDetailsCV {...personalInfo} />
      <DisplaySection title="Education">
        <EducationDetailsCV educationInfo={educationInfo} />
      </DisplaySection>
    </>
  );
}

export default CV;
