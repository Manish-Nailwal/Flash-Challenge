import { X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { claimFn, updateProgress } from "../util/questUtil";
function DailyQuestPopup({ togglePopup }) {
  const {
    questProgress,
    setQuestProgress,
    claimReward,
    setClaimReward,
    quest,
    user,
    setUser,
    key,
    setKey
  } = useContext(AuthContext);

  const claim = (idx) => {
    claimFn(setClaimReward, claimReward, user, idx, setKey, key);
  };

  useEffect(() => {
    updateProgress(
      user,
      questProgress,
      claimReward,
      setQuestProgress,
      setClaimReward,
      setUser,
      setKey, key
    );
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="relative w-full max-w-md bg-black border-2 border-white/20 rounded-3xl p-6">
          {/* Close button */}
          <button
            onClick={togglePopup}
            className="absolute left-6 top-6 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>

          {/* Title */}
          <h2 className="text-center text-2xl font-bold text-white mb-6 font-handwriting">
            Daily Quest
          </h2>

          {/* Keys indicator */}
          <div className="absolute right-6 top-6">
            <div className="border-2 border-white/70 rounded-full px-3 py-1">
              <span className="text-white font-medium">{key} keys</span>
            </div>
          </div>

          {/* Quest list */}

          <div className="space-y-4 mt-4">
            {quest.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-start me-10">
                  <span className="text-white mr-2">*</span>
                  <span className="text-white font-medium">{item.name}</span>
                </div>
                <div className="flex space-x-2">
                  {questProgress[idx] < item.target ? (
                    <button className="bg-black text-white border-2 border-white/70 rounded-md px-4 py-1 hover:bg-gray-900 w-20">
                      {questProgress[idx]} / {item.target}
                    </button>
                  ) : claimReward[idx] ? (
                    <button className="bg-black text-white border-2 border-white/70 rounded-md px-4 py-1 text-center hover:bg-gray-900 w-24">
                      Claimed
                    </button>
                  ) : (
                    <button
                      onClick={() => claim(idx)}
                      className="bg-black text-white border-2 border-white/70 rounded-md px-4 py-1 hover:bg-gray-900 w-20"
                    >
                      Claim
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyQuestPopup;
