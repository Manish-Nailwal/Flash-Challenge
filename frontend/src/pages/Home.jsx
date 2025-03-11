import {
  Hourglass,
  ChartNoAxesCombined,
  Swords,
  MessageSquareText,
  ChevronRight,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import OtherProducts from "../components/OtherProducts";
function Home() {
  return (
    <>
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Get Ready for the <span className="text-indigo-300">Flash</span>{" "}
            Challenge
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Challenge your memory and focus as you follow the Flash Challenge's
            vibrant sequence. How far can you go without making a mistake?
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink
              to={"/play"}
              className=" bg-gray-900 border-2 hover:border-gray-800 border-black  px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              Play Free Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </NavLink>
            <Link to={'/about'} className="bg-transparent border-2 border-gray-900 hover:border-gray-800 hover:bg-gray-900  px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
              Know More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="./media/homepage/Hero.jpg"
            alt="Epic Quest Game"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-black bg-opacity-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Game Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border-2 border-white bg-opacity-50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <Swords className="h-12 w-12 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Color Sequence Challenges
              </h3>
              <p className="text-gray-300">
                Test your memory by recalling and repeating increasingly complex
                color patterns.
              </p>
            </div>
            <div className="bg-black border-2 border-white bg-opacity-50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <ChartNoAxesCombined className="h-12 w-12 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Progressive Difficulty</h3>
              <p className="text-gray-300">
                Experience growing challenges as the color sequences get longer
                and faster with each level.
              </p>
            </div>
            <div className="bg-black border-2 border-white bg-opacity-50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform
            relative">
              <div className="absolute -top-3 -right-3">
                <div className="relative">
                  <div className="relative bg-gradient-to-r from-gray-600 to-gray-950 text-white px-4 py-1 rounded-lg border border-gray-400 shadow-lg transform -rotate-12">
                    <span className="text-sm font-bold tracking-wider uppercase">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
              <Hourglass className="h-12 w-12 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Timed Gameplay</h3>
              <p className="text-gray-300">
                Race against the clock to complete each sequence before time
                runs out.
              </p>
            </div>
            <div className="bg-black border-2 border-white bg-opacity-50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <MessageSquareText className="h-12 w-12 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Interactive Feedback </h3>
              <p className="text-gray-300">
                Receive instant visual and audio cues to guide you through each
                round, helping you improve your memory skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <OtherProducts />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-950 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Adventure?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Join thousands of players already testing their memory and skills.
            Can you conquer Flash challenge and become the ultimate champion?
          </p>
          <NavLink
            to={"/play"}
            className="bg-white text-black hover:bg-indigo-100 px-8 py-3 rounded-lg font-medium transition-colors text-lg"
          >
            Play Now
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Home;
