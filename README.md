# MiniBlog API

Proyecto integrador backend desarrollado con **Node.js**, **Express** y **PostgreSQL**.
La API permite gestionar **autores** y **publicaciones (posts)** mediante operaciones CRUD, con validaciones y manejo de errores.

---

Enlaces del proyecto
Repositorio:
https://github.com/marizapata/miniblog-api
API desplegada:
https://miniblog-api-production-106e.up.railway.app


## Descripción del proyecto

MiniBlog API es una aplicación backend que expone endpoints para:

* Crear, listar, actualizar y eliminar autores.
* Crear, listar, actualizar y eliminar posts.
* Consultar los posts de un autor específico.
* Validar datos de entrada antes de guardarlos en la base de datos.
* Manejar rutas no encontradas y errores del servidor de forma controlada.

---

## Tecnologías utilizadas

* **Node.js**
* **Express**
* **PostgreSQL**
* **dotenv**
* **Thunder Client** para pruebas de endpoints
* **Git y GitHub** para control de versiones

---

## Estructura del proyecto

```bash
miniblog-api/
│
├── docs/
├── src/
│   ├── controllers/
│   │   ├── authorsController.js
│   │   └── postsController.js
│   │
│   ├── db/
│   │   ├── db.js
│   │   ├── setup.sql
│   │   └── seed.sql
│   │
│   ├── middlewares/
│   │   ├── validateAuthor.js
│   │   ├── validatePost.js
│   │   ├── validateId.js
│   │   ├── notFound.js
│   │   └── errorHandler.js
│   │
│   ├── routes/
│   │   ├── authorsRoutes.js
│   │   └── postsRoutes.js
│   │
│   ├── services/
│   │   ├── authorsService.js
│   │   └── postsService.js
│   │
│   ├── utils/
│   └── app.js
│
├── tests/
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/marizapata/miniblog-api.git
cd miniblog-api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear el archivo `.env`

Debes crear un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias.

Ejemplo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=miniblog_db
DB_USER=postgres
DB_PASSWORD=tu_password
PORT=3000
```

### 4. Crear la base de datos y cargar datos iniciales

1. Crea una base de datos llamada **`miniblog_db`** en PostgreSQL.
2. Abre **pgAdmin** y selecciona la base de datos `miniblog_db`.
3. Ejecuta el contenido del archivo **`src/db/setup.sql`** para crear las tablas `authors` y `posts`.
4. Luego ejecuta el contenido del archivo **`src/db/seed.sql`** para insertar los datos iniciales.
5. Verifica la información con consultas como:

```sql
SELECT * FROM authors;
SELECT * FROM posts;
```

---

## Ejecución del proyecto

Para iniciar el servidor:

```bash
node index.js
```

Si todo está correcto, deberías ver un mensaje como:

```bash
Servidor ejecutándose en puerto 3000
```

---

## Endpoints de la API

### Authors

#### Obtener todos los autores

**GET** `/authors`

#### Obtener un autor por ID

**GET** `/authors/:id`

### Crear un autor

**POST** `/authors`

#### Body de ejemplo:

```json
{
  "name": "Autor de prueba",
  "email": "autor@example.com",
  "bio": "Biografía del autor"
}
```

### Actualizar un autor

**PUT** `/authors/:id`

#### Body de ejemplo:

```json
{
  "name": "Autor actualizado",
  "email": "autor@example.com",
  "bio": "Biografía actualizada"
}
```

### Eliminar un autor

**DELETE** `/authors/:id`

---

### Posts

#### Obtener todos los posts

**GET** `/posts`

#### Obtener un post por ID

**GET** `/posts/:id`

### Obtener posts por autor

**GET** `/posts/author/:authorId`

#### Crear un post

**POST** `/posts`

#### Body de ejemplo:

```json
{
  "title": "Mi primer post",
  "content": "Contenido del post",
  "author_id": 1,
  "published": true
}
```

### Actualizar un post

**PUT** `/posts/:id`

#### Body de ejemplo:

```json
{
  "title": "Post actualizado",
  "content": "Contenido actualizado",
  "author_id": 1,
  "published": false
}
```

### Eliminar un post

**DELETE** `/posts/:id`

---

## Validaciones implementadas

La API incluye middlewares de validación para evitar datos incorrectos:

### `validateAuthor`

Valida:

* `name`
* `email`
* `bio`

### `validatePost`

Valida:

* `title`
* `content`
* `author_id`
* `published`

### `validateId`

Valida parámetros como:

* `:id`
* `:authorId`

---

## Manejo de errores

El proyecto incluye:

* **`notFound`**: responde cuando una ruta no existe.
* **`errorHandler`**: middleware global para capturar errores del servidor.

Ejemplo de respuesta para una ruta inexistente:

```json
{
  "message": "Ruta no encontrada: /loquesea"
}
```

---

## Pruebas realizadas

Los endpoints fueron probados manualmente con **Thunder Client** en VS Code, verificando:

* CRUD completo de autores
* CRUD completo de posts
* validaciones de body
* validaciones de IDs
* manejo de rutas inexistentes

---

## Autor

**Yeiny Mariana Zapata Piedrahita**
