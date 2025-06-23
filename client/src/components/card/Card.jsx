import './Card.css'
import { Message } from 'iconoir-react'
const BlogCard = ({ bloglabel, blogImage, blogCategory, blogTitle, blogDescription, blogDate, blogWriter }) => {
    return (
        <div className="blog-card">
            <div className="badge">Hot</div>
            <div className="blog-tumb">
                <img src={blogImage} alt="" />
            </div>
            <div className="blog-details">
                <span className="blog-category">{blogCategory}</span>
                <h4>
                    {blogTitle}
                </h4>
                <p>
                    {blogDescription}
                </p>
                <div className="blog-bottom-details">
                    <div className="blog-price">
                        <small>{blogDate} / </small>{blogWriter}
                    </div>
                    <div className="blog-links">
                        <a href="/">
                            <Message />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
