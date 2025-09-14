# 🎬 Movie Review Platform

A full-stack web application where users can browse movies, post reviews, and manage their personal watchlist. Admins can manage movies and users.  

---

## 🚀 Features

### 👤 User
- Register and Login with JWT authentication
- Browse all movies
- View detailed movie information
- Add and delete reviews with star ratings
- Add/remove movies to/from personal watchlist
- View profile with watchlist

### 🛠 Admin
- Add new movies
- Delete movies
- View all users
- Delete users
- Manage movies and user base

---

## 🏗 Tech Stack

**Frontend**
- React.js (with React Router)
- Redux Toolkit (state management)
- Axios (API calls)
- Tailwind CSS (styling)

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (authentication)
- Bcrypt.js (password hashing)

---
Movie Review Platform/
│
├── frontend/ # React app
│ ├── src/
│ │ ├── components/ # Navbar, MovieCard
│ │ ├── pages/ # Home, Movies, MovieDetail, Profile, Login, Register, Admin
│ │ ├── redux/ # authSlice, movieSlice, watchlistSlice
│ │ ├── services/ # authService, movieService, watchlistService, adminService
│ │ └── App.js
│ ├── public/
│ ├── package.json
│ └── .env
│
├── backend/ # Node + Express + MongoDB
│ ├── models/ # User, Movie, Review, Watchlist
│ ├── controllers/ # authController, movieController, reviewController, userController
│ ├── routes/ # authRoutes, movieRoutes, reviewRoutes, userRoutes
│ ├── middleware/ # authMiddleware, roleMiddleware
│ ├── server.js
│ ├── package.json
│ └── .env
│
└── README.md
## 📂 Project Structure

