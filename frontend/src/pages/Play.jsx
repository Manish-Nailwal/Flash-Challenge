import { useContext, useEffect, useState } from "react";
import "./Play.css";
import { AuthContext } from "../context/AuthContext";
import { backend } from "../App";
import axios from "axios";
function Play() {
  const colors = ["red", "yellow", "green", "blue"];
  const [start, setStart] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [currQueue, setCurrQueue] = useState([]);
  const [userQueue, setUserQueue] = useState([]);
  const [currLvl, setCurrLvl] = useState(0);
  const [randIdx, setRandIdx] = useState(-1);
  const [gameStatus, setGameStatus] = useState(false);
  const [restart, setRestart] = useState(false);

  const { token, setToken, user, setUser, highScore, setHighScore } = useContext(AuthContext);

  useEffect(() => {
    const checkToken = async () => {
      if (localStorage.getItem("token")) {
        try {
          const response = await axios.post(`${backend}/api/user/verify`, {
            token: localStorage.getItem("token"),
          });
          if (response.data.success) {
            setUser(response.data.user);
            setToken(localStorage.getItem("token"));
          } else {
            localStorage.removeItem("token");
            setToken("");
          }
        } catch (error) {}
      }
    };
    checkToken();
  }, []);

  const lvlUp = async () => {
    setUserQueue([]);
    setCurrLvl(currLvl + 1);
    setCurrScore(currLvl);
    isHighScore();
    let idx = Math.floor(Math.random() * 4);
    setRandIdx(idx);
    setCurrQueue([...currQueue, colors[idx]]);
    setTimeout(function () {
      setRandIdx(-1);
    }, 150);
  };

  const startGame = () => {
    if (token != "" && user.score > 0) {
      setHighScore(user.score);
    }
    setCurrLvl(0);
    setStart(true);
    setCurrScore(0);
    setGameStatus(true);
    setTimeout(lvlUp, 500);
  };

  const reStartGame = () => {
    setCurrLvl(0);
    setGameStatus(true);
    setRestart(true);
  };

  const checkBtn = (idx) => {
    if (currQueue[idx] == userQueue[idx]) {
      if (currQueue.length == userQueue.length) {
        setTimeout(() => {
          lvlUp();
        }, 500);
      }
    } else {
      setCurrQueue([]);
      setGameStatus(false);
    }
  };

  const btnPress = async (e) => {
    if (start) {
      setUserQueue([...userQueue, colors[e.target.id]]);
      setRandIdx(e.target.id);
      setTimeout(function () {
        setRandIdx(-1);
      }, 150);
    }
  };

  const isHighScore = async () => {
    if (highScore < currLvl) {
      setHighScore(currLvl);
      if (token != "") {
        const res = await axios.post(`${backend}/api/user/score`, {
          userId: user._id,
          score: highScore,
        });
        setUser(res.data.user)
      }
    }
  };

  useEffect(() => {
    if (restart) {
      setUserQueue([]);
      setCurrQueue([]);
      setRestart(false);
      startGame;
    }
  }, [restart]);

  useEffect(() => {
    if (start) {
      checkBtn(userQueue.length - 1);
    }
  }, [userQueue]);
  return (
    <>
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-around mt-0">
        <div className="color-box mt-8">
          <div className="line1">
            <div
              onClick={btnPress}
              className={`red color ${randIdx == 0 ? "flash" : ""}`}
              id="0"
            ></div>
            <div
              onClick={btnPress}
              className={`yellow color ${randIdx == 1 ? "flash" : ""}`}
              id="1"
            ></div>
          </div>
          <div className="line2">
            <div
              onClick={btnPress}
              className={`green color ${randIdx == 2 ? "flash" : ""}`}
              id="2"
            ></div>
            <div
              onClick={btnPress}
              className={`blue color ${randIdx == 3 ? "flash" : ""}`}
              id="3"
            ></div>
          </div>
        </div>
        <div className="box-2 mt-8 text-center">
          {start ? (
            <div className="mt-3 w-60">
              {gameStatus ? (
                <h2 className="text-2xl font-semibold text-center">
                  Level {currLvl}
                </h2>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-center">
                    Game Over!
                  </h2>
                  <h2 className="text-lg font-semibold text-center">
                    Previous Score: {currScore}
                  </h2>
                </>
              )}
              <span className="flex flex-row justify-between mt-5 text-lg">
                <p className="text-left">Current Score</p>
                <p>{currScore}</p>
              </span>
              <span className="flex flex-row justify-between mt-1 text-lg">
                <p className="text-left">Highest Score</p>
                <p>{highScore}</p>
              </span>
              <button
                onClick={reStartGame}
                className="bg-gray-800 hover:bg-gray-900 w-60 text-white px-8 py-2 rounded-md font-medium transition-colors mt-5"
              >
                Restart
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-semibold">Play Simon Says Game</h1>
              <button
                onClick={startGame}
                className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded-full font-medium transition-colors mt-8"
              >
                Click to Start
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Play;
