# BlogSphere — Mini Blog Web Application

A simple responsive mini blog built with HTML5, CSS3, Bootstrap 5, JavaScript, Node.js, and Express.

## Features
- Publish a blog post with title, author name, and content
- View all published posts
- Delete an existing post
- Responsive interface
- JSON API using HTTP GET, POST, and DELETE

## Requirements
- Node.js (LTS recommended)
- npm
- Web browser

## Run locally
1. Open this folder in Visual Studio Code.
2. Open Terminal → New Terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Visit http://localhost:3000

## API endpoints
- `GET /api/posts` — list posts
- `POST /api/posts` — publish a post (`title`, `author`, `content`)
- `DELETE /api/posts/:id` — delete a post

## Deploy on Render
1. Push this project to a GitHub repository.
2. In Render, choose New → Web Service and connect the repository.
3. Build command: `npm install`
4. Start command: `npm start`
5. Deploy and open the Render URL.

## Important note about data
This practical version keeps posts in server memory, so posts are reset when the server restarts or redeploys. Add a persistent database (for example, PostgreSQL) if you need posts to survive restarts in production.
