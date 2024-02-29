import "../../assets/sponsors/App.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function Card(props) {
  return (
    <div className="sponsors-icon">

      <div className="sponsors-article-content">
        <a href={props.url}>
          <img
            src={props.image}
            alt={props.imageAlt}
            width={300}
            height={210}
            className="sponsors-image"
          />
        </a>
      </div >
      <div  >
        {props.head && (
          <div className="sponsors-icon-container">
            <a id="sponsors-myAnchor" href={props.insta}><InstagramIcon /></a>
            <a id="sponsors-myAnchor" href={props.facebook}><FacebookIcon /></a>
            <a id="sponsors-myAnchor" href={props.twitter}><XIcon /></a>
          </div>
        )}
      </div>
      <div>
        {props.name && (
          <h1>{props.name}</h1>
        )}
      </div>

    </div>
  );
}

export default Card;