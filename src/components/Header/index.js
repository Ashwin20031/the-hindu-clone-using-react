import Button from "../../UI/Button";
import "./index.css";


function Header() {

    const links = ["India", "World", "Movies", "Technology", "e-Paper"];
    const btns = [
        {
            title: "SUBCRIBE",
            bgcolor: "brown",
            color: "white"
        },
        {
            title: "LOGIN",
            bgcolor: "white",
            color: "brown"
        },
    ]

    return (
        <div className="header-container" id="top">

            <nav className="header-nav-container">
                <div className="navbar-left">
                    <h1>THE HINDU</h1>
                    <ul>
                        {links.map((link, index) => {
                            return (
                                <li key={index}><a href="#top">{link}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="navbar-right">
                    <a>FREE TRIAL</a>
                   {btns.map((btn,index)=>{
                    return(
                        <Button {...btn} key={index} />
                    )
                   })}
                </div>
            </nav>
        </div>
    );
}

export default Header;