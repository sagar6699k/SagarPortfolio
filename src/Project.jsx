import React from "react";
import "./Project.css";
// import Github from "./img/github_logo.png";
import Scavenger from "./img/scav1.png";
import YT from "./img/YT.png";
import KickStart from "./img/kickstart.png";
import weather_app from "./img/weather_app.png";
import {BsGithub} from "react-icons/bs"
import {ImBlogger2} from "react-icons/im"

function Project() {
  return (
    <div className="service component__space" id="projects">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          As a part of Construct week in Masai-school, I build some excellent projects, You can go throgh it.
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__2">
            <div className="service__box pointer">
              <div className="icon">
                <img
                  src="https://grocurv.com/media/images/Nykaa.height-480.png"
                  alt=""
                  className="project__img1"
                />
              </div>
              <div className="service__meta">
                <h1 className="service__text">Clone of Nykaa.com</h1>
                <p className="p service__text p__color">
                  Nykaa which is very popular E-Commerce website which helps
                  users to buy Cosmetics products and Beauty products online in
                  India at best prices.
                </p>
              </div>

              <div className="tech_stack">
                <h5>Tech Stack : </h5>
                <p className="p service__text p__color">
                  {" "}
                  ejs | CSS | Javascript | Express | Mongodb.
                </p>
              </div>

              <div className="project_links">
                <div className="img_link">
                 <a href="https://github.com/sagar6699k/Nykaa_with_backend">
                 < BsGithub className="github_icon"/>
                </a>
                                  
                <a href="https://nykaa6699-sagarkurewar.hashnode.dev/cloning-the-e-commerce-website-nykaacom-using-backend">
                < ImBlogger2 className="github_icon"/>
                </a>
                </div>
                
                <a href="https://clonednykaa.herokuapp.com/">
                  <button className="about btn pointer">View</button>
                </a>
              </div>
            </div>
          </div>

          
          <div className="col__2">
            <div className="service__box pointer">
              <div className="icon">
                <img src={Scavenger} alt="" className="project__img2" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  scAvengers -The E-Waste Management App
                </h1>
                <p className="p service__text p__color">
                  scAvengers is an E-waste Management Application that allows
                  users to sell e-waste scrap at any price they want. It has
                  features for users sign-in/sign-up, If users are not satisfied
                  with our price they can bargain also. Users can upload their
                  scrap photos as well as receipts.
                </p>
              </div>

              <div className="tech_stack">
                <h5>Tech Stack : </h5>
                <p className="p service__text p__color">
                ReactJS | NodeJS | Express | Mongodb | CSS
                </p>
              </div>

              <div className="project_links">
                <div className="img_link">
                  <a href="https://github.com/sagar6699k/E-wasteManagement">
                  < BsGithub className="github_icon"/>
                  </a>

                  <a href="https://medium.com/@pandeypushpendra3/scavengers-the-e-waste-management-app-afc39f79f4aa">
                  < ImBlogger2 className="github_icon"/>
                  </a>
                </div>
                <a href="https://e-waste-management.netlify.app/">
                  <button className="about btn pointer">View</button>
                </a>
              </div>
            </div>
          </div>


          <div className="col__2">
            <div className="service__box pointer">
              <div className="icon">
                <img src={KickStart} alt="" className="project__img2" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  Kickstarter-Clone
                </h1>
                <p className="p service__text p__color">
                Kickstarter is a US based crowdfunding website, where the creators will share their ideas with the communities and the communities will fund them to bring that idea to a reality.
                </p>
              </div>

              <div className="tech_stack">
                <h5>Tech Stack : </h5>
                <p className="p service__text p__color">
                ReactJS | NodeJS | Express | Mongodb | CSS
                </p>
              </div>

              <div className="project_links">
                <div className="img_link">
                  <a href="https://github.com/sagar6699k/Atom">
                  < BsGithub className="github_icon"/>
                  </a>

                  <a href="https://medium.com/@shubh.110394/kickstarter-website-development-744de3a36c56">
                  < ImBlogger2 className="github_icon"/>
                  </a>
                  
                </div>
                <a href="https://atom-client.vercel.app/">
                  <button className="about btn pointer">View</button>
                </a>
              </div>
            </div>
          </div>




          <div className="col__2">
            <div className="service__box pointer">
              <div className="icon">
                <img src={weather_app} alt="" className="project__img2" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  React Weather App
                </h1>
                <p className="p service__text p__color">
                Check real time weather of your city, just enter name of your city and you will get all the necessary information of your city.
                </p>
              </div>

              <div className="tech_stack">
                <h5>Tech Stack : </h5>
                <p className="p service__text p__color">
                ReactJS | CSS
                </p>
              </div>

              <div className="project_links">
                <div className="img_link">
                  <a href="https://github.com/sagar6699k/Weather-app">
                  < BsGithub className="github_icon"/>
                  </a>

                 
                </div>
                <a href="https://weatherapp-eta.vercel.app/">
                  <button className="about btn pointer">View</button>
                </a>
              </div>
            </div>
          </div>



          
          





        </div>
      </div>
    </div>
  );
}

export default Project;
