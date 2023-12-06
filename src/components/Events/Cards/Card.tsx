import { EventData } from "../../../assets/events/data";
import sword from "/src/assets/events/images_cards/sword.png";
import divider from "/src/assets/utils/decorator-hr.png";
function Card(props) {
  const data: EventData = props.data;
  console.log(data);
  return (
    <div
      className="event-card"
      style={{ backgroundImage: "url(" + data.bg + ")" }}
    >
      <div className="event-titleBox">
        <p className="event-title"> {data.title} </p>
        <img className="event-sword" src={sword} alt="sword" />
      </div>
      <div className="event-grid event-description">
        <div className="event-grid-item event-logo" />
        <div className="event-grid-item event-data">
          <p className="event-desc-header"> Date </p>
          <p className="event-date">{data.date}</p>
        </div>
        <div className="event-grid-item event-logo" />
        <div className="event-grid-item event-data">
          <p className="event-desc-header"> Time </p>
          <p className="event-date">{data.time}</p>
        </div>
        <div className="event-grid-item event-logo" />
        <div className="event-grid-item event-data">
          <p className="event-desc-header"> Venue </p>
          <p className="event-date">{data.venue}</p>
        </div>
        <div className="event-grid-item event-data event-full">
          <p className="event-info">{data.info}</p>
        </div>
      </div>
      <button type="button" className="event-register-button">
        Register
      </button>
      <img src={divider} className="event-divider" alt="scroll_down" />
    </div>
  );
}

export default Card;
