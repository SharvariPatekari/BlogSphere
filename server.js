const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "100kb" }));
app.use(express.static(path.join(__dirname, "public")));

let posts = [];
let nextId = 1;

// Return all blog posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Publish a new blog post
app.post("/api/posts", (req, res) => {
  const { title, author, content } = req.body || {};

  if (
    typeof title !== "string" || !title.trim() ||
    typeof author !== "string" || !author.trim() ||
    typeof content !== "string" || !content.trim()
  ) {
    return res.status(400).json({
      message: "Please fill in the title, author name, and content."
    });
  }

  const post = {
    id: nextId++,
    title: title.trim().slice(0, 150),
    author: author.trim().slice(0, 80),
    content: content.trim().slice(0, 10000),
    createdAt: new Date().toISOString()
  };

  posts.unshift(post);
  res.status(201).json(post);
});

// Delete a blog post
app.delete("/api/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const originalLength = posts.length;
  posts = posts.filter(post => post.id !== id);

  if (posts.length === originalLength) {
    return res.status(404).json({ message: "Post not found." });
  }

  res.json({ message: "Post deleted successfully." });
});

// Friendly API error for invalid JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({ message: "Invalid JSON request." });
  }
  next(err);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`BlogSphere is running on port ${PORT}`);
});
