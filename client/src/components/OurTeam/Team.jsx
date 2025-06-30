import "./Team.css";

const Team = () => {
  return (
    <div className="outContaierTeam">
      <h1>My Team</h1>
      <div className="TeamContainer">
        <div className="box">
          <div className="imgBox">
            <img src="/kamran.jpg" alt="Kamran Fareed" />
          </div>
          <div className="content">
            <h2>
              Kamran Fareed <br />
              <span>Full Stack Developer</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <img src="/profile.jpg" alt="Zain Ul Abideen" />
          </div>
          <div className="content">
            <h2>
              Zain Ul Abideen
              <br />
              <span>Front End Developer</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <img src="/Yawar.jpg" alt="M Yawar Ali" />
          </div>
          <div className="content">
            <h2>
              M Yawar Ali
              <br />
              <span>Back End Developer</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
