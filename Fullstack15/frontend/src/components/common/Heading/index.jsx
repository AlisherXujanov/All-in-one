// props == properties  == {}
import HeadingVector from "../../../assets/icons/heading-vector.png";
import "./style.scss"

function Heading(props) {
    // { title: "..." }
    return (
        <div className="heading-wrapper">
            <img src={HeadingVector} alt="Heading vector" />
            <h1>{props.title}</h1>
        </div>
    );
}

export default Heading;