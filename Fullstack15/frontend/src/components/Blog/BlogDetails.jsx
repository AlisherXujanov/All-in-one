import { useParams } from "react-router-dom";
import BlogsJSON from "../../../store/Blogs.json"

import Post1 from "../../assets/images/posts/post1.png"
import Post2 from "../../assets/images/posts/post2.png"
import Post3 from "../../assets/images/posts/post3.png"
import { getImage } from '../../../helpers'

import "./blogDetails.scss"

function BlogDetails(props) {
    const { id } = useParams()

    const imgs = [Post1, Post2, Post3]

    const blog = BlogsJSON.find(blog => blog.id === parseInt(id))

    return (
        <main className="blog-details-wrapper">
            <p className="subtitle">Blog / {blog.subtitle}</p>

            <h1 className="title">{blog.title}</h1>

            <p className="info">
                <span className="author">{blog.author},</span>
                <span className="date">{blog.date}</span>
            </p>

            <img src={getImage(imgs, blog.id)} alt="" />

            <div className="text">
                {blog.desc1}
            </div>
            <div className="text">
                {blog.desc2}
            </div>
        </main>
    );
}

export default BlogDetails;