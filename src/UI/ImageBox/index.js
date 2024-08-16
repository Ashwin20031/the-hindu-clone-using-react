import "./index.css";

function ImageBox({bgimage,content}) {
    return (  
        <div className="image-box-container" style={{backgroundImage:`url(${bgimage})`}}>
           <p>{content}</p>
        </div>
    );
}

export default ImageBox;