import Card from "../../UI/Card";
import "./index.css"

function Banner({premium,latest,image,title,content}) {


    return ( 
        <div className="banner-container">

            <div className="banner-left">
                <h2>Premium</h2>

               {premium.map((news,index)=>{
                return(
                    <Card {...news} key={index} />
                )
               })}


            </div>

            <div className="banner-center">
              <h3>
              {title}
              </h3>
              <p>
                {content}
              </p>
              <img src={image} alt="banner-image" />
            </div>

            <div className="banner-right">
               <h2>Latest News</h2>
               
               {latest.map((news,index)=>{
                return(
                    <Card {...news} key={index} />
                )
               })}
            </div>
            
        </div>
     );
}

export default Banner;