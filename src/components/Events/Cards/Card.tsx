import { EventData } from "../../../assets/events/data";
function Card(props) {
  const data: EventData = props.data;
  console.log(data)
  return (
    <div className="card" style={{backgroundImage:"url("+data.bg+")"}}>
      <div className="titleBox">
        <p className="title"> {data.title} </p>
        <img
          className="sword"
          src="/src/assets/events/images_cards/sword.png"
          alt="sword"
        />
      </div>
      <div className="grid description">
        <div className="grid-item logo" />
        <div className="grid-item data">
          <p className="desc-header"> Date </p>
          <p className="date">{data.date}</p>
        </div>
        <div className="grid-item logo" />
        <div className="grid-item data">
          <p className="desc-header"> Time </p>
          <p className="time">{data.time} </p>
        </div>
        <div className="grid-item logo" />
        <div className="grid-item data">
          <p className="desc-header"> Venue </p>
          <p className="venue">{data.venue}</p>
        </div>
        <div className="grid-item data full">
          <p className="info">{data.info}</p>
        </div>
      </div>
      <button type="button" className="register-button">
        Register
      </button>
      <img
        src="/src/assets/utils/decorator-hr.png"
        className="divider"
        alt="scroll_down"
      />
    </div>
  );
}

export default Card;
