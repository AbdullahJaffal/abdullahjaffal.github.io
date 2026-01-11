import React from "react";
import {
  faUserLarge,
  faPhone,
  faEnvelope,
  faHouseChimney,
  faCalendar,
  faLanguage,
  faUsers,
  faSuitcase,
  faGraduationCap,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Sb, Sc } from "./htmlElements/ResumeElements";
import { SbItem, ScItem, Skill, Urls } from "./components/Resume";

function Resume() {
  const Info = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua . Ld do eiusmod tempor
      incididunt ut labore et dolore magna aliqua
    </p>
  );
  const Phone = (
    <>
      <h4>+90 (553) 102 5818</h4>
      <span>Mobile</span>
    </>
  );
  const PersonalMail = (
    <>
      <h4>jaffal.abdullah@gmail.com</h4>
      <span>Personal</span>
    </>
  );
  const Adress = (
    <p>
      Kilis Merkez
      <br />
      Türkiye
    </p>
  );
  const Professional = [
    {
      name: "Autodesk AutoCAD",
      width: "85%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua . Ld do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      progress: [],
    },
    {
      name: "Autodesk Revit",
      width: "70%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua . Ld do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      progress: [],
    },
    {
      name: "MS Office",
      width: "90%",
      text: null,
      progress: [
        { name: "Word", width: "80%" },
        { name: "Excel", width: "90%" },
        { name: "PowerPoint", width: "70%" },
      ],
    },
    {
      name: "SAP2000",
      width: "80%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua . Ld do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      progress: [],
    },
  ];
  const Languages = [
    {
      name: "Arabic",
      width: "100%",
      text: "Native Language",
      progress: [
        { name: "Reading", width: "100%" },
        { name: "Listening", width: "100%" },
        { name: "Speaking", width: "100%" },
        { name: "Writing", width: "100%" },
      ],
    },
    {
      name: "English",
      width: "75%",
      text: null,
      progress: [
        { name: "Reading", width: "85%" },
        { name: "Listening", width: "90%" },
        { name: "Speaking", width: "50%" },
        { name: "Writing", width: "75%" },
      ],
    },
    {
      name: "Turkish",
      width: "85%",
      text: null,
      progress: [
        { name: "Reading", width: "85%" },
        { name: "Listening", width: "95%" },
        { name: "Speaking", width: "70%" },
        { name: "Writing", width: "90%" },
      ],
    },
  ];
  const SocialMedia = [
    { icon: faFacebookF, url: "fb.com/AbdullahJaffal" },
    { icon: faTwitter, url: "fb.com/AbdullahJaffal" },
    { icon: faInstagram, url: "fb.com/AbdullahJaffal" },
    { icon: faLinkedinIn, url: "fb.com/AbdullahJaffal" },
  ];
  const Works = [
    {
      position: "Production Manager",
      employment: "- Internship",
      company: "Fibrobeton Yapı Elemanları",
      span: "San. İnş. ve Tic. A.Ş.",
      date: "Feb 2021 - May 2021",
      location: "Düzce, Turkey",
      detail:
        "During 70 working days, I developed my skills in the management and organization of the business. Direct contact with employees increased my social communication skills. I think the skills I have gained will help me in my professional life to plan and set up a mechanism to implement any project more accurately than before.",
    },
    {
      position: "Office Engineer",
      employment: "- Internship",
      company: "Köseoğlu Mühendislik",
      span: "",
      date: "Jun 2020 - Jul 2020",
      location: "Kilis, Turkey",
      detail:
        "24 iş günü ofis stajı yaptım. Bu sürede ofis ortamında inşaat sektörünün durumu hakkında bilgi edindim ve Autocad, SAP2000 gibi programlar üzerinde çalışmalar yapıp incelemelerde bulundum. Bu incelemelerin sonucunda birçok bilgiye eriştim bunların meslek hayatımda çok işe yarayacağını düşünüyorum.",
    },
    {
      position: "Şantiye Şefi",
      employment: "- Internship",
      company: "Koç İnşaat",
      span: "Taahhüt San. ve Tic. Ltd. Şti.",
      date: "Aug 2019 - Sep 2019",
      location: "Düzce, Turkey",
      detail:
        "24 iş günü şantiye stajımın sonunda inşaatçılık ve mühendislik alanlarında yeterli olmasa da genel bir öngörüm oluştu. Bununla birlikte stajımda kaba, ince inşaat ve şantiye hakkında çeşitli bilgiler edindim Öğrendiklerimin mühendislik kariyerimde işime yarayacağını düşünmekteyim.",
    },
  ];
  const Schools = [
    {
      position: "Civil Engineering",
      employment: "- Bachelor's Degree",
      company: "Duzce University",
      span: "",
      date: "Jul 2017 - Jun 2021",
      location: "GPA: 3.14",
      detail:
        "During 70 working days, I developed my skills in the management and organization of the business. Direct contact with employees increased my social communication skills. I think the skills I have gained will help me in my professional life to plan and set up a mechanism to implement any project more accurately than before.",
    },
  ];
  const Refarances = [
    {
      position: "Pro. Dr. Yilmaz KOCAK",
      employment: "",
      company: "Duzce University",
      span: "",
      date: "Jul 2017",
      location: "",
      detail: "references available upon request.",
    },
    {
      position: "Pro. Dr. Yilmaz KOCAK",
      employment: "",
      company: "Duzce University",
      span: "",
      date: "Jul 2017",
      location: "",
      detail: "references available upon request.",
    },
  ];

  return (
    <>
      <Sb>
        <SbItem icon={faUserLarge} details={Info} />
        <SbItem icon={faPhone} details={Phone} />
        <SbItem icon={faEnvelope} details={PersonalMail} />
        <SbItem icon={faHouseChimney} details={Adress} />
        <SbItem
          icon={faCalendar}
          details={Skill({ list: Professional, type: "Professional Skills" })}
        />
        <SbItem
          icon={faLanguage}
          details={Skill({ list: Languages, type: "Languages Skills" })}
        />
        <SbItem
          icon={faUsers}
          details={Urls({ list: SocialMedia, type: "Social Media" })}
        />
      </Sb>
      <Sc>
        <ScItem icon={faSuitcase} title="Work Experience" details={Works} />
        <ScItem icon={faGraduationCap} title="Education" details={Schools} />
        <ScItem icon={faFilePen} title="Refarances" details={Refarances} />
      </Sc>
    </>
  );
}

export default Resume;
