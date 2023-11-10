import '../../assets/sponsors/App.css';


function Card(props) {
    return (
        <div className="sponsors-article-content">
            <div className={props.class}>
                <h3 className="sponsors-article-title">{props.title}</h3>
                <img src={props.image} alt={props.imageAlt} width={400} className="sponsors-image" />
            </div>
        </div>
    );

}


export default Card;