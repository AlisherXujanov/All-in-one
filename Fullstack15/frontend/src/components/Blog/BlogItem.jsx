import { Link } from 'react-router-dom'

function BlogItem(props) {
    // subtitle, title, author, date, desc1

    return (
        <div className="blog-item">
            <img src={props.img} alt="" />
            <div className="blog-content">
                <div className="intro">{props.subtitle}</div>

                <h1 className="title">{props.title}</h1>

                <p className="info">
                    <span className="author">{props.author},</span>
                    <span className="date">{props.date}</span>
                </p>

                <p className="text">
                    {props.desc1}
                </p>

                <Link to={"/blog/" + props.id} className="get-info">
                    {'Подробнее >'}
                </Link>
            </div>
        </div>
    );
}

export default BlogItem;