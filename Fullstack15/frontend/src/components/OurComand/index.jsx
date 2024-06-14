import Heading from "../common/Heading"
import "./style2.scss"
import Per1 from "../../assets/images/per1.png"
import Per2 from "../../assets/images/per2.png"


function OurComand(props) {
    return (
        <div className="comand1">
            <div className="divs">
                <div className="head">
                    <Heading size={2} title={"Наша команда"}/>
                </div>
                <div className="comand2">
                    <div className="comand3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem in blanditiis voluptate molestiae asperiores at? Accusantium nisi et, optio, doloribus odio facilis sed modi mollitia recusandae, debitis quod quaerat soluta illum molestias ullam placeat minima voluptate. Quasi rerum sequi dicta consectetur, voluptatem quia sunt facilis ut nemo cumque nam fuga veritatis quis maxime minima esse, deserunt accusamus repellat error odit ad ipsa! Optio pariatur, fugit eveniet, adipisci repellat sunt facilis a illum voluptates tempora, quis repellendus natus! Mollitia est quibusdam, quae sit, facere expedita, deserunt amet neque incidunt provident necessitatibus voluptate ullam. Dolor dignissimos eum soluta nisi dolorem. Minus, corrupti recusandae unde molestias omnis quas a ut, vel eligendi provident ipsum? Aliquam non ab nostrum expedita voluptatum a? Beatae harum eius corporis, tempore natus facere aspernatur qui pariatur hic, distinctio quisquam inventore! Dolor, culpa. Eum explicabo, soluta exercitationem repudiandae ea atque error reiciendis sunt numquam, eos quibusdam quam. Quis voluptas labore numquam natus ducimus in laudantium obcaecati debitis nisi consequatur eveniet incidunt deserunt atque, enim nobis cupiditate? Minima earum blanditiis quos expedita asperiores nam, itaque a, necessitatibus dicta delectus neque! Nostrum eaque vel earum, vero blanditiis sit error dolorum ad eos, eligendi hic commodi, totam quas odio voluptatum ratione.</p>
                        <div className="comand4">
                            <div className="p1">
                                <img src={Per1} alt="Person1"/>
                                <h4>Person1</h4>
                            </div>
                            <div className="p1">
                                <img src={Per2} alt="Person2"/>
                                <h4>Person2</h4>
                            </div>
                            <div className="p1">
                                <img src={Per1} alt="Person1"/>
                                <h4>Person1</h4>
                            </div>
                            <div className="p1">
                                <img src={Per2} alt="Person2"/>
                                <h4>Person2</h4>
                            </div>
                            <div className="p1">
                                <img src={Per1} alt="Person1"/>
                                <h4>Person1</h4>
                            </div>
                            <div className="p1">
                                <img src={Per2} alt="Person2"/>
                                <h4>Person2</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurComand;