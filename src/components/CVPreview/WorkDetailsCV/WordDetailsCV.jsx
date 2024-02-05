/* eslint-disable react/prop-types */
function WorkDetailsCV({ workInfo }) {
  return (
    <>
      {workInfo.map((work) => {
        return (
          <div key={work.id}>
            <div>
              <span className="exp-fromto">
                {work.from} - {work.to}
              </span>
            </div>
            <div>
              <h3 className="exp-place">{work.company}</h3>
              <span className="exp-title">{work.position}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WorkDetailsCV;
