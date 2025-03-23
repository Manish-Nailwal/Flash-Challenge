import axios from "axios";
import { toast } from "react-toastify";
import { backend } from "../App";

export const fetchUserData = async (setUser, setFormData, navigate) => {
  if (localStorage.getItem("token")) {
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
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      if (error.message === "Network Error") {
        toast.info("The server is starting. Please try again later.");
        navigate("/");
      } else {
        toast.error(error.message);
      }
    }
  } else {
    toast.error(
      "Oops! Looks like you're not logged in. Please log in to continue."
    );
    navigate("/login");
  }
};

export const handleInputChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export const handleSubmit = async (
  e,
  setIsEditing,
  isEditing,
  formData,
  tempFormData,
  user,
  setUser
) => {
  e.preventDefault();
  setIsEditing(!isEditing);

  if(formData==tempFormData){
    return;
  }
    try {
      const response = await axios.post(`${backend}/api/user/update`, {
        userId: user._id,
        prevId: tempFormData.userId,
        data: formData,
      });

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        setIsEditing(true);
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
};

export const logout = (
  setQuestProgress,
  setClaimReward,
  setKey,
  setToken,
  setHighScore,
  navigate
) => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
    toast.success("Logged out successfully.");
  }
  setQuestProgress([0, 0, 0, 0, 0]);
  setClaimReward([false, false, false, false, false]);
  setKey(0);
  setToken("");
  setHighScore(0);
  setTimeout(() => {
    navigate("/login");
  }, 500);
};

export const setEditFn = (
  tempFormData,
  setTempFormData,
  formData,
  setFormData,
  isEditing,
  setIsEditing
) => {
  !isEditing ? setTempFormData(formData) : setFormData(tempFormData);
  setIsEditing(!isEditing);
};
