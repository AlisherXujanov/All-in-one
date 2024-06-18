import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Blockchain from "../../../assets/images/carousel/Блокчейн.png";
import Venchurniy from "../../../assets/images/carousel/Венчурный.png";
import "./style.scss";

function CarouselComponent(props) {
    return (
        <section className="carousel-wrapper">
            <Carousel autoPlay={true} showStatus={false}
                showThumbs={false} infiniteLoop={true}
            >
                <div>
                    <img src={Blockchain} alt="Blockchain" />
                </div>
                <div>
                    <img src={Venchurniy} alt="Venchurniy" />
                </div>
            </Carousel>
        </section>
    );
}

export default CarouselComponent;

