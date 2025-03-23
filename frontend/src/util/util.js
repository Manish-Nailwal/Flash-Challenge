import { backend } from "../App";
import axios from "axios";

export const checkToken = async (setToken, setUser) => {
  if (localStorage.getItem("token")) {
    try {
      const response = await axios.post(`${backend}/api/user/verify`, {
        token: localStorage.getItem("token"),
      });
      if (response.data.success) {
        setToken(localStorage.getItem("token"));
        setUser(response.data.user);
        return true;
      } else {
        localStorage.removeItem("token");
        setToken("");
        return false;
      }
    } catch (error) {
      console.log(error);
      setToken("");
      return false;
    }
  } else {
    return 0;
  }
};

export const getQuestFn = async (setQuest) => {
  const response = await axios.get(`${backend}/api/quest`);
  setQuest(response.data.allQuest);
};


