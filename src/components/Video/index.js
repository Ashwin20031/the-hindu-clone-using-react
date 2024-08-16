import { missed } from "../../utils/constant";
import VideoDisplay from "../VideoDisplay";
import "./index.css"


function Video() {


    return ( 
        <div className="video-container">

     <iframe width="914" height="514" src="https://www.youtube.com/embed/7Obdj46I36c" title="ABC World News Tonight with David Muir Full Broadcast - Aug. 13, 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     <div className="video-lister">
     <VideoDisplay  news={missed}  />

     </div>
        </div>

     );
}

export default Video;