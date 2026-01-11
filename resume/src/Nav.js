import React from "react";
import { Link } from "react-router-dom";
import {
  Nb,
  NbUl,
  NbLi,
  Pro,
  RvImg,
  Tl,
  TlNm,
  TlSp,
} from "./htmlElements/NavElements";

function Nav() {
  return (
    <Nb>
      <NbUl>
        <NbLi>
          <Pro>
            <RvImg src="/profile-img.jpeg" alt="Profile" />
          </Pro>
          <Tl>
            <TlNm>Abdullah Jaffal</TlNm>
            <TlSp>Civil Engineer</TlSp>
          </Tl>
        </NbLi>
        <NbLi>
          <Link to="/Resume">Resume</Link>
        </NbLi>
        <NbLi>
          <Link to="/Projects">Projects</Link>
        </NbLi>
        <NbLi>
          <Link to="/Contact">Contact</Link>
        </NbLi>
      </NbUl>
    </Nb>
  );
}

export default Nav;
