import NavBar from "./components/NavBar.jsx";
import Favorite from "./pages/Favorite.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/favorite'element={<Favorite/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
