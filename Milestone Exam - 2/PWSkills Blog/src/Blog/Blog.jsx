import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getBlogByID } from "../helpers/blogHelper";
import "../Blog/Blog.css";

function Blog() {
  const { id } = useParams();
  const blog = getBlogByID(id);
  return (
    <>
      <div className="container">
        <div className="heading d-flex justify-content-between align-items-center my-3">
          <h1>PWSkills Blog</h1>
          <Link to="/" className="btn">
            <FaArrowLeft />
          </Link>
        </div>
        <div className="wrapper">
          <div className="blog-header d-flex justify-content-between align-items-center">
            <div className="blog-details">
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
            <img className="blog-img" src={blog.image} alt="image" />
          </div>
          <div className="blog-description my-3">
            <p>{blog.longDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
