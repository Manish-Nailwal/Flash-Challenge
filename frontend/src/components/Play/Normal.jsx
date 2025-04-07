import { Undo2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import "../../pages/Play.css";
import {
  btnPressFn,
  checkBtnFn,
  isHighScoreFn,
  lvlUpFn,
  startGameFn,
} from "../../util/gameUtil";
import Color from "./Color";
import { AuthContext } from "../../context/AuthContext";
import DailyQuestPopup from "../DailyQuestPopup";
import { checkToken, getQuestFn } from "../../util/util";
import { Link, useNavigate } from "react-router-dom";
import NormalComp from "./NormalComp";
function Normal() {
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
  const [time, setTime] = useState(30); // 30Second
  const [isRunning, setIsRunning] = useState(false);
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
    setQuestProgress,
    gameMode,
    setGameMode,
  } = useContext(AuthContext);
  const navigate = useNavigate();
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
    setIsRunning(!isRunning);
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
    setIsRunning(false);
    setTime(30);
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

  // Timer
  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(300);
  };

  const formatTime = (seconds) => {
    const remainingSeconds = seconds % 60;
    return `${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Daily Quest Setup
  const togglePopup = () => {
    setPopUp(!popUp);
  };
  const returnFn = () => {
    setGameMode("mode");
    navigate("/play");
  };

  return (
    <>
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-around mt-0">
        {/* Color Box */}
        <Color btnPress={btnPress} randIdx={randIdx} />

        <div className="relative box-2 mt-8 text-center">
          <div className="flex flex-col justify-center">
            {!start ? (
              <>
                <button
                  onClick={returnFn}
                  className="absolute right-4 -top-4 text-white hover:text-gray-300"
                >
                  <Undo2 size={20} />
                </button>
                <h1 className="text-2xl font-semibold mb-2 ">
                  Play Normal Mode
                </h1>
                <p>Repeat all the Sequences</p>
                <div className="flex flex-row justify-between">
                  <button
                    onClick={startGame}
                    className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 me-8 w-40"
                  >
                    Play
                  </button>
                  <button
                    onClick={togglePopup}
                    className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 w-40"
                  >
                    Daily Quest
                  </button>
                </div>
              </>
            ) : (
              <NormalComp
                gameStatus={gameStatus}
                currScore={currScore}
                currLvl={currLvl}
                highScore={highScore}
                reStartGame={reStartGame}
                togglePopup={togglePopup}
                start={start}
                startGame={startGame}
                time={formatTime(time)}
              />
            )}
          </div>
        </div>
      </section>
      {popUp ? <DailyQuestPopup togglePopup={togglePopup} /> : null}
    </>
  );
}

export default Normal;
