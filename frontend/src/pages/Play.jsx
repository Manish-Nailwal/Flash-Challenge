import { useContext, useEffect, useState } from "react";
import "./Play.css";
import { AuthContext } from "../context/AuthContext";
import DailyQuestPopup from "../components/DailyQuestPopup";
import { checkToken, getQuestFn } from "../util/util";
import {
  btnPressFn,
  checkBtnFn,
  isHighScoreFn,
  lvlUpFn,
  startGameFn,
} from "../util/gameUtil";
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
  const [popUp, setPopUp] = useState(false);

  const {
    token,
    setToken,
    user,
    setUser,
    highScore,
    setHighScore,
    quest,
    setQuest,
    questProgress,
    setQuestProgress
  } = useContext(AuthContext);

  useEffect(() => {
    checkToken(setToken, setUser);
    getQuestFn(setQuest);
  }, []);

  const startGame = () => {
    startGameFn(
      token,
      user,
      setHighScore,
      setCurrLvl,
      setStart,
      setCurrScore,
      setGameStatus,
      lvlUp
    );
  };
  const lvlUp = () => {
    lvlUpFn(
      currLvl,
      setCurrLvl,
      setCurrScore,
      isHighScore,
      currQueue,
      setCurrQueue,
      setRandIdx,
      colors,
      setUserQueue
    );
  };

  const reStartGame = () => {
    setCurrLvl(0);
    setGameStatus(true);
    setRestart(true);
  };

  const checkBtn = (idx) => {
    checkBtnFn(
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
      setQuestProgress
    );
  };

  const btnPress = (e) => {
    btnPressFn(
      e,
      start,
      gameStatus,
      userQueue,
      setUserQueue,
      colors,
      setRandIdx
    );
  };

  const isHighScore = () => {
    isHighScoreFn(highScore, currLvl, setHighScore, token, user, setUser);
  };

  useEffect(() => {
    if (restart) {
      setUserQueue([]);
      setCurrQueue([]);
      setRestart(false);
      startGame();
    }
  }, [restart]);

  useEffect(() => {
    if (start) {
      checkBtn(userQueue.length - 1);
    }
  }, [userQueue]);

  // Daily Quest Setup
  const togglePopup = () => {
    setPopUp(!popUp);
  };
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
          <div className="flex flex-col justify-center">
            {start ? (
              <>
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
                {/* {
                  gameStatus ? <span className="flex flex-row justify-between mt-5 text-lg">
                  <p className="text-left">Current Score</p>
                  <p>{currScore}</p>
                </span>: null
                } */}
                <span className="flex flex-row justify-between mt-5 text-lg">
                  <p className="text-left">Current Score</p>
                  <p>{currScore}</p>
                </span>
                <span className="flex flex-row justify-between mt-1 text-lg">
                  <p className="text-left">Highest Score</p>
                  <p>{highScore}</p>
                </span>
                <div className="flex flex-row justify-between">
                  <button
                    onClick={reStartGame}
                    // className="bg-gray-800 hover:bg-gray-900 w-60 text-white px-8 py-2 rounded-md font-medium transition-colors mt-5"
                    className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 w-36 me-8"
                  >
                    Restart
                  </button>
                  <button
                    onClick={togglePopup}
                    className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 "
                  >
                    Daily Quest
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-semibold ">
                  Get Ready for Flash Challenge
                </h1>
                <div className="flex flex-row justify-between">
                  <button
                    onClick={startGame}
                    className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8"
                  >
                    Click to Start
                  </button>
                  <button
                    onClick={togglePopup}
                    className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8"
                  >
                    Daily Quest
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {popUp ? <DailyQuestPopup togglePopup={togglePopup} /> : null}
    </>
  );
}

export default Play;
