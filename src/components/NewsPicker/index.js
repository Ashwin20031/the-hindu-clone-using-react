import { useState } from "react";
import Display from "../Display";
import "./index.css";

function NewsPicker({news,title}) {

  const [state,setState]=useState(news[0]?.tamilNaduNews)
  const [index,setIndex]=useState(0)


    return ( 
        <div className="news-picker">
          <h2>{title}</h2>
            <div className="news-switch">
              <button  className={index===0?"active":""}
              onClick={()=>{
                setIndex(0)
                setState(news[0].tamilNaduNews)
              }}
              >TAMIL NADU </button>/
              <button className={index===1?"active":""}
                     onClick={()=>{
                      setIndex(1)
                      setState(news[1]?.karnatakaNews)
                    }}
              >KARNATAKA </button>/
              <button  className={index===2?"active":""}
                     onClick={()=>{
                      setIndex(2)
                      setState(news[2].keralaNews)
                    }}
              >KERALA </button>
            </div>
            <Display  news={state} title={""}/>
        </div>
     );
}

export default NewsPicker;