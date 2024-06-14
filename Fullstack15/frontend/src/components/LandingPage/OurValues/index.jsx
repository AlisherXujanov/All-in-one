import Heading from "../../common/Heading"
import Diamond from "../../../assets/images/diamond.png"
import Birja from "../../../assets/images/birja.png"
import Suitcase from "../../../assets/images/suitcase.png"
import Hands from "../../../assets/images/hands.png"

function OurValues(props) {
    return (
        <section className="values-content">
            <Heading size={2} title={"Наши ценности"} />

            <div className="four-divs">
                <div className="stability value">
                    <img src={Diamond} alt="Diamond img" />
                    <div className="right-info">
                        <h2>Стабильность</h2>
                        <p>Сохранность капитала клиентов приоритетнее доходности - каждое решение взвешено, обдумано и оценено.</p>
                    </div>
                </div>

                <div className="sustainability value">
                    <img src={Birja} alt="Birja img" />
                    <div className="right-info">
                        <h2>Устойчивость</h2>
                        <p>Устойчивое развитие — основа нашей бизнес-модели. Начиная с поиска и оценки предоставившихся возможностей
                            для бизнеса до последовательного развития наших проектов и реаллокации капитала в новые возможности.</p>
                    </div>
                </div>

                <div className="team value">
                    <img src={Suitcase} alt="Suitcase img" />
                    <div className="right-info">
                        <h2>Команда</h2>
                        <p>Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании – это ценный актив в рабочем процессе фонда.
                            Наша цель – создание такой рабочей атмосферы и условий, которые позволят максимально раскрыть
                            потенциал каждого сотрудника для достижения максимального результата.</p>
                    </div>
                </div>

                <div className="reputation value">
                    <img src={Hands} alt="Hands img" />
                    <div className="right-info">
                        <h2>Репутация</h2>
                        <p>Ответственность и этика – основа нашей деятельности. Деятельность в рамках лучших практик
                            (Корпоративный Кодекс этики и стандарты профессионального поведения) позволяет предлагать
                            клиентам более качественные инвестиционные продукты, отвечающие высоким требованиям и ожиданиям
                            самых требовательных клиентов.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValues;