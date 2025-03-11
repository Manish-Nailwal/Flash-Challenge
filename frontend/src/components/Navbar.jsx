import { Gamepad2, User } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {toast} from "react-toastify"

function Navbar() {
  const { token, setToken, user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const profile = async () => {
    if (localStorage.getItem("token")) {
      await setToken(localStorage.getItem("token"));
      navigate("/account");
    } else {
      await setToken("");
      toast.error(
        "Oops! Looks like you're not logged in. Please log in to continue."
      );
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Gamepad2 className="h-8 w-8 text-indigo-300" />
          <NavLink to={"/"}>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
              Flash Challenge
            </span>
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink to={"/"} className="hover:text-indigo-300 transition-colors">
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="hover:text-indigo-300 transition-colors"
          >
            About
          </NavLink>
          <NavLink
            to={"/features"}
            className="hover:text-indigo-300 transition-colors"
          >
            Features
          </NavLink>
          <NavLink
            to={"/community"}
            className="hover:text-indigo-300 transition-colors"
          >
            Community
          </NavLink>
        </div>
        <div className="flex flex-row items-center">
          <button className=" hover:bg-gray-900 px-5 py-2 rounded-full font-medium transition-colors">
            <Link to={"/play"}>Play Now</Link>
          </button>
          <button
            onClick={profile}
            className="p-1 hover:text-gray-700 transition-colors"
          >
            <User size={20} />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
