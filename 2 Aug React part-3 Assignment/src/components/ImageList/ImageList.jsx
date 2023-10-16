import axios from "axios";
import { useEffect, useState } from "react";
import ImageItem from "../ImageItem/ImageItem";

function ImageList() {
  const API_URL = "https://api.slingacademy.com/v1/sample-data/photos?limit=20";
  const [photos, setPhotos] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [apiUrl, setApiUrl] = useState(API_URL);
  async function getImages() {
    const response = await axios.get(apiUrl);
    const responsePhotos = response.data.photos.map((image) => {
      const i = {
        id: image.id,
        url: image.url,
      };
      return i;
    });
    console.log(response);
    setPhotos(responsePhotos);
    setTotalRecords(response.data.total_photos)
  }

  function handlePrev() {
    if (offset > 0) {
      setOffset(offset => offset - 20);
      setApiUrl(`${API_URL}&offset=${offset}`)
    }
  }

  function handleNext() {
    if (totalRecords > offset) {
      setOffset(offset => offset + 20);
      setApiUrl(`${API_URL}&offset=${offset}`)
    }
  }

  useEffect(() => {
    getImages();
  }, [offset]);

  return (
    <>
      <div className="container my-3">
        <div className="row g-4">
          {photos.map((p) => (
            <ImageItem id={p.id} image={p.url} key={p.id} />
          ))}
        </div>
        <div className="pagination d-flex justify-content-center align-items-center my-3">
          <button className="btn btn-primary mx-3" onClick={handlePrev} disabled={offset < 20}>
            Prev
          </button>
          <button className="btn btn-primary mx-3" onClick={handleNext} disabled={offset > totalRecords}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageList;
