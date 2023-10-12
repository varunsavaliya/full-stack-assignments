const storeBlogsToLocal = (blogs) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

const getBlogs = () => {
  const storedBlogs = localStorage.getItem("blogs");
  return storedBlogs ? JSON.parse(storedBlogs) : [];
};

const getBlogByID = (id) => {
  const blogs = getBlogs();
  return blogs.find((blog) => blog.id == id);
};

export { storeBlogsToLocal, getBlogs, getBlogByID };
