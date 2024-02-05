import React from "react";
import "/src/assets/Contact/contact.css";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="background-witcher">
        <div className="container-witcher">
          <div className="container-fluid header-witcher">
            <img
              id="contact-head"
              src="/src/assets/contact/images/contact.png"
              alt="contact-heading"
            />

            <img
              id="hr"
              src="/src/assets/contact/images/decorator-hr-lg.png"
              alt="Hr-Ruler"
            />
          </div>
          <div className="screen-witcher">
            <div className="screen-header-witcher">
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
            </div>

            <div className="screen-body-witcher">
              <div className="screen-body-item-witcher left-witcher">
                <div className="app-title-witcher">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact-witcher">
                  <h2>Media & Publicity</h2>
                </div>
                <div className="app-contact-witcher">
                  Roshan Raj : 97715 29248
                </div>
                <div className="app-contact-witcher">
                  Sunny Mallik : 81086 39641
                </div>
                <div className="app-contact-witcher">
                  <h2>PR & Marketing</h2>
                </div>
                <div className="app-contact-witcher">
                  Tashyab Raj : 93342 82666
                </div>
                <div className="app-contact-witcher">Prateek : 83510 81196</div>
                <div>
                  <a href="https://instagram.com/yuvaan_iiitg?igshid=OGQ5ZDc2ODk2ZA==">
                    <i
                      className="font-text fa-brands fa-instagram"
                      style={{ color: "#f0e88e" }}
                    ></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100089883182489&mibextid=ZbWKwL">
                    <i
                      className="font-text fa-brands fa-facebook"
                      style={{ color: "#f0e88e" }}
                    ></i>
                  </a>
                  <a href="https://youtube.com/@yuvaaniiitg1478?feature=shared">
                    <i
                      className="font-text fa-brands fa-youtube"
                      style={{ color: "#f0e88e" }}
                    ></i>
                  </a>
                  <a href="https://www.linkedin.com/company/yuvaaniiitg/">
                    <i
                      className="font-text fa-brands fa-linkedin"
                      style={{ color: "#f0e88e" }}
                    ></i>
                  </a>
                  <a href="mailto:yuvaan@iiitg.ac.in">
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
              </div>
              <div className="screen-body-item-witcher">
                <div className="app-form-witcher">
                  <div className="app-form-group-witcher">
                    <input
                      className="app-form-control-witcher"
                      placeholder="NAME"
                      //   value="Krisantus Wanandi"
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
                    <button className="app-form-button-witcher">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid credits-witcher">
            <img
              id="br"
              src="/src/assets/contact/images/decorator-br.png"
              alt="Hr-Ruler"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
