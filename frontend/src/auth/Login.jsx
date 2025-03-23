import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, UserSearch, Lock } from "lucide-react";
import axios from "axios";
import { backend } from "../App";

import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token, setToken, highScore, questProgress, setQuestProgress, setClaimReward } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      toast.info("You are already logged in.");
      navigate("/account");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${backend}/api/user/login`,
      {
        userId,
        password,
        score: highScore,
        progress: questProgress,
      },
      {
        withCredentials: true,
      }
    );

    if (response.data.success) {
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.token);
      setClaimReward([...response.data.user.claim])
      setQuestProgress([...response.data.user.progress])
      setToken(response.data.token);
      setTimeout(() => {
        navigate("/account");
      }, 1500);
    } else {
      toast.error(response.data.message);
      setUserId("");
      setPassword("");
    }
  };

  return (
    // <div className="flex items-center justify-center p-4">
    <div className="rounded-2xl shadow-xl w-full flex flex-col md:flex-row items-center justify-evenly p-8 my-10">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
          <LogIn className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold text-white">Welcome back</h2>
        <p className="text-gray-500 mt-2">Please sign in to your account</p>
      </div>

      <div className="w-80">
        <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User ID
            </label>
            <div className="relative">
              <UserSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your user_id"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
    // </div>
  );
}

export default Login;
