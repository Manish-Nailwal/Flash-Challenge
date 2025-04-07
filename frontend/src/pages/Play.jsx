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
import Color from "../components/Play/Color";
import Normal from "../components/Play/NormalComp";
import Default from "../components/Play/Default";
import Modes from "../components/Play/Modes";
import Blitz from "../components/Play/BlitzComp";
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
  const [content, setContent] = useState(<></>);
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

  useEffect(() => {
    if (gameMode == "default") {
      setContent(
        <Default setGameMode={setGameMode} togglePopup={togglePopup} />
      );
    }
    if (gameMode == "mode") {
      setContent(<Modes startGame={startGame} setGameMode={setGameMode} />)
    }
  }, [gameMode]);

  return (
    <>
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-around mt-0">
        {/* Color Box */}
        <Color btnPress={btnPress} randIdx={randIdx} />

        <div className="box-2 mt-8 text-center">
          <div className="flex flex-col justify-center">
            {content}
          </div>
        </div>
      </section>
      {popUp ? <DailyQuestPopup togglePopup={togglePopup} /> : null}
    </>
  );
}

export default Play;
