// props == properties  == {}
import HeadingVector from "../../../assets/icons/heading-vector.png";
import "./style.scss"

function Heading(props) {
    const desiredSize = props.size || 1
    const fontSize = (48 / desiredSize) + "px"

    // { title: "..." }
    return (
        <div className="heading-wrapper">
            <img src={HeadingVector} alt="Heading vector" />
            <h1 style={{fontSize:fontSize}}>{props.title}</h1>
        </div>
    );
}

export default Heading;