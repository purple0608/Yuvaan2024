import React from "react";
import Web_Cre from "../../assets/teams/gallery/Tech.jpg";
import Event from "../../assets/teams/gallery/EM.jpg";
import Media from "../../assets/teams/gallery/MnP.jpg";
import Sponsors from "../../assets/teams/gallery/SP.jpg";
import PCR from "../../assets/teams/gallery/PR.jpg";
import faculty from "../../assets/teams/gallery/Facult Advisors.jpg";
import sgc from "../../assets/teams/gallery/SGC.jpg";
import "./style.css"; // Make sure to create a CSS file for your component styles

// const Book = ({ imageSrc, title, ribbon }) => (
//   <figure className="tp-book">
//     {/* Front */}
//     <ul className="tp-hardcover_front">
//       <li>
//         <img src={imageSrc} alt="" width="100%" height="100%" />
//         {ribbon && <span className={`tp-ribbon ${ribbon}`}>{ribbon}</span>}
//       </li>
//       <li></li>
//     </ul>
//     {/* Pages */}
//     <ul className="tp-page">
//       <li></li>
//       <li>
//         <a className="tp-btn" href="#">
//           View Team
//         </a>
//       </li>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>
//     {/* Back */}
//     <ul className="tp-hardcover_back">
//       <li></li>
//       <li></li>
//     </ul>
//     <ul className="tp-book_spine">
//       <li></li>
//       <li></li>
//     </ul>
//     <figcaption>
//       <h1 style={{ color: "white" }}>{title}</h1>
//     </figcaption>
//   </figure>
// );

// const Flipbook = () => (
//   <div className="tp-component">
//     <ul className="tp-align">
//       <li>
//         <Book
//           imageSrc="https://s.cdpn.io/13060/book1.jpg"
//           title="Faculty Advisors"
//         />
//       </li>
//       <li>
//         <Book
//           imageSrc="https://s.cdpn.io/13060/book1.jpg"
//           title="Student Gymkhana Council"
//         />
//       </li>
//       {/* Book 1 */}
//       <li>
//         <Book imageSrc={Web_Cre} title="Web And Creatives" />
//       </li>
//       <li>
//         <Book imageSrc={Event} title="Event Management" />
//       </li>
//       {/* Book 2 */}
//       <li>
//         <Book imageSrc={PCR} title="Public Relations" />
//       </li>
//       {/* Book 3 */}
//       <li>
//         <Book imageSrc={Sponsors} title="Sponsorship" />
//       </li>
//       <li>
//         <Book imageSrc={Media} title="Media And Publicity" />
//       </li>
//     </ul>
//   </div>
// );

// export default Flipbook;

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
          imageSrc={faculty}
          title="Faculty Advisors"
          teamSlug="faculty-advisors"
        />
      </li>
      <li>
        <Book
          imageSrc={sgc}
          title="Student Gymkhana Council"
          teamSlug="student-gymkhana-council"
        />
      </li>
      {/* Book 1 */}
      <li>
        <Book
          imageSrc={Web_Cre}
          title="Web And Creatives"
          teamSlug="web-creatives"
        />
      </li>
      <li>
        <Book
          imageSrc={Event}
          title="Event Management"
          teamSlug="event-management"
        />
      </li>
      {/* Book 2 */}
      <li>
        <Book
          imageSrc={PCR}
          title="Public Relations"
          teamSlug="public-relation"
        />
      </li>
      {/* Book 3 */}
      <li>
        <Book imageSrc={Sponsors} title="Sponsorship" teamSlug="sponsorship" />
      </li>
      <li>
        <Book
          imageSrc={Media}
          title="Media And Publicity"
          teamSlug="media-publicity"
        />
      </li>
    </ul>
  </div>
);

export default Flipbook;
