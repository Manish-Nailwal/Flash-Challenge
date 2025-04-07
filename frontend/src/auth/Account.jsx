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
  Check,
  X,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import {
  fetchUserData,
  handleInputChange,
  handleSubmit,
  logout,
  setEditFn,
} from "../util/authUtil";
import axios from "axios";
import { backend } from "../App";

function Account() {
  const [isEditing, setIsEditing] = useState(false);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const {
    setToken,
    setUser,
    user,
    setHighScore,
    setKey,
    setQuestProgress,
    setClaimReward,
  } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "User Name",
    email: "user@example.com",
    userId: "user1245",
    bio: "bio",
    score: 0,
    avatar:
      "https://res.cloudinary.com/dojqjc99q/image/upload/v1741285039/FlashGame_DEV/avatars/g0ek3r5sld6uwl1pxowt.png",
  });
  const [tempFormData, setTempFormData] = useState({});
  const [avatarOptions, setAvatarOptions] = useState([]);

  const handleAvatarSelect = (avatarUrl) => {
    setFormData((prev) => ({
      ...prev,
      avatar: avatarUrl,
    }));
    setShowAvatarSelector(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData(setUser, setFormData, navigate);
    const updateAvatar = async () => {
      const response = await axios.get(`${backend}/api/avatars`);
      setAvatarOptions(response.data);
    };
    updateAvatar();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className=" shadow-xl rounded-2xl overflow-hidden border border-gray-800">
          {/* Header */}
          <div className="relative h-28 bg-gradient-to-r from-gray-950 to-gray-800">
            <div className="absolute -bottom-12 left-8">
              <div className="relative"
              onClick={isEditing?() => setShowAvatarSelector(true):null}>
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

          {/* Avatar Selector Modal */}
          {showAvatarSelector && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Choose Profile Picture
                  </h3>
                  <button
                    onClick={() => setShowAvatarSelector(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {avatarOptions.map((avatar, index) => (
                    <button
                      key={index}
                      onClick={() => handleAvatarSelect(avatar.url)}
                      className="relative aspect-square overflow-hidden rounded-lg hover:ring-2 hover:ring-indigo-500 focus:outline-none"
                    >
                      <img
                        src={avatar.url}
                        alt={`Avatar option ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {formData.avatar === avatar.url && (
                        <div className="absolute inset-0 bg-indigo-500 bg-opacity-20 flex items-center justify-center">
                          <div className="bg-white rounded-full p-1">
                            <Check className="w-5 h-5 text-indigo-600" />
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="pt-16 px-8 pb-8">
            <div className="flex justify-between items-start md:items-center mb-8">
              <h1 className="text-3xl font-bold text-white">{formData.name}</h1>
              <div className="m-0 p-0 flex flex-col md:flex-row items-center justify-end">
                <button
                  onClick={() =>
                    setEditFn(
                      tempFormData,
                      setTempFormData,
                      formData,
                      setFormData,
                      isEditing,
                      setIsEditing
                    )
                  }
                  className="w-20 px-4 my-2 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isEditing ? "Cancel" : "Edit"}
                </button>
                <button
                  onClick={() =>
                    logout(
                      setQuestProgress,
                      setClaimReward,
                      setKey,
                      setToken,
                      setHighScore,
                      navigate
                    )
                  }
                  className="md:ms-5 my-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {localStorage.getItem("token") != "" ? "LogOut" : "LogIn"}
                </button>
              </div>
            </div>

            <form
              onSubmit={(e) =>
                handleSubmit(
                  e,
                  setIsEditing,
                  isEditing,
                  formData,
                  tempFormData,
                  user,
                  setUser
                )
              }
              className="space-y-6"
            >
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
                        onChange={(e) => handleInputChange(e, setFormData)}
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
                        onChange={(e) => handleInputChange(e, setFormData)}
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
                        onChange={(e) => handleInputChange(e, setFormData)}
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
                        onChange={(e) => handleInputChange(e, setFormData)}
                        disabled={true}
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
                    onChange={(e) => handleInputChange(e, setFormData)}
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
