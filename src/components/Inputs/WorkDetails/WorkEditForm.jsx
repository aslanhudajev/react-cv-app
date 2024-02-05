/* eslint-disable react/prop-types */
import InputGroup from "../InputGroup";

function WorkEditForm({
  company,
  position,
  from,
  to,
  hideWorkEditForm,
  onChange,
}) {
  return (
    <>
      <form action="submit">
        <InputGroup
          label="Company"
          type="text"
          dataKey="company"
          value={company}
          onChange={onChange}
        />
        <InputGroup
          label="Position"
          type="text"
          dataKey="position"
          value={position}
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

        <button className="btn hide" type="button" onClick={hideWorkEditForm}>
          Close
        </button>
      </form>
    </>
  );
}

export default WorkEditForm;
