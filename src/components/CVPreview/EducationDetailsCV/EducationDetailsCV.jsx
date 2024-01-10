/* eslint-disable react/prop-types */
function EducationDetailsCV({ educationInfo }) {
  return (
    <>
      {educationInfo.map((education) => {
        return (
          <div key={education.id}>
            <div>
              <span className="exp-fromto">
                {education.from} - {education.to}
              </span>
            </div>
            <div>
              <h3 className="exp-place">{education.university}</h3>
              <span className="exp-title">{education.degree}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EducationDetailsCV;
