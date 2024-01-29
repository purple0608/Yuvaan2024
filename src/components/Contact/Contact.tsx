import React from "react";
import "/src/assets/contact/contact.css";
import contact_us from "../../assets/contact/images/contact.png";
import divider from "/src/assets/contact/images/decorator-hr-lg.png";
import bottom_divider from "/src/assets/contact/images/decorator-br.png";

// import { react } from 'react'
// import "/src/assets/contact/contact.css";
// import Navbar from "../Navbar/Navbar";

export default function Contact() {
  return (
      //  <Navbar className={isClicked ? "navbar" : "navbar"} />
    <div id="top_div">
      <img
        id="contact-head"
        src="/src/assets/contact/images/contact-head-lg.png"
        alt="contact-heading"
      />
      
      <img
        id="hr"
        src="/src/assets/contact/images/decorator-hr-lg.png"
        alt="Hr-Ruler"
      />

      <div className="row">
        <div className="container-vasu card_l col-lg-6 col-md-6 col-sm-10">
          {" "}
          <form className="form-vasu vasu">
            <h2 className="h2-vasu my-4">Team Yuvaan</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.5414847605402!2d91.55941587552647!3d26.08123727715258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5987e09da847%3A0xfc90e6da1b4547c1!2sIndian%20Institute%20of%20Information%20Technology%20Guwahati%20(IIITG)!5e0!3m2!1sen!2sin!4v1701586239868!5m2!1sen!2sin"
              width="250"
              height="160"
              style={{ border: "0", borderRadius: "8px", margin: "20px 0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
          </form>
          <div className="drops-vasu">
            <div className="drop-vasu drop-vasu-1"></div>
            <div className="drop-vasu drop-vasu-2"></div>
            <div className="drop-vasu drop-vasu-3"></div>
            <div className="drop-vasu drop-vasu-4"></div>
            <div className="drop-vasu drop-vasu-5"></div>
          </div>
        </div>
        <div className="container-vasu card_r col-lg-6 col-md-6 col-sm-10 order-lg-2 order-md-2 order-sm-2">
          <form className="form-vasu vasu">
            <h2 className="h2-vasu my-4">Send Us Your Query</h2>
            <br />
            <input type="text" placeholder="Name" className="vasu my-2" />
            <br />
            <input type="email" placeholder="Mail" className="vasu my-2" />
            <br />
            {/* <label htmlFor={'message'}>Your Message:</label> */}
            <textarea
              className="vasu my-2"
              id="message"
              name="message"
              rows={8}
              cols={32}
              placeholder="Type your message here..."
            ></textarea>
            <br />
            <input type="button" value="Send" className="vasu" />
            <br />
          </form>

          <div className="drop-vasu">
            <div className="drop-vasu drop-vasu-6"></div>
            <div className="drop-vasu drop-vasu-7"></div>
            <div className="drop-vasu drop-vasu-8"></div>
            <div className="drop-vasu drop-vasu-9"></div>
            <div className="drop-vasu drop-vasu-10"></div>
          </div>
        </div>
      </div>

      <img
        id="br"
        src="/src/assets/contact/images/decorator-br.png"
        alt="Hr-Ruler"
      />
    </div>
  );
}
