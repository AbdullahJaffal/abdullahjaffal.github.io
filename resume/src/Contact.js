import React, { useState } from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPaperPlane,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FaIc } from "@fortawesome/react-fontawesome";
import { SbItem, Urls } from "./components/Resume";
import {
  Sb,
  Sc,
  ScCo,
  ScI,
  ScIc,
  ScWr,
  ScWrTi,
} from "./htmlElements/ResumeElements";
import { FmBtn, FmFi, FmIn, FmLa, FmTx } from "./htmlElements/ContactElements";

function Contact() {
  const [clicked, setClicked] = useState(null);
  const Toggle = (e) => {
    setClicked(e);
  };
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
  const SocialMedia = [
    { icon: faFacebookF, url: "fb.com/AbdullahJaffal" },
    { icon: faTwitter, url: "fb.com/AbdullahJaffal" },
    { icon: faInstagram, url: "fb.com/AbdullahJaffal" },
    { icon: faLinkedinIn, url: "fb.com/AbdullahJaffal" },
  ];
  return (
    <>
      <Sb>
        <SbItem icon={faPhone} details={Phone} />
        <SbItem icon={faEnvelope} details={PersonalMail} />
        <SbItem
          icon={faUsers}
          details={Urls({ list: SocialMedia, type: "Social Media" })}
        />
      </Sb>
      <Sc>
        <ScWr>
          <ScIc>
            <FaIc icon={faPaperPlane} size="3x" />
          </ScIc>
          <ScCo>
            <ScWrTi>Contact</ScWrTi>
            <ScI>
              <form>
                <FmFi>
                  <FmLa
                    style={
                      clicked === "Name"
                        ? { fontSize: "0.8rem", transform: "translateY(-140%)" }
                        : {}
                    }
                  >
                    Name *
                  </FmLa>
                  <FmIn onClick={() => Toggle("Name")} type="text" required />
                </FmFi>
                <FmFi>
                  <FmLa
                    style={
                      clicked === "Email"
                        ? { fontSize: "0.8rem", transform: "translateY(-140%)" }
                        : {}
                    }
                  >
                    Email *
                  </FmLa>
                  <FmIn onClick={() => Toggle("Email")} type="email" required />
                </FmFi>
                <FmFi>
                  <FmLa
                    style={
                      clicked === "Message"
                        ? { fontSize: "0.8rem", transform: "translateY(-140%)" }
                        : {}
                    }
                  >
                    Message *
                  </FmLa>
                  <FmTx onClick={() => Toggle("Message")} required></FmTx>
                </FmFi>
                <FmBtn type="submit">Submit</FmBtn>
              </form>
            </ScI>
          </ScCo>
        </ScWr>
      </Sc>
    </>
  );
}

export default Contact;
