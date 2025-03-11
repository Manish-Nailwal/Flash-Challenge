import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Play from "./pages/Play";
import NotFound from "./NotFound";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import Account from "./auth/Account";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";

const backend = import.meta.env.VITE_BACKEND_URI;

function App() {
  const { token, setToken } = useContext(AuthContext);


  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-600 text-white">
      <Navbar />
      <ToastContainer />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

export { backend };
