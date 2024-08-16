import "./index.css"

function Button({title,bgcolor="brown",color="white"}) {
    return ( 
        <button  className="button-container" style={{backgroundColor:bgcolor,color:color}}>
            {title}
        </button>
     );
}

export default Button;