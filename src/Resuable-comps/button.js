import React from "react";
import "../scss/Components/_btn.scss";
const Button = (props) => {
  const final = props.name;
  let ret = "";
  if (final === "Prev") {
    ret = <p>Prev</p>;
  } else if (final === "Next") {
    ret = <p>Next</p>;
  } else {
    ret = <p>{props.name} &rarr;</p>;
  }

  return (
    <a href={props.url} className="btn btn__primary">
      {ret}
    </a>
  );
};

export default Button;
