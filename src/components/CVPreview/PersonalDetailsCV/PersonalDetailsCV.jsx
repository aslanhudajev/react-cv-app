/* eslint-disable react/prop-types */
function PersonalDetailsCV({ fullName, email, tel, address }) {
  return (
    <>
      <h1 id="det-name">{fullName}</h1>
      <div id="det-personal-details">
        <span className="personal-detail">{email}</span>
        <span className="personal-detail">{tel}</span>
        <span className="personal-detail">{address}</span>
      </div>
    </>
  );
}

export default PersonalDetailsCV;
