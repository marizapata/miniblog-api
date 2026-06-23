// Consultas de posts
const pool = require("../db/db");

// Obtener todos los posts
const getAllPosts = async () => {
  const result = await pool.query("SELECT * FROM posts ORDER BY id");
  return result.rows;
};

// Obtener un post por ID
const getPostById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM posts WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

// Obtener posts por author_id
const getPostsByAuthorId = async (authorId) => {
  const result = await pool.query(
    "SELECT * FROM posts WHERE author_id = $1 ORDER BY id",
    [authorId]
  );

  return result.rows;
};

// Crear un post
const createPost = async ({ title, content, author_id, published }) => {
  const result = await pool.query(
    `INSERT INTO posts (title, content, author_id, published)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [title, content, author_id, published ?? false]
  );

  return result.rows[0];
};

// Actualizar un post
const updatePost = async (id, { title, content, author_id, published }) => {
  const result = await pool.query(
    `UPDATE posts
     SET title = $1,
         content = $2,
         author_id = $3,
         published = $4
     WHERE id = $5
     RETURNING *`,
    [title, content, author_id, published, id]
  );

  return result.rows[0];
};

// Eliminar un post
const deletePost = async (id) => {
  const result = await pool.query(
    "DELETE FROM posts WHERE id = $1 RETURNING *",
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAuthorId,
  createPost,
  updatePost,
  deletePost,
};