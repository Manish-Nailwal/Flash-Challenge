import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [highScore, setHighScore] = useState(0);
  const [questProgress, setQuestProgress] = useState([0, 0, 0, 0, 0]);
  const [claimReward, setClaimReward] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [quest, setQuest] = useState([]);
  const [key, setKey] = useState(0);
  const [gameMode, setGameMode] = useState("default");

  const value = {
    token,
    setToken,
    user,
    setUser,
    highScore,
    setHighScore,
    questProgress,
    setQuestProgress,
    claimReward,
    setClaimReward,
    quest,
    setQuest,
    key,
    setKey,
    gameMode,
    setGameMode,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
