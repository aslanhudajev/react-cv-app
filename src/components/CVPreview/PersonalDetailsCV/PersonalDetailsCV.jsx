/* eslint-disable react/prop-types */
function PersonalDetailsCV({ fullName, email, tel, address }) {
  return (
    <>
      <h1>{fullName}</h1>
      <div>
        <span className="personalDetail">{email}</span>
        <span className="personalDetail">{tel}</span>
        <span className="personalDetail">{address}</span>
      </div>
    </>
  );
}

export default PersonalDetailsCV;
