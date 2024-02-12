import React from "react";
import "/src/assets/contact/contact.css";
import contactHeadImg from "/src/assets/contact/images/contact.png";
import hrImg from "/src/assets/contact/images/decorator-hr-lg.png";
import brImg from "/src/assets/contact/images/decorator-br.png";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="background-witcher">
        <div className="container-witcher">
          <div className="container-fluid header-witcher">
            <img id="contact-head" src={contactHeadImg} alt="contact-heading" />

            <img id="hr" src={hrImg} alt="Hr-Ruler" />
          </div>
          <div className="screen-witcher">
            {/* <div className="screen-header-witcher">
              <div className="screen-header-left-witcher">
                <div className="screen-header-button-witcher close-witcher"></div>
                <div className="screen-header-button-witcher maximize-witcher"></div>
                <div className="screen-header-button-witcher minimize-witcher"></div>
              </div>
              <div className="screen-header-right-witcher">
                <div className="screen-header-ellipsis-witcher"></div>
                <div className="screen-header-ellipsis-witcher"></div>
                <div className="screen-header-ellipsis-witcher"></div>
              </div>
            </div> */}

            <div className="screen-body-witcher">
              <div className="screen-body-item-witcher left-witcher">
                <div className="app-title-witcher">
                  <span>Team Yuvaan</span>
                </div>
                <div className="app-contact-witcher">
                  <h1 className="team-header">
                    Media & Publicity <span className="span-emoji"></span>
                  </h1>
                  <h2>
                    <span className="heads-name">Roshan Raj :</span>
                    <span className="heads-contact"> 97715 29248</span>
                  </h2>
                  <h2>
                    <span className="heads-name">Sunny Mallik :</span>
                    <span></span>81086 39641
                  </h2>
                </div>
                <div className="app-contact-witcher">
                  <h1 className="team-header">
                    Public Relations <span className="span-emoji"></span>
                  </h1>
                  <h2>
                    <span className="heads-name">Tashyab Raj :</span> <span></span>93342
                    82666
                  </h2>
                  <h2>
                    <span className="heads-name">Prateek :</span> <span></span> 83510 81196
                  </h2>
                </div>
              </div>
              <div className="screen-body-item-witcher">
                <div>
                  <a
                    href="https://instagram.com/yuvaan_iiitg?igshid=OGQ5ZDc2ODk2ZA=="
                    target="_blank"
                  >
                    <i
                      className="font-text fa-brands fa-instagram"
                      style={{ color: "#f0e88e" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100089883182489&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <i
                      className="font-text fa-brands fa-facebook"
                      style={{ color: "#f0e88e" }}
                    ></i>
                  </a>
                  <a
                    href="https://youtube.com/@yuvaaniiitg1478?feature=shared"
                    target="_blank"
                  >
                    <i
                      className="font-text fa-brands fa-youtube"
                      style={{ color: "#f0e88e" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/yuvaaniiitg/"
                    target="_blank"
                  >
                    <i
                      className="font-text fa-brands fa-linkedin"
                      style={{ color: "#f0e88e" }}
                    ></i>
                  </a>
                  <a href="mailto:yuvaan@iiitg.ac.in" target="_blank">
                    <i
                      className="font-text fa-solid fa-envelope"
                      style={{ color: "#f0e88e" }}
                    ></i>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/HDoNK72bgKrZncbs5"
                    target="_blank"
                  >
                    <i
                      className="font-text fa-solid fa-location-dot"
                      style={{ color: "#f0e88e" }}
                    ></i>
                  </a>
                </div>
                <div className="app-contact-witcher">
                  <h1 className="team-header">
                    Event Management <span className="span-emoji"></span>
                  </h1>
                  <h2>
                    <span className="heads-name">Rallabandi Sindhu :</span>
                    <span></span>91002 71716
                  </h2>
                  <h2>
                    <span className="heads-name">Shreya Gupta :</span> 6284 400
                    235
                  </h2>
                </div>
                <div className="app-contact-witcher">
                  <h1 className="team-header">
                    Sponsorship <span className="span-emoji"></span>
                  </h1>
                  <h2>
                    <span className="heads-name">Navya Dhawde :</span> 97550
                    77877
                  </h2>
                  <h2>
                    <span className="heads-name">Pulkit Bharti :</span> 63880 35
                    327
                  </h2>
                </div>
              </div>
              {/* <div className="app-form-witcher">
                  <div className="app-form-group-witcher">
                    <input
                      className="app-form-control-witcher"
                      placeholder="NAME"
                    />
                  </div>
                  <div className="app-form-group-witcher">
                    <input
                      className="app-form-control-witcher"
                      placeholder="EMAIL"
                    />
                  </div>
                  <div className="app-form-group-witcher">
                    <input
                      className="app-form-control-witcher"
                      placeholder="CONTACT NO"
                    />
                  </div>
                  <div className="app-form-group-witcher message-witcher">
                    <input
                      className="app-form-control-witcher"
                      placeholder="MESSAGE"
                    />
                  </div>
                  <div className="app-form-group-witcher buttons-witcher">
                    <button
                      className="app-form-button-witcher"
                      onClick={() =>
                        (window.location.href = "mailto:yuvaan@iiitg.ac.in")
                      }
                    >
                      SEND
                    </button>
                  </div>
                </div> */}
            </div>
          </div>
          <div className="container-fluid credits-witcher">
            <img id="br" src={brImg} alt="Hr-Ruler" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
