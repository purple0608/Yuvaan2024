import React from "react";
import Aman from "../../../assets/teams/web_cre/Aman.jpg";
import Nandini from "../../../assets/teams/web_cre/Nandini.jpg";
import Anant from "../../../assets/teams/web_cre/Anant.jpg";
import Pallav from "../../../assets/teams/web_cre/Pallav kumar.jpg";
import Piyush from "../../../assets/teams/web_cre/Piyush Upadhyay.jpg";
import Ronit from "../../../assets/teams/web_cre/Ronit Chinda.jpg";
import Saksham from "../../../assets/teams/web_cre/Saksham Jain.jpg";
import Shreya from  "../../../assets/teams/web_cre/Shreya Malik.jpg";
import Vasu from "../../../assets/teams/web_cre/Vasu Pandey.jpg";
import "../team.css"; // Make sure to import or include your CSS file

const Team = () => {
  return (
    <div>
      <div className="et-box">
      <h1 className="title" style={{color: 'white',
          textAlign: 'center'}}>Web And Creatives</h1>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={Aman}
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              AMAN <br />
              <span>Team Head</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={Nandini}
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Nandini <br />
              <span>Team Head</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={Anant}
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Anant <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={Pallav}
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Pallav Kumar <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={Piyush}
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Piyush Upadhyay <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={Ronit}
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Ronit Chinda <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={Saksham}
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Saksham Jain <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={Shreya}
              alt="some image"
              
            />
          </div>
          <div className="et-details">
            <h2>
              Shreya Malik <br />
              <span>Team Meember</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src={Vasu}
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Vasu Pandey <br />
              <span>Team Member</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src="https://images.unsplash.com/photo-1557053908-4793c484d06f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxMzk5NTF8&ixlib=rb-4.0.3&q=80&w=400"
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Rita Brown <br />
              <span>London, UK</span>
            </h2>
          </div>
        </div>

        <div className="et-card">
          <div className="et-imgBox">
            <img
              src="https://images.unsplash.com/photo-1557053908-4793c484d06f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxMzk5NTF8&ixlib=rb-4.0.3&q=80&w=400"
              alt="some image"
            />
          </div>
          <div className="et-details">
            <h2>
              Rita Brown <br />
              <span>London, UK</span>
            </h2>
          </div>
        </div>    
      </div>
    </div>
  );
};

export default Team;
