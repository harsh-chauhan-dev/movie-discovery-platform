# 🎬 Movie Discovery Platform

A modern React application for discovering movies, searching titles, and managing a personalized favorites list. The application integrates with **The Movie Database (TMDB) API** to provide real-time movie information with a clean, responsive user interface.

---

## 📖 Overview

Movie Discovery Platform is a frontend application built with React that demonstrates modern React development practices, including component-based architecture, routing, state management, API integration, and client-side persistence.

The project focuses on building a scalable and maintainable React application while providing an intuitive movie browsing experience.

---

## ✨ Features

- 🎥 Browse trending and popular movies
- 🔍 Search movies by title
- ❤️ Add and remove favorite movies
- 💾 Persist favorites using Local Storage
- 📱 Fully responsive interface
- ⚡ Fast client-side navigation with React Router
- 🔄 Dynamic data fetching from TMDB API
- 🎯 Loading and error state handling

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript (ES6+)
- React Router DOM
- CSS3
- Vite

### API

- The Movie Database (TMDB) API

### Browser Storage

- Local Storage

---

## 📂 Project Structure

```
movie-discovery-platform/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── NavBar.jsx
│   │
│   ├── contexts/
│   │   └── MovieContext.jsx
│   │
│   ├── css/
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Favorites.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

---

### Clone the Repository

```bash
git clone https://github.com/harsh-chauhan-dev/movie-discovery-platform.git
```

```bash
cd movie-discovery-platform
```

---

### Install Dependencies

```bash
npm install
```

---

### Configure Environment Variables

Create a `.env` file in the project root.

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Get your API key from:

https://developer.themoviedb.org/

---

### Run Development Server

```bash
npm run dev
```

---

### Build for Production

```bash
npm run build
```

---

## 🧠 React Concepts Demonstrated

- Functional Components
- JSX
- Props
- State Management with `useState`
- Side Effects with `useEffect`
- React Context API
- React Router
- Conditional Rendering
- Lists and Keys
- Event Handling
- API Integration
- Local Storage
- Component Reusability

---

## 🌐 API Integration

The application retrieves movie data using **The Movie Database (TMDB) API**, including:

- Trending Movies
- Search Results
- Movie Posters
- Ratings
- Release Dates
- Movie Information

---

## 📸 Screenshots

> Add screenshots of the application here.

| Home | Favorites |
|------|-----------|
| Screenshot | Screenshot |

---

## 🎯 Future Improvements

- Movie Details Page
- Genre Filtering
- Pagination
- Infinite Scrolling
- Dark Mode
- Authentication
- Watchlist
- Movie Recommendations
- Trailer Support
- Unit Testing

---

## 📚 Learning Outcomes

This project demonstrates practical experience with:

- Building scalable React applications
- Working with third-party REST APIs
- Client-side routing
- Global state management
- Data persistence using Local Storage
- Responsive UI development
- Modern frontend development workflows

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Harsh Chauhan**

GitHub: https://github.com/harsh-chauhan-dev

Portfolio: https://harsh-fullstack-portfolio.vercel.app/me.html