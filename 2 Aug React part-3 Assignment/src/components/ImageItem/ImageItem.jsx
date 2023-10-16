import { Link } from "react-router-dom";
import "./ImageItem.css";

function ImageItem({ image, id }) {
  return (
    <>
      <div className="col-3 image-wrapper">
        <Link to={`/image/${id}`}>
          <div className="card">
            <img src={image} className="card-img-top image" alt="..." />
          </div>
        </Link>
      </div>
    </>
  );
}

export default ImageItem;
