import VideoCard from "../../UI/VideoCard";
import "./index.css";

function VideoDisplay({news,title}) {

    return (  
        <div className="video-display-container">    
        <div className="video-display-sub-container">
          {news.map((info,index)=>{
              return <VideoCard {...info} key={index} />
            })}

        </div>
    </div>
    );
}

export default VideoDisplay;