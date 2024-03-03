// MainSlider.jsx
import React from "react";
import { IonIcon } from "@ionic/react";
import "./Slider.css"; // Import your CSS file
import Mun from "../../../assets/main_page/images/un.jpg";
import Yuvaan from "../../../assets/main_page/images/yuvaan.png";
import Sponsors from "../../../assets/main_page/images/sponsor.png";
import Teams from "../../../assets/main_page/images/teams.png";
import Events from "../../../assets/main_page/images/events.png";

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
                  //backgroundSize: "contain",
                  backgroundPosition: "center center",
                }}
              >
                <div className="content">
                  <h2 className="title">"MUN"</h2>
                  <p className="description">
                    {" "}
                    Yuvaan MUN provides a vibrant platform for students to hone
                    their diplomatic skills through engaging debates and
                    negotiations. It fosters leadership and critical thinking,
                    shaping tomorrow's global leaders.{" "}
                  </p>
                  <a href="https://georgerahul24.github.io/MUN-Website-2024/">
                    <button>View</button>
                  </a>
                </div>
              </li>
              <li
                className="item"
                style={{
                  backgroundImage: `url(${Yuvaan})`,
                  //backgroundSize: "contain",
                  backgroundPosition: "center center",
                }}
              >
                <div className="content">
                  <h2 className="title">"Yuvaan"</h2>
                  <p className="description">
                    {" "}
                    Enter Yuvaan, IIIT Guwahati's cultural extravaganza, where
                    the ordinary transcends into the extraordinary, igniting
                    passions, fostering creativity, and celebrating the
                    kaleidoscope of human expression.{" "}
                  </p>
                  <a href="#">
                    <button>View</button>
                  </a>
                </div>
              </li>
              <li
                className="item"
                style={{
                  backgroundImage: `url(${Sponsors})`,
                  //backgroundSize: "contain",
                  backgroundPosition: "center center",
                }}
              >
                <div className="content">
                  <h2 className="title">"Sponsors"</h2>
                  <p className="description">
                    {" "}
                    Sponsors are Yuvaan's Gringotts, safeguarding its magic.
                    Their support brings dreams to life, making Yuvaan an
                    unforgettable experience. Yuvaan, with sponsors, truly
                    extraordinary!{" "}
                  </p>
                  <a href="#/sponsors">
                    <button>View</button>
                  </a>
                </div>
              </li>
              <li
                className="item"
                style={{
                  backgroundImage: `url(${Teams})`,
                  //backgroundSize: "contain",
                  backgroundPosition: "center center",
                }}
              >
                <div className="content">
                  <h2 className="title">"Teams"</h2>
                  <p className="description">
                    {" "}
                    Yuvaan's teams, a vibrant mix of talent and dedication, join
                    forces to create an awe-inspiring cultural event. Together,
                    they inspire with their creativity, innovation, and unity.
                    Yuvaan, assemble!{" "}
                  </p>
                  <a href="#/teams">
                    <button>View</button>
                  </a>
                </div>
              </li>
              <li
                className="item"
                style={{
                  backgroundImage: `url(${Events})`,
                  //backgroundSize: "contain",
                  backgroundPosition: "center center",
                }}
              >
                <div className="content">
                  <h2 className="title">"Events"</h2>
                  <p className="description">
                    {" "}
                    Dive into Yuvaan's events, where cool beats collide with
                    mystical vibes. From electrifying dance-offs to soulful
                    poetry jams and mesmerizing music sets, it's a
                    fantasy-filled adventure you won't want to miss.{" "}
                  </p>
                  <a href="#/events">
                    <button>View</button>
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
