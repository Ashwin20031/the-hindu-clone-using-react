import "./index.css";

function Article({bgImage,title,category}) {
    return ( 
        <div className="article-container" style={{backgroundImage:`url(${bgImage})`}}>
         <div className="article-content">
            <h3>
             Featured
            </h3>
            <p className="article-title">{title}</p>

            <p  style={{fontSize:"0.8rem",color:"yellow"}}>{category}</p>

            <div className="flex-row">
                <p style={{fontSize:"4rem"}}>&rarr;</p>
                <p className="article-read-more" >READ NOW</p>
            </div>
         </div>

        </div>
     );
}

export default Article;