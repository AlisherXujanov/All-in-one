// npm install react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./style.scss";

function CarouselComponent(props) {
    return (
        <section className="carousel-wrapper">
            <div className="carousel-inner-wrapper">
                { props.children }
            </div>
            <Carousel
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
            >
                {
                    // JSX syntax
                    props.images.map((img, idx) => {
                        return (
                            <div key={idx}>
                                <img src={img} alt={img + "-img"} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </section>
    );
}

export default CarouselComponent;

