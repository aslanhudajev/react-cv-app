/* eslint-disable react/prop-types */
import InputSection from "../InputSection";
import InputGroup from "../InputGroup";

function PersonalDetails({ fullName, email, tel, address, onChange }) {
  return (
    <InputSection title="Personal details">
      <InputGroup
        label="Full name"
        type="text"
        dataKey="fullName"
        value={fullName}
        onChange={onChange}
      />
      <InputGroup
        label="Email"
        type="email"
        dataKey="email"
        value={email}
        onChange={onChange}
      />
      <InputGroup
        label="Phone number"
        type="tel"
        dataKey="tel"
        value={tel}
        onChange={onChange}
      />
      <InputGroup
        label="Address"
        type="text"
        dataKey="address"
        value={address}
        onChange={onChange}
      />
    </InputSection>
  );
}

export default PersonalDetails;
