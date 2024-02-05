import { useState } from "react";
import { v4 as uuid } from "uuid";

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
      id: uuid(),
    },
    {
      university: "Stanford",
      degree: "BSC. Computer Science",
      from: "09/1996",
      to: "04/1999",
      id: uuid(),
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
      id: uuid(),
    },
  ]);

  const [isEducationFormVisible, setIsEducationFormVisible] = useState(false);
  const [currentlyEditedEducationEntryId, setCurrentlyEditedEducationEntryId] =
    useState(null);

  const [showworkForm, setShowWorkForm] = useState(false);
  let currentlyEditedWorkEntryId = null;

  function handlePersonalInfoChange(e) {
    const newPersonalInfo = { ...personalInfo };
    newPersonalInfo[e.target.dataset.key] = e.target.value;
    setPersonalInfo(newPersonalInfo);
  }

  function handleEducationInfoChange(e) {
    const newEducationInfo = structuredClone(educationInfo);
    let infoChanged = newEducationInfo.find(
      (education) => education.id === currentlyEditedEducationEntryId
    );
    infoChanged[e.target.dataset.key] = e.target.value;
    setEducationInfo(newEducationInfo);
  }

  function addEducation() {
    const newEducationInfo = structuredClone(educationInfo);
    newEducationInfo.push({
      university: "University",
      degree: "",
      from: "",
      to: "",
      id: uuid(),
    });
    setEducationInfo(newEducationInfo);
  }

  function showEducationEditForm(e) {
    setCurrentlyEditedEducationEntryId(e.target.dataset.id);
    setIsEducationFormVisible(true);
  }

  function hideEducationEditForm(e) {
    setCurrentlyEditedEducationEntryId(null);
    setIsEducationFormVisible(false);
  }

  function showWorkEditForm(e) {
    currentlyEditedWorkEntryId = e.target.dataset.id;
  }

  function hideWorkEditForm() {}

  return (
    <>
      <section className="inputs">
        <PersonalDetails
          {...personalInfo}
          onChange={handlePersonalInfoChange}
        />
        <EducationDetails
          educationInfo={educationInfo}
          isEducationFormVisible={isEducationFormVisible}
          currentlyEditedEducationEntryId={currentlyEditedEducationEntryId}
          addEducation={addEducation}
          showEducationEditForm={showEducationEditForm}
          hideEducationEditForm={hideEducationEditForm}
          onChange={handleEducationInfoChange}
        />
      </section>

      <section className="cv-preview">
        <CV personalInfo={personalInfo} educationInfo={educationInfo} />
      </section>
    </>
  );
}

export default App;
