import React from "react";
import ProjectsNav from "./components/ProjectsNav";

function Projects({ item }) {
  return (
    <>
      <ProjectsNav />
      <div>
        <div>
          <div>
            <a>
              <img />
              <h4>{item}</h4>
            </a>
          </div>
          <div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ornare arcu ac velit ultricies fermentum. Aliquam congue augue a
                ullamcorper finibus. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam ornare arcu ac velit ultricies
                fermentum.
              </p>
            </div>
            <div>
              <a>
                <h2></h2>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
