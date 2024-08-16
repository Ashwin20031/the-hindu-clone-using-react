import { PrimeReactProvider } from 'primereact/api';
import { info, foods, missed ,newsSlider,stateNews, premium} from './utils/constant';
import Banner from './components/Banner';
import Display from './components/Display';
import Footer from './components/Footer';
import Header from './components/Header/index';
import Video from './components/Video';
import CardSlider from './components/CardSlider';
import './App.css';
import Article from './components/Ariticle';
import NewsPicker from './components/NewsPicker';


function App() {

    return (
        <PrimeReactProvider>

            <div>
                <Header />
                <Banner 
                premium={premium} 
                latest={premium} 
                image={"https://th-i.thgim.com/public/incoming/97riqb/article68530342.ece/alternates/LANDSCAPE_960/20240815445L.jpg"}
                title={"IMA announces 24-hour closure of several services from 6 a.m. tomorrow"}
                content={"Out-patient departments will not function and elective surgeries will not be conducted; essential services will be maintained and casualty wards operational, the medical body said"}
                 />
                
                <Video />
                <Display news={info} title={"The Hindu Opinion"} />
                <CardSlider news={newsSlider}/>
                <Display news={foods} title={"Food"} />
                <Article bgImage={"https://th-i.thgim.com/public/incoming/y6z8vu/article68515622.ece/alternates/LANDSCAPE_1200/HP9294.JPG"} title={"The Fate of Bengal"} category={"CHILDREN"}/>
                <NewsPicker  news={stateNews} title={"States Update"}/>
                <Display news={missed} title={"In Case You Missed It"} />
                <Footer />

            </div>
        </PrimeReactProvider>

    );
}

export default App;
