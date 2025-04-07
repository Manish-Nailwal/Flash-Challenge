import { toast } from "react-toastify";
import axios from "axios";
import { backend } from "../App";

export const lvlUpFn = (
  currLvl,
  setCurrLvl,
  setCurrScore,
  isHighScore,
  currQueue,
  setCurrQueue,
  setRandIdx,
  colors,
  setUserQueue
) => {
  setUserQueue([]);
  setCurrLvl(currLvl + 1);
  setCurrScore(currLvl);
  isHighScore();
  let idx = Math.floor(Math.random() * 4);
  setRandIdx(idx);
  setCurrQueue([...currQueue, colors[idx]]);
  setTimeout(() => setRandIdx(-1), 150);
};

export const startGameFn = (
  token,
  user,
  setHighScore,
  setCurrLvl,
  setStart,
  setCurrScore,
  setGameStatus,
  lvlUp
) => {
  if (token !== "" && user.score > 0) {
    setHighScore(user.score);
  }
  setCurrLvl(0);
  setStart(true);
  setCurrScore(0);
  setGameStatus(true);
  setTimeout(lvlUp, 500);
};

export const checkBtnFn = (
  idx,
  currQueue,
  userQueue,
  lvlUp,
  setCurrQueue,
  setGameStatus,
  highScore,
  currLvl,
  quest,
  currScore,
  questProgress,
  setQuestProgress,
  setIsRunning,
  isRunning
) => {
  if (currQueue[idx] === userQueue[idx]) {
    if (currQueue.length === userQueue.length) {
      setTimeout(() => lvlUp(), 500);
    }
  } else {
    setCurrQueue([]);
    checkProgressFn(quest, currScore, questProgress, setQuestProgress);
    isRunning ? setIsRunning(false):null;
    setGameStatus(false);
    if (highScore < currLvl && currLvl!==1) {
      toast.info("New high score! Log in or register to save it.");
    } else {
      toast.error("Game Over!!");
    }
  }
};

export const btnPressFn = (
  e,
  start,
  gameStatus,
  userQueue,
  setUserQueue,
  colors,
  setRandIdx
) => {
  if (start && gameStatus) {
    setUserQueue([...userQueue, colors[e.target.id]]);
    setRandIdx(e.target.id);
    setTimeout(() => setRandIdx(-1), 150);
  }
};

export const isHighScoreFn = async (
  highScore,
  currLvl,
  setHighScore,
  token,
  user,
  setUser
) => {
  if (highScore < currLvl) {
    setHighScore(currLvl);
    if (token !== "") {
      const res = await axios.post(`${backend}/api/user/score`, {
        userId: user._id,
        score: highScore,
      });
      setUser(res.data.user);
    }
    return true;
  }
  return false;
};

export const checkProgressFn = async (
  quest,
  currScore,
  questProgress,
  setQuestProgress
) => {
  let updateProgress = [...questProgress];
  for (let idx = 0; idx < quest.length; idx++) {
    let newFnCode = quest[idx].progressCalculation;
    const newFn = new Function("currScore", "idx", newFnCode);
    if (currScore > 4) {
      if (newFn(currScore, idx)) {
        if (questProgress[idx] < quest[idx].target) {
          ++updateProgress[idx];
          if (localStorage.getItem("token")) {
            const response0 = await axios.post(`${backend}/api/user/verify`, {
              token: localStorage.getItem("token"),
            });
            if (response0.data.success) {
              const response = await axios.put(
                `${backend}/api/quest/progress`,
                {
                  userId: response0.data.user._id,
                  idx: idx,
                }
              );
            }
          }
        }
      }
    }
  }
  setQuestProgress(updateProgress);
};
