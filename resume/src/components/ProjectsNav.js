import React from "react";
import { Link } from "react-router-dom";
import { TNb, TNbL, TNbU } from "../htmlElements/ProjectsElements";

function ProjectsNav() {
  return (
    <>
      <TNb>
        <TNbU>
          <TNbL>
            <Link to="/Projects/All">Show All</Link>
          </TNbL>
          <TNbL>
            <Link to="/Projects/Metraj">Metraj</Link>
          </TNbL>
          <TNbL>
            <Link to="/Projects/Structural-analysis">Structural analysis</Link>
          </TNbL>
          <TNbL>
            <Link to="/Projects/Ulastirma">Ulastirma</Link>
          </TNbL>
          <TNbL>
            <Link to="/Projects/Hedrolik">Hedrolik</Link>
          </TNbL>
          <TNbL>
            <Link to="/Projects/AutoCAD">AutoCAD</Link>
          </TNbL>
          <TNbL>
            <Link to="/Projects/Revit">Revit</Link>
          </TNbL>
        </TNbU>
      </TNb>
    </>
  );
}

export default ProjectsNav;
