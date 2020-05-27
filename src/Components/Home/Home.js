import React from "react";
import Logo from "../../Resuable-comps/logo";
import "../../scss/main.scss";
import HeaderImg from "../../../src/cto.svg";
import { Link } from "react-router-dom";

import Button from "../../Resuable-comps/button";
class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="home__main-heading">
          <Logo />
          <h1 className="home__heading">
            Hey! Welcome.<span>I'm Sri Sai Kamal</span>
          </h1>
          <p className="home__para">
            Hi, I'm Kamal from India. I'm a Front-End developer and I work with
            React Js and Node.js. I'm choosing my path towards Full stack
            development.
          </p>
          <Link to="/projects">
            <Button name="Learn more" />
          </Link>
        </div>
        <div className="home__img">
          <img src={HeaderImg} alt="HeaderImg" />
        </div>
      </section>
    );
  }
}
export default Home;
