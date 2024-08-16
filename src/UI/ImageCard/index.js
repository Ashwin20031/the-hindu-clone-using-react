import "./index.css"

function ImageCard({imgUrl,title,content}) {
    return (  
        <div className="image-card-container">
           <img src={imgUrl} alt="content" />
           <h3>{title}</h3>
           <p>{content}</p>

        </div>
    );
}

export default ImageCard;