import { useState } from "react";

import CV from "./components/CVPreview/CV";
import PersonalDetails from "./components/Inputs/PersonalDetails/PersonalDetails";
import EducationDetails from "./components/Inputs/EducationDetails/EducationDetails";

import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Gordon Freeman",
    email: "gordon.freeman@blackmesa.gov",
    tel: "+123456789",
    address: "4765 Xen Lane",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      university: "MIT",
      degree: "PHD. Theoretical Physics",
      from: "09/1999",
      to: "04/2004",
    },
    {
      university: "Standform",
      degree: "BSC. Computer Science",
      from: "09/1996",
      to: "04/1999",
    },
  ]);

  const [workInfo, setWorkInfo] = useState([
    {
      company: "Black Mesa Research",
      position: "Scientist",
      location: "New Mexico",
      from: "04/2004",
      to: "current",
      desc: "Reasearch scientist researching the border world Xen",
    },
  ]);

  function handlePersonalInfoChange(e) {
    const newPersonalInfo = { ...personalInfo };
    newPersonalInfo[e.target.dataset.key] = e.target.value;
    setPersonalInfo(newPersonalInfo);
  }

  return (
    <>
      <section className="inputs">
        <PersonalDetails
          personalInfo={personalInfo}
          onChange={handlePersonalInfoChange}
        />
        <EducationDetails educationInfo={educationInfo} />
      </section>

      <section className="cv-preview">
        <CV personalInfo={personalInfo} />
      </section>
    </>
  );
}

export default App;
