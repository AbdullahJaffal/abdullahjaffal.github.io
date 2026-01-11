import React from "react";
import Nav from "./Nav";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Con } from "./htmlElements/AppElements";

function App() {
  return (
    <Router>
      <Nav />
      <Con>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects item={"/All"} />} />
          <Route path="/Projects/All" element={<Projects item={"/All"} />} />
          <Route
            path="/Projects/Metraj"
            element={<Projects item={"/Metraj"} />}
          />
          <Route
            path="/Projects/Structural-analysis"
            element={<Projects item={"/Structural-analysis"} />}
          />
          <Route
            path="/Projects/Ulastirma"
            element={<Projects item={"/Ulastirma"} />}
          />
          <Route
            path="/Projects/Hedrolik"
            element={<Projects item={"/Hedrolik"} />}
          />
          <Route
            path="/Projects/AutoCAD"
            element={<Projects item={"/AutoCAD"} />}
          />
          <Route
            path="/Projects/Revit"
            element={<Projects item={"/Revit"} />}
          />
        </Routes>
      </Con>
    </Router>
  );
}

export default App;
