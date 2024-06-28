import Heading from '../common/Heading'
import "./style.scss"
import BlogJSON from '../../../store/Blogs.json'

import Post1 from "../../assets/images/posts/post1.png"
import Post2 from "../../assets/images/posts/post2.png"
import Post3 from "../../assets/images/posts/post3.png"
import { getImage } from '../../../helpers'
import BlogItem from "./BlogItem.jsx"


function Blog(props) {
    const imgs = [Post1, Post2, Post3]

    return (
        <main className="blog-page-wrapper">
            <Heading title="Blog" size={1.5} />

            <div className="blog-page-content">
                {
                    BlogJSON.map((blog_item, index) => {
                        return (
                            <BlogItem
                                key={index}
                                img={getImage(imgs, blog_item.id)}
                                id={blog_item.id}
                                subtitle={blog_item.subtitle}
                                title={blog_item.title}
                                author={blog_item.author}
                                date={blog_item.date}
                                desc1={blog_item.desc1}
                            />
                        )
                    })
                }

            </div>
        </main>
    );
}

export default Blog;