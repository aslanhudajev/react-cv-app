/* eslint-disable react/prop-types */
function EducationDetailsCV({ educationInfo }) {
  return (
    <>
      {educationInfo.map((education) => {
        return (
          <div key={education.id} className="exp-entry">
            <div className="entry-main">
              <h3 className="entry-place">{education.university}</h3>
              <span className="entry-fromto">
                {education.from} - {education.to}
              </span>
            </div>
            <div>
              <span className="exp-title">{education.degree}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EducationDetailsCV;
