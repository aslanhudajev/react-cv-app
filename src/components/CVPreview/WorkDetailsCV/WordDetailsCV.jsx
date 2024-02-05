/* eslint-disable react/prop-types */
function WorkDetailsCV({ workInfo }) {
  return (
    <>
      {workInfo.map((work) => {
        return (
          <div key={work.id} className="exp-entry">
            <div className="entry-main">
              <h3 className="entry-place">{work.company}</h3>
              <span className="entry-fromto">
                {work.from} - {work.to}
              </span>
            </div>
            <div>
              <span className="exp-title">{work.position}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WorkDetailsCV;
