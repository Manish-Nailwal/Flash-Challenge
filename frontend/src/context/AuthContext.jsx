import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({})
  const [highScore, setHighScore] = useState(0);

  const value = {
    token,
    setToken,
    user,
    setUser,
    highScore,
    setHighScore
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
