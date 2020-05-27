import React from "react";
import "../scss/main.scss";
const ButtonSecondary = (props) => {
  return (
    <a className={props.class} href={props.url}>
      {props.name}
    </a>
  );
};

export default ButtonSecondary;
