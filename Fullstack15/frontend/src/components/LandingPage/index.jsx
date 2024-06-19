import About from "./About"
import OurValues from "./OurValues"
import OurTeam from "./OurTeam"
import CarouselComponent from "../common/CarouselComponent"
import "./style.scss"

import CaruselImage1 from '../../assets/images/carousel/Блокчейн.png'
import CaruselImage2 from '../../assets/images/carousel/Венчурный.png'
import CaruselImage3 from '../../assets/images/carousel/Кастам.png'
import CaruselImage4 from '../../assets/images/carousel/Сукук.png'
import CaruselImage5 from '../../assets/images/carousel/Хэдж.png'

function LandingPage() {
    const imgs = [CaruselImage1, CaruselImage2, CaruselImage3, CaruselImage4, CaruselImage5]

    return (
        <main className="landing-page-main-wrapper">
            <div className="carousel-wrapper">
                <CarouselComponent images={imgs}>
                    <h1>Хедж-фонд</h1>
                    <p>Классический выбор профессиональных инвесторов с заданными умеренными параметрами риска. Основан на инвестировании в бумаги индекса S&P 500 с диверсификацией по 11 секторам экономики.</p>
                    <button className="btn btn-warning">Подробнее</button>
                </CarouselComponent>
            </div>

            <div className="about-wrapper">
                <About />
            </div>
            <div className="our-values-wrapper">
                <OurValues />
            </div>
            <div className="our-team-wrapper">
                <OurTeam />
            </div>
        </main>
    );
}

export default LandingPage;