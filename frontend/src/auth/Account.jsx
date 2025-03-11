import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Camera,
  UserSearch,
  Save,
  Target,
  LogIn,
} from "lucide-react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { backend } from "../App";

function Account() {
  const [isEditing, setIsEditing] = useState(false);
  const { token, setToken, setUser, user, setHighScore } =
    useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    userId: "johndoe",
    bio: "Senior Software Engineer passionate about building great products.",
    score: 10,
    avatar:
      "https://res.cloudinary.com/dojqjc99q/image/upload/v1741285039/FlashGame_DEV/avatars/g0ek3r5sld6uwl1pxowt.png",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (localStorage.getItem("token") != "") {
        try {
          const response = await axios.post(`${backend}/api/user/verify`, {
            token: localStorage.getItem("token"),
          });
          setUser(response.data.user);
          if (response.data.success) {
            setFormData({
              name: response.data.user.name,
              email: response.data.user.email,
              userId: response.data.user.userId,
              bio: response.data.user.bio,
              score: response.data.user.score,
              avatar: response.data.user.avatar,
            });
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error(
          "Oops! Looks like you're not logged in. Please log in to continue."
        );
        navigate("/login");
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Editing Profile is currently not available");
    // Handle save logic here
    // console.log("Saving profile:", formData);
    // setIsEditing(false);
  };

  const logout = () => {
    if (token != "") {
      localStorage.removeItem("token");
    }
    setToken("");
    setHighScore(0);
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className=" shadow-xl rounded-2xl overflow-hidden border border-gray-800">
          {/* Header */}
          <div className="relative h-28 bg-gradient-to-r from-gray-950 to-gray-800">
            <div className="absolute -bottom-12 left-8">
              <div className="relative">
                <img
                  src={formData.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-1.5 bg-indigo-600 rounded-full text-white hover:bg-indigo-700">
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-16 px-8 pb-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-white">{formData.name}</h1>
              <div className="m-0 p-0 flex flex-col md:flex-row items-center justify-end">
                <button
                  // onClick={() => setIsEditing(!isEditing)}
                  onClick={handleSubmit}
                  className="px-4 my-2 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isEditing ? "Cancel" : "Edit Profile"}
                </button>
                <button
                  onClick={logout}
                  className="ms-5 my-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {localStorage.getItem("token") != "" ? "LogOut" : "LogIn"}
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        placeholder="your@mail.com"
                        className="block w-full pl-10 pr-3 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      User Id
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserSearch className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        name="userId"
                        value={formData.userId}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      HighScore
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Target className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        value={formData.score}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <div className="mt-1">
                  <textarea
                    name="bio"
                    rows={4}
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="bio"
                    disabled={true}
                    className="block w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
