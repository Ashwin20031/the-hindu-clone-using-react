import ImageCard from "../../UI/ImageCard";
import "./index.css";

function Display({news,title}) {

    return (  
        <div className="display-container">    
        <h2 style={{textAlign:"center"}}>{title}</h2>
        <div className="display-sub-container">
          {news.map((info,index)=>{
              return <ImageCard {...info} key={index} />
            })}

        </div>
    </div>
    );
}

export default Display;