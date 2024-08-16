import { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import ImageBox from '../../UI/ImageBox';
import "./index.css"

export default function CardSlider({ news }) {

    const [slider, setSlider] = useState([]);
    
    useEffect(()=>{
        setSlider(news)
    },[news])

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const newsTemplate = (product) => {
        return (
            <ImageBox {...product} />
        );
    };

    return (
        <div className="card-slider-container">
            <Carousel value={slider} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions} circular itemTemplate={newsTemplate} />
        </div>
    );
}
