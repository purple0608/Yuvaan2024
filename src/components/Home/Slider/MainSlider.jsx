// MainSlider.jsx
import React from "react";
import { IonIcon } from "@ionic/react";
import "./Slider.css"; // Import your CSS file
import Mun from "../../../assets/main_page/images/MUN2.jpg";
import Yuvaan from "../../../assets/main_page/images/YUVAAN1.jpg";
import Sponsors from "../../../assets/main_page/images/SPONSORSHIPBANNER.jpg";
import Teams from "../../../assets/main_page/images/TEAMS1.jpg";
import Events from "../../../assets/main_page/images/EVENTS1.jpg";

class MainSlider extends React.Component {
  componentDidMount() {
    const slider = document.querySelector(".slider");

    function activate(e) {
      const items = document.querySelectorAll(".item");
      e.target.matches(".next") && slider.append(items[0]);
      e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
    }

    document.addEventListener("click", activate, false);

    this.cleanupFunction = () => {
      document.removeEventListener("click", activate, false);
    };
  }

  componentWillUnmount() {
    if (this.cleanupFunction) {
      this.cleanupFunction();
    }
  }

  render() {
    return (
      <>
        <div>
          <main>
            <ul className="slider">
              <li
                className="item"
                style={{
                  backgroundImage: `url(${Mun})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center center",
                }}
              >
                <div className="content">
                  <h2 className="title">"MUN"</h2>
                  <p className="description">
                    {" "}
                    Model United Nations (MUN) simulates UN sessions, allowing
                    students to represent countries, discuss global issues, and
                    develop skills in diplomacy, research, public speaking, and
                    collaboration for real-world problem-solving.{" "}
                  </p>
                  <a href="https://georgerahul24.github.io/MUN-Website-2024/">
                    <button>Read More</button>
                  </a>
                </div>
              </li>
              <li
                className="item"
                style={{
                  backgroundImage: `url(${Yuvaan})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center center",
                }}
              >
                <div className="content">
                  <h2 className="title">"Yuvaan"</h2>
                  <p className="description">
                    {" "}
                    Yuvaan Cultural Fest at IIIT Guwahati celebrates the vibrant
                    diversity of the institute through arts, music, and
                    performances, fostering cultural exchange and creative
                    expression within the student community.{" "}
                  </p>
                  <a href="#">
                    <button>Read More</button>
                  </a>
                </div>
              </li>
              <li
                className="item"
                style={{
                  backgroundImage: `url(${Sponsors})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center center",
                }}
              >
                <div className="content">
                  <h2 className="title">"Sponsors"</h2>
                  <p className="description">
                    {" "}
                    Sponsors provide essential support, either financial or
                    in-kind, for events like cultural fests. Their contributions
                    enhance the event's scale and quality, while also gaining
                    brand exposure and visibility.{" "}
                  </p>
                  <a href="#/sponsors">
                    <button>Read More</button>
                  </a>
                </div>
              </li>
              <li
                className="item"
                style={{
                  backgroundImage: `url(${Teams})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center center",
                }}
              >
                <div className="content">
                  <h2 className="title">"Teams"</h2>
                  <p className="description">
                    {" "}
                    Yuvaan teams, including Faculty Advisors, Student Gymkhana
                    Council, Web and Creatives, Event Management, Public
                    Relations, Sponsorship, and Media, collaborate to
                    orchestrate a vibrant cultural celebration at IIIT Guwahati.{" "}
                  </p>
                  <a href="#/teams">
                    <button>Read More</button>
                  </a>
                </div>
              </li>
              <li
                className="item"
                style={{
                  backgroundImage: `url(${Events})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center center",
                }}
              >
                <div className="content">
                  <h2 className="title">"Events"</h2>
                  <p className="description">
                    {" "}
                    Yuvaan Cultural Fest hosts an array of dynamic events,
                    showcasing diverse talents, cultural richness, and
                    creativity. From performances and competitions to
                    exhibitions, each event contributes to a vibrant celebration
                    of culture and expression.{" "}
                  </p>
                  <a href="#/events">
                    <button>Read More</button>
                  </a>
                </div>
              </li>
            </ul>
            <span className="nav-span">
              <IonIcon className="btn prev" name="arrow-back-outline"></IonIcon>
              <IonIcon
                className="btn next"
                name="arrow-forward-outline"
              ></IonIcon>
            </span>
          </main>
          <script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          ></script>
        </div>
      </>
    );
  }
}

export default MainSlider;
