import React from "react";

import "./style.css"; // Make sure to create a CSS file for your component styles

////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";
// import "./style.css"

const Book = ({ imageSrc, title, ribbon, teamSlug }) => (
  <figure className="tp-book">
    {/* Front */}
    <ul className="tp-hardcover_front">
      <li>
        <img src={imageSrc} alt="" width="100%" height="100%" />
        {ribbon && <span className={`tp-ribbon ${ribbon}`}>{ribbon}</span>}
      </li>
      <li></li>
    </ul>
    {/* Pages */}
    <ul className="tp-page">
      <li></li>
      <li>
        <Link className="tp-btn" to={`/teams/${teamSlug}`}>
          View Team
        </Link>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    {/* Back */}
    <ul className="tp-hardcover_back">
      <li></li>
      <li></li>
    </ul>
    <ul className="tp-book_spine">
      <li></li>
      <li></li>
    </ul>
    <figcaption>
      <h1 className="tp-team-heading" style={{ color: "white"}}>{title}</h1>
    </figcaption>
  </figure>
);

const Flipbook = () => (
  <div className="tp-component">
    <ul className="tp-align">
      <li>
        <Book
          imageSrc="https://d1y50e2lm5xcwm.cloudfront.net/Team/gallery/Facult%20Advisors.jpg"
          title="Faculty Advisors"
          teamSlug="faculty-advisors"
        />
      </li>
      <li>
        <Book
          imageSrc="https://d1y50e2lm5xcwm.cloudfront.net/Team/gallery/SGC.jpg"
          title="Student Gymkhana Council"
          teamSlug="student-gymkhana-council"
        />
      </li>
      {/* Book 1 */}
      <li>
        <Book
          imageSrc="https://d1y50e2lm5xcwm.cloudfront.net/Team/gallery/Tech.jpg"
          title="Web And Creatives"
          teamSlug="web-creatives"
        />
      </li>
      <li>
        <Book
          imageSrc="https://d1y50e2lm5xcwm.cloudfront.net/Team/gallery/EM.jpg"
          title="Event Management"
          teamSlug="event-management"
        />
      </li>
      {/* Book 2 */}
      <li>
        <Book
          imageSrc="https://d1y50e2lm5xcwm.cloudfront.net/Team/gallery/PR.jpg"
          title="Public Relations"
          teamSlug="public-relation"
        />
      </li>
      {/* Book 3 */}
      <li>
        <Book imageSrc="https://d1y50e2lm5xcwm.cloudfront.net/Team/gallery/Sp.jpg" 
        title="Sponsorship"
        teamSlug="sponsorship" />
      </li>
      <li>
        <Book
          imageSrc="https://d1y50e2lm5xcwm.cloudfront.net/Team/gallery/MnP.jpg"
          title="Media And Publicity"
          teamSlug="media-publicity"
        />
      </li>
    </ul>
  </div>
);

export default Flipbook;
