import { Link } from "react-router-dom";
import "../Card/Card.css";
function Card({ image, title, description, id }) {
  return (
    <>
      <div className="col-4">
        <div className="card">
          <img src={image} className="card-img-top img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to={`/blog/${id}`} className="btn btn-primary w-100">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
