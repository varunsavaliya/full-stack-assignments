import { Button, Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Card from "../Card/Card";
import { getBlogs, storeBlogsToLocal } from "../helpers/blogHelper";
import "../Home/Home.css";
import defaultBlogs from "../constants/Blogs";

const Home = () => {
  const [blogs, setBlogs] = useState(getBlogs());
  const [open, setOpen] = useState(false);

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");

  useEffect(() => {
    storeBlogsToLocal(defaultBlogs);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddBlog = () => {
    const newBlog = {
      id: blogs.length + 1,
      title: title,
      description: description,
      longDescription: longDescription,
      image: url,
    };
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    storeBlogsToLocal([...blogs, newBlog]);
    setOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className="heading d-flex justify-content-between align-items-center mt-3">
          <h1>PWSkills Blog</h1>
          <Button className="btn" variant="outlined" onClick={handleClickOpen}>
            <FaPlus />
          </Button>
        </div>
        <div className="card-wrapper my-3">
          <div className="row g-4">
            {blogs.map((blog, idx) => (
              <Card
                key={blog.id}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                id={blog.id}
              />
            ))}
          </div>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <div className="dialog-wrapper p-4">
            <div className="mb-3">
              <label htmlFor="url" className="form-label">
                Blog Url
              </label>
              <input
                type="text"
                className="form-control"
                id="url"
                placeholder="Enter blog post url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Blog Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Blog Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter blog description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="longDescription"
                rows="3"
                placeholder="Write..."
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="text-end">
              <Button variant="outlined" onClick={handleClose} className="mx-2">
                Cancel
              </Button>
              <Button variant="contained" onClick={handleAddBlog}>
                Add
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Home;
