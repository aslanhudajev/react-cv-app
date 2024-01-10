/* eslint-disable react/prop-types */
import InputGroup from "../InputGroup";

function EducationEditForm({ university, degree, from, to, onChange }) {
  return (
    <>
      <form action={(e) => e.preventDefault()}>
        <InputGroup
          label="University"
          type="text"
          dataKey="university"
          value={university}
          onChange={onChange}
        />
        <InputGroup
          label="Degree"
          type="text"
          dataKey="degree"
          value={degree}
          onChange={onChange}
        />
        <InputGroup
          label="From"
          type="text"
          dataKey="from"
          value={from}
          onChange={onChange}
        />
        <InputGroup
          label="To"
          type="text"
          dataKey="to"
          value={to}
          onChange={onChange}
        />
      </form>
    </>
  );
}

export default EducationEditForm;
