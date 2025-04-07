import { Users, MessageCircle, Share2, Trophy } from "lucide-react";
import {Link} from "react-router-dom"

function Community() {
  return (
    <div className="bg-black py-16">
      <div className="max-w-4xl mx-5 md:mx-10 text-center lg:mx-auto">
        <div className="mb-12">
          <Users className="mx-auto text-blue-400 mb-4" size={48} />
          <h1 className="text-4xl font-bold mb-4">Join Our Gaming Community</h1>
          <p className="text-gray-400 text-lg mb-8">
            Connect with players worldwide, share strategies, and compete in
            exclusive events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <MessageCircle className="mx-auto text-green-400 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Active Discussions</h2>
            <p className="text-gray-400">
              Engage in real-time conversations about strategies, updates, and
              gaming tips.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Share2 className="mx-auto text-purple-400 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">
              Share Your Achievements
            </h2>
            <p className="text-gray-400">
              Showcase your high scores and compete with players globally.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://discord.gg/vEC3tjCMGr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Join Our Discord Community
          </a>

          <Link
            to="/top-flashers"
            className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            <Trophy size={24} className="mr-2" />
            Top Flashers
          </Link>
        </div>

        <div className="mt-12 p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Community Stats</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold text-blue-400">10K+</p>
              <p className="text-gray-400">Active Players</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-400">50K+</p>
              <p className="text-gray-400">Messages Sent</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">1K+</p>
              <p className="text-gray-400">Daily Matches</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
