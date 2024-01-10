/* eslint-disable react/prop-types */
import InputSection from "../InputSection";
import EducationEntry from "./EducationEntry";

function EducationDetails({ educationInfo, addEducation }) {
  return (
    <InputSection title="Education details">
      {educationInfo.map((education) => {
        return (
          <EducationEntry
            university={education.university}
            key={education.id}
          />
        );
      })}
      <button className="btn add" onClick={addEducation}>
        Add Education
      </button>
    </InputSection>
  );
}

export default EducationDetails;
