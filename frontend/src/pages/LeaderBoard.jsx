import { Trophy, Medal } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios"
import { backend } from "../App";

const getRankStyle = (rank) => {
  switch (rank) {
    case 1:
      return "bg-gradient-to-r from-yellow-500 to-yellow-600";
    case 2:
      return "bg-gradient-to-r from-gray-400 to-gray-500";
    case 3:
      return "bg-gradient-to-r from-amber-600 to-amber-700";
    default:
      return "bg-gray-900";
  }
};

function Leaderboard() {
  const [leaderboardData, setLeaderBoardData] = useState([
    { name: "Alex Storm", userId: "@storm_gaming", score: 15 },
    { name: "Nina Blitz", userId: "@ninja_nina", score: 14 },
    { name: "Max Power", userId: "@max_plays", score: 14 },
    { name: "Sarah Swift", userId: "@swift_gamer", score: 13 },
    { name: "Tom Thunder", userId: "@thunder_tom", score: 13 },
    { name: "Lisa Lightning", userId: "@lisa_wins", score: 12 },
    { name: "Jack Flash", userId: "@flash_jack", score: 12 },
    { name: "Emma Elite", userId: "@elite_emma", score: 11 },
    { name: "Chris Champion", userId: "@champ_chris", score: 11 },
    { name: "Diana Dragon", userId: "@dragon_diana", score: 10 }
  ]);


  useEffect(()=>{
    const updateData = async ()=>{
      const response = await axios.get(`${backend}/api/user/top-player`);
      setLeaderBoardData(response.data.user)
    }
    updateData();
  },[])

  return (
    <div className="bg-black py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Trophy className="text-yellow-500 mr-3" size={32} />
          <h1 className="text-4xl font-bold">Global Leaderboard</h1>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden mx-5">
          {leaderboardData.map((player, idx) => (
            <div
              key={idx}
              className={`${getRankStyle(
                idx + 1
              )} p-4 border-b border-gray-700 flex items-center justify-between transition-transform hover:scale-102`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold w-8">{idx + 1}</span>
                {idx <= 2 && <Medal className="text-black" size={24} />}
                <div>
                  <h3 className="font-semibold text-lg">{player.name}</h3>
                  {idx > 2 ? (
                    <p className="text-white">{player.userId}</p>
                  ) : (
                    <p className="text-black">{player.userId}</p>
                  )}
                </div>
              </div>
              <div className="text-2xl font-bold">
                {player.score.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
