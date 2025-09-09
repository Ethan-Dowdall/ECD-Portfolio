import './card.css'

function Card(props){
    return (
        <div className="cardContainer">
            <h3>{props.cardTitle}</h3>
            <p>{props.description}</p>
            <p>{props.imgSrc}</p>
        </div>
    )
}

export default Card;

