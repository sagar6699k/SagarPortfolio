import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

import { Route } from "react-router-dom";
import Skill from "./Skill"
import Backendskill from "./Backendskill";
import Database from "./Database";
import Language from "./Language";
import Technology from "./Technology";


function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src="https://bhavya.dev/assets/programmer2.svg" alt="" className="about__img" />
            {/* <img src={aboutImg} alt="" className="about__img" /> */}
          </div>
          <div className="col__2">
            <h1 className="about__heading">Skills</h1>
            <div className="about__meta">  
            
              <br />
              <div className="about__navbar">
                <Link className="skill_link" to="/">Frontend</Link>
                <Link className="skill_link" to="/backend">Backend</Link>
                <Link className="skill_link" to="/database">Database</Link>
                <Link className="skill_link" to="/language">Languages</Link>
                <Link className="skill_link" to="/tech">Tools</Link>
              </div>

              <Route exact path="/">
                <Skill />
              </Route>

              <Route path="/backend">
                <Backendskill />
              </Route>

              <Route path="/database">
                <Database/>
              </Route>

              <Route path="/language">
                <Language/>
              </Route>

              <Route path="/tech">
                <Technology/>
              </Route>

              <div id="awards" className="awards__div"></div>

              <div id="experience" className="experience__div"></div>

              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/14Y67z3KJuYtgkF3ny9YG9Td8OFLlTEuO/view?usp=sharing">
                  <button className="about btn pointer">Download CV</button>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
