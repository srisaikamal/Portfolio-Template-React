import React from "react";
import "../../scss/main.scss";
import ProjectCard from "./Project_card";
import Button from "../../Resuable-comps/button";
import { Link } from "react-router-dom";

class Projects extends React.Component {
  render() {
    return (
      <div className="About__bg">
        <h1 className="heading-primary">Projects</h1>
        <div class="row">
          <div class="col-1-of-3">
            <ProjectCard
              title="Portfolio"
              para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </div>
          <div class="col-1-of-3">
            <ProjectCard
              title="Portfolio"
              para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </div>
          <div class="col-1-of-3">
            <ProjectCard
              title="Portfolio"
              para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </div>
        </div>

        <div className="button-1">
          <Link to="/">
            <Button name="Prev" />
          </Link>
        </div>
        <div className="button-2">
          <Link to="/about">
            <Button name="Next" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Projects;
