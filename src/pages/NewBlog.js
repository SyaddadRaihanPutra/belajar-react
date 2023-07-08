import React, { useState, useEffect } from "react";
import NavigationAdmin from "../components/navigationAdmin";

function NewBlog() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [blogs, setBlogs] = useState({ data: [] });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://syaddadweb.cu.ma/api/index.php/blogs"
      );
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title: title,
      slug: slug,
      content: content,
      tag: tag,
    };

    try {
      let response;

      if (isEditing) {
        response = await fetch(
          `https://syaddadweb.cu.ma/api/index.php/blogs/${editId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newBlog),
          }
        );
      } else {
        response = await fetch("https://syaddadweb.cu.ma/api/index.php/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBlog),
        });
      }

      if (response.ok) {
        if (isEditing) {
          console.log("Blog updated successfully");
        } else {
          console.log("Blog added successfully");
        }
        setTitle("");
        setSlug("");
        setContent("");
        setTag("");
        fetchBlogs();
        setIsEditing(false);
        setEditId(null);
      } else {
        console.log("Failed to add/update blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    const blog = blogs.data.find((blog) => blog.id === id);
    setTitle(blog.title);
    setSlug(blog.slug);
    setContent(blog.content);
    setTag(blog.tag);
    setIsEditing(true);
    setEditId(id);
  };

  const handleCancelEdit = () => {
    setTitle("");
    setSlug("");
    setContent("");
    setTag("");
    setIsEditing(false);
    setEditId(null);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this blog?");
  
    if (confirmed) {
      fetch(`https://syaddadweb.cu.ma/api/index.php/blogs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("Blog deleted successfully");
            fetchBlogs();
          } else {
            console.log("Failed to delete blog");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };  

  return (
    <div>
      <NavigationAdmin />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="row">
            <form
              onSubmit={handleFormSubmit}
              encType="multipart/form-data"
              className="col-md-6"
            >
              <h2 className="text-center my-4">
                {isEditing ? "✏️ Edit Blog" : "📝 New Blog"}
              </h2>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input required
                  type="text"
                  className="form-control mb-2 mt-1"
                  id="title"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="slug">Slug</label>
                <input required
                  type="text"
                  className="form-control mb-2 mt-1"
                  id="slug"
                  placeholder="Enter slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                />
                <label htmlFor="content">Content</label>
                <textarea
                  className="form-control mb-2 mt-1"
                  id="content"
                  rows="3"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label htmlFor="tag">Tag</label>
                <input required
                  type="text"
                  className="form-control mb-2 mt-1"
                  id="tag"
                  placeholder="Enter tag"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
                <button type="submit" className="btn btn-primary mt-3">
                  {isEditing ? "Update" : "Submit"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-secondary mt-3 ml-2"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
            <div className="col-md-6">
              <h2 className="text-center my-4">📑 Blog Published</h2>
              <table
                className="table table-hover table-bordered"
                style={{ cursor: "pointer" }}
              >
                <thead className="text-center text-bg-primary">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Slug</th>
                    <th scope="col">Content</th>
                    <th scope="col">Tag</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {blogs.data.map((blog) => (
                    <tr key={blog.id}>
                      <td>{blog.title}</td>
                      <td>{blog.slug}</td>
                      <td>{blog.content}</td>
                      <td>{blog.tag}</td>
                      <td className="d-flex gap-2 justify-content-center align-items-center">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleEdit(blog.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(blog.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBlog;
