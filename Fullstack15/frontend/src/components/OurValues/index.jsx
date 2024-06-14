import Heading from "../common/Heading"
import Diamond from "../../assets/images/diamond.png"
import Birja from "../../assets/images/birja.png"
import Suitcase from "../../assets/images/suitcase.png"
import Hands from "../../assets/images/hands.png"
import "./style.scss"

function OurValues(props) {
    return (
        <div className="our-props-section">
            <Heading size={2} title={"Наши ценности"} />
            
            <div className="four-divs">

                <div className="stability">

                    <div className="left-img">
                        <img src={Diamond} alt="Diamond img" />
                    </div>

                    <div className="right-info">
                        <h2>Стабильность</h2><br />

                        <p>Сохранность капитала клиентов<br />приоритетнее доходности - каждое<br />решение взвешено, обдумано и оценено.</p>
                    </div>

                </div>

                <div className="sustainability">

                    <div className="left-img">
                        <img src={Birja} alt="Birja img" />
                    </div>

                    <div className="right-info">
                        <h2>Устойчивость</h2><br />

                        <p>Устойчивое развитие — основа нашей бизнес-модели.<br />Начиная с поиска и оценки предоставившихся<br />возможностей 
                            для бизнеса до последовательного развития<br />наших проектов и реаллокации капитала в новые<br />возможности.</p>
                    </div>

                </div>

                <div className="team">

                    <div className="left-img">
                        <img src={Suitcase} alt="Suitcase img" />
                    </div>

                    <div className="right-info">
                        <h2>Команда</h2><br />

                        <p>Команда Fonte Capital LTD – основа успеха. Каждый<br />сотрудник Компании – это ценный актив в рабочем<br />процессе фонда.
                             Наша цель – создание такой рабочей<br />атмосферы и условий, которые позволят максимально<br />раскрыть 
                             потенциал каждого сотрудника для достижения<br />максимального результата.</p>
                    </div>

                </div>

                <div className="reputation">

                    <div className="left-img">
                        <img src={Hands} alt="Hands img" />
                    </div>

                    <div className="right-info">
                        <h2>Репутация</h2><br />

                        <p>Ответственность и этика – основа нашей деятельности.<br />Деятельность в рамках лучших практик 
                            (Корпоративный<br />Кодекс этики и стандарты профессионального поведения)<br />позволяет предлагать 
                            клиентам более качественные<br />инвестиционные продукты, отвечающие высоким<br />требованиям и ожиданиям 
                            самых требовательных клиентов.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OurValues;