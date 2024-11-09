import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import caruImg1 from '../../../assets/home/01.jpg';
import caruImg2 from '../../../assets/home/02.jpg';
import caruImg3 from '../../../assets/home/03.png';
import caruImg4 from '../../../assets/home/04.jpg';
import caruImg5 from '../../../assets/home/05.png';
import caruImg6 from '../../../assets/home/06.png';
const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={caruImg1} />
            </div>
            <div>
                <img src={caruImg2} />

            </div>
            <div>
                <img src={caruImg3} />

            </div>
            <div>
                <img src={caruImg4} />
            </div>
            <div>
                <img src={caruImg5} />
            </div>
            <div>
                <img src={caruImg6} />
            </div>
        </Carousel>
    );
};

export default Banner;