function Person(props) {
    return (
        <div className="person-wrapper">
            <img src={props.img} alt="Person image" />
            <h3>{props.name}</h3>
            <h4>{props.jobTitle}</h4>
        </div>
    );
}

export default Person;