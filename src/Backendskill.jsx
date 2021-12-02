const Backendskill = () => {
  return (
    <div className="skill_page">
      <div className="backend_div">
        <h1 className=" p__color skillend">Backend</h1>
        <div className="skill_images_div">
          <div className="skill_item">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt=""
              className="skill_img"
            />
            <p>MongoDb</p>
          </div>

          <div className="skill_item">
            <img
              src="https://abhishek-mukade.vercel.app/images/icons/expressjs.svg"
              alt=""
              className="skill_img"
            />
            <p>Express</p>
          </div>
          <div className="skill_item">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt=""
              className="skill_img"
            />
            <p>Nodejs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backendskill;
