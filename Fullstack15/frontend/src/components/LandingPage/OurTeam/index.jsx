import Heading from "../../common/Heading"
import Per1 from "../../../assets/images/per1.png"
import Per2 from "../../../assets/images/per2.png"
import Person from './Person.jsx'

function OurTeam(props) {
  return (
    <section className="team-section-content-wrapper">
      <Heading size={2} title={"Наша команда"} />
      <p className="intro">Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании – это ценный актив в рабочем процессе фонда. Наша цель – создание такой рабочей атмосферы и условий, которые позволят максимально раскрыть потенциал каждого сотрудника для достижения максимального результата.</p>
      
      <div className="team-content">
        <Person img={Per1}   name={'Ержан Мусин'}   jobTitle={'CEO'} />
        <Person img={Per2}   name={'Олжас Укенов'}  jobTitle={'CFO'} />
        <Person img={Per1}   name={'Ержан Мусин'}   jobTitle={'CEO'} />
        <Person img={Per2}   name={'Олжас Укенов'}  jobTitle={'CFO'} />
        <Person img={Per1}   name={'Ержан Мусин'}   jobTitle={'CEO'} />
        <Person img={Per2}   name={'Олжас Укенов'}  jobTitle={'CFO'} />
      </div>
    </section>
  )
}
export default OurTeam;