import "/src/assets/events/Map.css";

const mapData = [
  { time: "11:30am", event: "Treasure Hunt" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
  { time: "11:30am", event: "Face Painting" },
];

const MapItems = () => {
  return (
    <>
      <ul id="events-map-ul1">
        {mapData.map((item, index) => (
          <li key={index} id="events-map-l">
            <span className="events-map-span">X</span>
            <span>{item.time}</span>
            <div>{item.event}</div>
          </li>
        ))}
      </ul>
      <ul id="events-map-ul2">
        {mapData.map((item, index) => (
          <li key={index} id="events-map-l2">
            <div>{item.event}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MapItems;
