import "./index.css"

function VideoCard({imgUrl,title}) {
    return (  
        <div className="video-card-container">
           <img src={imgUrl} alt="content" />
           <p>{title}</p>

        </div>
    );
}

export default VideoCard;