// Controlador de posts
const {
  getAllPosts,
  getPostById,
  getPostsByAuthorId,
  createPost,
  updatePost,
  deletePost,
} = require("../services/postsService");

// GET /posts
const getPosts = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener posts" });
  }
};

// GET /posts/:id
const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await getPostById(id);

    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el post" });
  }
};

// GET /posts/author/:authorId
const getPostsByAuthor = async (req, res) => {
  try {
    const { authorId } = req.params;
    const posts = await getPostsByAuthorId(authorId);

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener posts del autor" });
  }
};

// POST /posts
const addPost = async (req, res) => {
  try {
    const { title, content, author_id, published } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).json({
        message: "Los campos title, content y author_id son obligatorios",
      });
    }

    const newPost = await createPost({
      title,
      content,
      author_id,
      published,
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear post" });
  }
};

// PUT /posts/:id
const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author_id, published } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).json({
        message: "Los campos title, content y author_id son obligatorios",
      });
    }

    const updatedPost = await updatePost(id, {
      title,
      content,
      author_id,
      published,
    });

    if (!updatedPost) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar post" });
  }
};

// DELETE /posts/:id
const removePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await deletePost(id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    res.status(200).json({
      message: "Post eliminado correctamente",
      post: deletedPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar post" });
  }
};

module.exports = {
  getPosts,
  getPost,
  getPostsByAuthor,
  addPost,
  editPost,
  removePost,
};