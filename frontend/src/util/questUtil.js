import axios from "axios";
import { backend } from "../App";
import { toast } from "react-toastify";

const updateProgress = async (
  user,
  questProgress,
  claimReward,
  setQuestProgress,
  setClaimReward,
  setUser,
  setKey,
  key
) => {
  if (!localStorage.getItem("token")) return;
  let tempUser = await dailyReset(user, setUser);
  let newProgress = [...questProgress];
  let newClaim = [...claimReward];

  for (let idx = 0; idx < tempUser.progress.length; idx++) {
    if (tempUser.progress[idx] > questProgress[idx]) {
      newProgress[idx] = tempUser.progress[idx];
    }
    if (tempUser.claim[idx]) {
      newClaim[idx] = true;
    }
  }

  setKey(tempUser.key);

  setQuestProgress(newProgress);
  setClaimReward(newClaim);
};

const dailyReset = async (user, setUser) => {
  const response = await axios.post(`${backend}/api/user/verify`, {
    token: localStorage.getItem("token"),
  });
  let tempUser = response.data.user;
  setUser(tempUser);
  return tempUser;
};

const claimFn = async (setClaimReward, claimReward, user, idx, setKey, key) => {
  if (localStorage.getItem("token")) {
    const userId = user._id;
    const response = await axios.put(`${backend}/api/quest/claim`, {
      userId,
      idx,
    });

    const data = response.data;

    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
      return;
    }
  }
  let updatedClaimReward = [...claimReward];
  updatedClaimReward[idx] = true;
  setClaimReward(updatedClaimReward);
  setKey(key+1);
};

export { updateProgress, claimFn };
