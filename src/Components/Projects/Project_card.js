import React from "react";
import ButtomSecondary from "../../Resuable-comps/Button2";

const ProjectCard = (props) => {
  return (
    <div className="card">
      <img className="card__img" src={props.image} alt={props.alt} />
      <h1 className="card__title">{props.title}</h1>
      <p className="card__para">{props.para}</p>
      <ButtomSecondary class="nav-link" name="GitHub link" />
    </div>
  );
};
export default ProjectCard;
