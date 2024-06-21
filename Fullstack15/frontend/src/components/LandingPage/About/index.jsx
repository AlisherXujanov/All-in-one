import Heading from "../../common/Heading"
import AboutImg from "../../../assets/images/about_img.png"
import Lycence from "../../../assets/icons/lycence.png"
import './style.scss'


function About(props) {
    return (
        <div className="about-section">
            <Heading size={2}  title="О нас" />
            
            <div className="about-content">
                <img className="about-page-image" src={AboutImg} alt="About us" />
                <div className="info">
                    <p>Наша Команда успешно осуществляет деятельность на нескольких рынках инвестиций. Богатство выбора инструментов этих рынков позволяет Нам успешно сохранять и преумножать капитал клиентов. </p>
                    <p>Вступить в партнерство с Fonte могут как профессиональные инвестора, так и частные лица, только начинающие открывать для себя новые перспективы. Наша юрисдикция - Международный финансовый центр «Астана» (МФЦА). Комфортные налоговые условия и регуляторные политики обеспечивают необходимые свободы и преимущества для достижения целей инвестиций. </p>
                    <p>В партнерстве с Fonte Capital LTD, инвесторы имеют возможность воспользоваться не только проверенными стратегиями, но и смогут совместно разработать персональные инвестиционные решения.</p>
                    <button className="btn btn-warning">
                        <img src={Lycence} alt="Lycence image" /> Лицензии
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;