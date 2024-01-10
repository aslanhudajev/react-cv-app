/* eslint-disable react/prop-types */
import InputSection from "../InputSection";
import InputGroup from "../InputGroup";

function PersonalDetails({ personalInfo, onChange }) {
  return (
    <InputSection title="Peronal details">
      <InputGroup
        label="Full name"
        type="text"
        dataKey="fullName"
        value={personalInfo.fullName}
        onChange={onChange}
      />
      <InputGroup
        label="Email"
        type="email"
        dataKey="email"
        value={personalInfo.email}
        onChange={onChange}
      />
      <InputGroup
        label="Phone number"
        type="tel"
        dataKey="tel"
        value={personalInfo.tel}
        onChange={onChange}
      />
      <InputGroup
        label="Address"
        type="text"
        dataKey="address"
        value={personalInfo.address}
        onChange={onChange}
      />
    </InputSection>
  );
}

export default PersonalDetails;
