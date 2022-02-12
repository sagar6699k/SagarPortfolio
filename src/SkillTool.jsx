import styled from "styled-components";

import { FaHtml5 } from "react-icons/fa";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiPostman,
  SiMaterialui,
} from "react-icons/si";

export const SkillTool = () => {

     //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });


  return (
    <Skill id="Skill">
        <h1 className="main_heading">Tools & Skills</h1>
      <div>
        <h3 className="skill_heading">FRONT-END</h3>
        <div className="container1">
          <Card>
            {/* <FaHtml5 className="img" /> */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt=""
              className="skill_images"
            />
            
          </Card>
          <Card>
            {/* <SiCss3 className="img" /> */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt=""
              className="skill_images"
            />
           
          </Card>
          <Card>
            {/* <SiJavascript className="img" /> */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt=""
              className="skill_images"
            />
            
          </Card>
          <Card>
            {/* <SiReact className="img" /> */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt=""
              className="skill_images"
            />
            
          </Card>
          <Card>
            {/* <SiRedux className="img" /> */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt=""
              className="skill_images"
            />
            
          </Card>
        </div>
      </div>
      <div>
        <h3 className="skill_heading">BACK-END</h3>
        <div className="container1">
          <Card>
            {/* <SiNodedotjs className="img" /> */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt=""
              className="skill_images"
            />
          </Card>
          <Card>
            {/* <SiMongodb className="img" /> */}
            <img
              src="https://abhishek-mukade.vercel.app/images/icons/expressjs.svg"
              alt=""
              className="skill_images"
            />
          </Card>
          <Card>
            {/* <SiExpress className="img" /> */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt=""
              className="skill_images"
            />
          </Card>
          <Card>
            <img
              src="https://profilinator.rishav.dev/skills-assets/redis-original-wordmark.svg"
              alt=""
              className="skill_images"
            />
          </Card>
        </div>
      </div>
      <div>
        <h3 className="skill_heading">OTHERS</h3>
        <div className="container1">
          <Card>
          <img
              src="https://img.icons8.com/fluency/96/000000/github.png"
              alt=""
              className="skill_images"
            />
          </Card>
          <Card>
          <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt=""
              className="skill_images"
            />
          </Card>
          <Card>
          <img
              src="https://profilinator.rishav.dev/skills-assets/python-original.svg"
              alt=""
              className="skill_images"
            />
          </Card>
        
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



    </Skill>
  );
};

const Skill = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Bangers&family=Comforter+Brush&family=Dancing+Script:wght@500&family=Fredoka+One&family=Praise&family=Raleway:wght@200&family=Roboto&family=Suravaram&display=swap");
  width: 100%;
  height: inherit;
  padding-bottom: 30px;
  background: #191919;
  div {
    font-family: "Roboto", sans-serif;
    padding: 5px 10px 5px 10px;
    color: #6e85b2;
   
  }
  .main_heading{
      font-size:60px;
      text-align:center;
      padding-top:50px;
  }
  .container1 {
    width: 60%;
    margin: 1px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .skill_heading{
      text-align: center;
      margin-top: 60px;
      margin-bottom: 10px;
  }

  
  @media screen and (max-width: 850px) {
    width: 100%;
    height: inherit;
    padding-bottom: 20px;
    padding-top: 10px;
    .container1 {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
    div {
      font-family: "Roboto", sans-serif;
      padding: 0px 0px 0px 0px;
      color: #F9004D;
      margin: 8px 5px 8px 5px;
      /* flex: 1 0; */
    }
  }
`;

const Card = styled.div`
  width: 125px;
  height: 130px;
  border-radius: 10px;
  transition: 0.4s;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    background-image: linear-gradient( 
90deg,#f61b10,#ef0963);
    border: 1px solid #F9004D;
  }
  .img {
    width: 100px;
    height: 100px;
    justify-content: center;
    padding-top: 10px;
    color: #F9004D;
    font-weight:normal;
  }

 
  //
  @media screen and (max-width: 850px) {
    width: 100px;
    height: 100px;
    border: 1px solid ##F9004D;
    border-radius: 5px;
    transition: 0.6s;
    &:hover {
      transform: scale3d(1.02, 1.02, 1.02);
    }
    .img {
      width: 80px;
      color: #F9004D;
      height: 80px;
      justify-content: center;
      padding-top: 10px;
    }
  }
`;