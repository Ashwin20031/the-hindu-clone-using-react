import "./index.css"

function Card({title,content}) {
    return (  
        <div className="card-container">
           <h3>{title}</h3>
           <p>{content}</p>
        </div>
    );
}

export default Card;