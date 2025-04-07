import { Brain, Zap, Globe, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";

function Features() {
  return (
    <div className="bg-black py-14">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-12">Game Features</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5">
          <div className="bg-gray-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-6">
              <Brain className="text-purple-400" size={32} />
              <h2 className="text-2xl font-bold ml-4">Memory Improvement</h2>
            </div>
            <p className="text-gray-400">
              Enhance your cognitive abilities through challenging memory
              exercises and pattern recognition tasks. Our scientifically
              designed games help strengthen your memory retention and recall
              capabilities.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-6">
              <Zap className="text-yellow-400" size={32} />
              <h2 className="text-2xl font-bold ml-4">Reflex Improvement</h2>
            </div>
            <p className="text-gray-400">
              Sharpen your reaction time with fast-paced challenges. Train your
              reflexes to respond quickly and accurately in high-pressure
              situations.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-6">
              <Globe className="text-blue-400" size={32} />
              <h2 className="text-2xl font-bold ml-4">Global Competition</h2>
            </div>
            <p className="text-gray-400">
              Challenge players worldwide in real-time matches. Climb the global
              leaderboard and prove your skills against the best players from
              around the world.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-6">
              <Clock className="text-green-400" size={32} />
              <h2 className="text-2xl font-bold ml-4">Race Against Time</h2>
            </div>
            <p className="text-gray-400">
              Test your speed and accuracy in time-based challenges. Complete
              objectives within strict time limits to earn bonus points and
              special achievements.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Challenge Yourself?
          </h2>
          <p className="text-gray-400 mb-6">
            Start your journey to improve your cognitive skills and compete with
            players worldwide.
          </p>
          <NavLink
            to={"/play"}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Start Playing Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Features;
