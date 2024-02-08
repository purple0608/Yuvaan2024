import "../../assets/sponsors/App.css";

function Card(props) {
  return (
    <div className="sponsors-article-content">
      <img
        src={props.image}
        alt={props.imageAlt}
        width={300}
        className="sponsors-image"
      />
    </div>
  );
}

export default Card;
