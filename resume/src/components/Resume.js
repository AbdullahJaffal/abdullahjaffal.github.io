import React, { useState } from "react";
import { FontAwesomeIcon as FaIc } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  SbDet,
  SbI,
  SbIc,
  SbIn,
  Wrap,
  Prog,
  Det,
  DdSp,
  WText,
  InProg,
  SbTi,
  UrIc,
  UrIn,
  ScI,
  ScTi,
  ScTiSp,
  ScSp,
  ScWr,
  ScIc,
  ScCo,
  ScWrTi,
} from "../htmlElements/ResumeElements";

export const SbItem = ({ icon, details }) => {
  return (
    <>
      <SbI className="important">
        <SbIc>
          <FaIc icon={icon} size="lg" />
        </SbIc>
        <SbIn>
          <SbDet>{details}</SbDet>
        </SbIn>
      </SbI>
    </>
  );
};

export const Skill = ({ list, type }) => {
  const [clicked, setClicked] = useState(null);
  const Progress = ({ width }) => {
    return (
      <>
        <Prog>
          <Det style={{ width: width }}>
            <FaIc
              icon={faCircle}
              style={{
                fontSize: "12px",
                position: "absolute",
                top: "-5px",
                right: "0px",
                marginLeft: "50%",
              }}
            />
          </Det>
        </Prog>
      </>
    );
  };
  const Skills = ({ name, width, text, progress }) => {
    const Toggle = (e) => {
      if (clicked === e) {
        return setClicked(null);
      }
      setClicked(e);
    };
    return (
      <>
        <DdSp onClick={() => Toggle(name)}>
          {name}
          <FaIc
            style={{ float: "right" }}
            icon={clicked === name ? faChevronUp : faChevronDown}
          />
        </DdSp>
        <Progress width={width} />
        <Wrap
          style={clicked === name ? { display: "block" } : { display: "none" }}
        >
          {text ? <WText>{text}</WText> : <></>}
          {progress ? (
            progress.map((p) => (
              <InProg>
                <DdSp>{p.name}</DdSp>
                <Progress width={p.width} />
              </InProg>
            ))
          ) : (
            <></>
          )}
        </Wrap>
      </>
    );
  };
  const listItems = list.map((i, index) => (
    <Skills
      name={i.name}
      width={i.width}
      text={i.text}
      progress={i.progress}
      key={index}
    />
  ));
  return (
    <>
      <SbTi>{type}</SbTi>
      {listItems}
    </>
  );
};

export const Urls = ({ list, type }) => {
  const Url = ({ icon, url }) => {
    return (
      <>
        <UrIc>
          <FaIc icon={icon} size="lg" />
        </UrIc>
        <UrIn>
          <SbDet>
            <a
              href={"https://" + url}
              target="blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              {url}
            </a>
          </SbDet>
        </UrIn>
      </>
    );
  };
  const listItems = list.map((i, index) => (
    <Url icon={i.icon} url={i.url} key={index} />
  ));
  return (
    <>
      <SbTi>{type}</SbTi>
      {listItems}
    </>
  );
};

export const ScItem = ({ icon, title, details }) => {
  const listItems = details.map((i) => (
    <ScI>
      <ScTi>
        {i.position} <ScTiSp>{i.employment}</ScTiSp>
      </ScTi>
      <ScTi>
        {i.company} <ScTiSp>{i.span}</ScTiSp>
      </ScTi>
      <ScSp>{i.date}</ScSp>
      <br />
      <ScSp>{i.location}</ScSp>
      <p style={{ margin: "10px 0 25px" }}>{i.detail}</p>
    </ScI>
  ));
  return (
    <>
      <ScWr>
        <ScIc>
          <FaIc icon={icon} size="3x" />
        </ScIc>
        <ScCo>
          <ScWrTi>{title}</ScWrTi>
          {listItems}
        </ScCo>
      </ScWr>
    </>
  );
};
