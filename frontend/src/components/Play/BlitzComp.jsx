import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function BlitzComp({
  gameStatus,
  currScore,
  highScore,
  reStartGame,
  time,
  isRunning
}) {
  const {setGameMode} = useContext(AuthContext);
  const navigate = useNavigate();
  const returnFn = () => {
    setGameMode("mode");
    navigate("/play");
  };
  return (
    <>
        {gameStatus ? (
          <h2 className="text-2xl font-semibold text-center">
            Time Left {time}s
          </h2>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center">{time==0?"Time Over!":"Game Over!"}</h2>
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
      <div className="flex flex-row justify-between">
        {isRunning ? (
          <button
            onClick={reStartGame}
            className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 w-36 me-8"
          >
            Restart
          </button>
        ) : (
          <button
            onClick={reStartGame}
            className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 w-36 me-8"
          >
            Play Again
          </button>
        )}
        <button
          onClick={returnFn}
          className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 "
        >
          Change Mode
        </button>
      </div>
    </>
  );
}

export default BlitzComp;
