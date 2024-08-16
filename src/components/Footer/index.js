import { business, cities, contact, groupNewsSites, opinion, otherProducts, popularSections, sciTech, sport, states, theHindu, trendingOnGroupSites, trendingOnTheHindu } from "../../utils/constant";
import "./index.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <p style={{fontSize:"3rem"}}>THE HINDU</p>
        <div className="flex-row">
          <img src="https://www.thehindu.com/theme/images/th-online/google-playstore-icon.svg" alt="google"/>
          <img src="https://www.thehindu.com/theme/images/th-online//apple-store-icon.svg"  alt="apple"/>
        </div>
      </div>
      <div className="footer-bottom"
      >
        <section>
          <div className="flex-col">
            <h3>The Hindu</h3>
            {theHindu.map((link, index) => <p key={index}>{link}</p>)}
          </div>
          <div className="flex-col">
            <h3>Contact Us</h3>
            {contact.map((link, index) => <p key={index}>{link}</p>)}
          </div>
          <div className="flex-col">
            <h3>Group New Sites</h3>
            {groupNewsSites.map((link, index) => <p key={index}>{link}</p>)}
          </div>
        </section>

        <section>
          <div className="flex-col">
            <h3>Other Products</h3>
            {otherProducts.map((link, index) => <p key={index}>{link}</p>)}
          </div>
          <div className="flex-col">
            <h3>Popular Section</h3>
            {popularSections.map((link, index) => <p key={index}>{link}</p>)}
          </div>
          <div className="flex-col">
            <h3>Opinion</h3>
            {opinion.map((link, index) => <p key={index}>{link}</p>)}
          </div>
        </section>   


        <section>
          <div className="flex-col">
            <h3>Business</h3>
            {business.map((link, index) => <p key={index}>{link}</p>)}
          </div>
          <div className="flex-col">
            <h3>Sport</h3>
            {sport.map((link, index) => <p key={index}>{link}</p>)}
          </div>
          <div className="flex-col">
            <h3>Sci-Tech</h3>
            {sciTech.map((link, index) => <p key={index}>{link}</p>)}
          </div>
        </section>              
        <section>
          <div className="flex-col">
            <h3>States</h3>
            {states.map((link, index) => <p key={index}>{link}</p>)}
          </div>
          <div className="flex-col">
            <h3>Cities</h3>
            {cities.map((link, index) => <p key={index}>{link}</p>)}
          </div>
 
        </section>    

  <section>
          <div className="flex-col">
            <h3>Trending on the Hindu</h3>
            {trendingOnTheHindu.map((link, index) => <p key={index}>{link}&nbsp;<span style={{color:"brown"}}>&#x2197;</span></p>)}
          </div>
       
        </section>             
  <section>
          <div className="flex-col">
            <h3>Trending on Group Sites</h3>
            {trendingOnGroupSites.map((link, index) => <p key={index}>{link}&nbsp;<span style={{color:"brown"}}>&#x2197;</span></p>)}
          </div>
       
        </section>             
      </div>
      <div className="flex-col" style={{fontSize:"0.8rem"}}>
      <p>This is a clone site for educational study purpose  </p>
      </div>
    </div>
  );
}

export default Footer;