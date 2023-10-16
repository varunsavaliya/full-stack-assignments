import { useParams } from "react-router-dom";
import "./ImageDetail.css";
import axios from "axios";
import { useEffect, useState } from "react";

function ImageDetail() {
  const [photo, setPhoto] = useState({});
  const { id } = useParams();
  async function getImage() {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    const data = response.data.photo;
    const image = {
      description: data.description,
      id: data.id,
      title: data.title,
      url: data.url,
    };
    setPhoto(image);
  }
  useEffect(() => {
    getImage();
    console.log(photo);
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="wrapper d-flex justify-content-between my-3 p-3">
            <img className="hero-image me-3" src={photo.url} alt="" />
            <div className="details d-flex flex-column justify-content-center text-light">
                <h1>{photo.title}</h1>
                <p>{photo.description}</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default ImageDetail;
