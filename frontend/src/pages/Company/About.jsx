import { Telescope, BrainCircuit, Zap, Target, ArrowRight } from "lucide-react";
import OtherProducts from "../../components/OtherProducts";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="bg-gray-950">
        {/* Hero Section */}
        <div className="relative overflow-hidden border border-slate-700">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Gaming tournament"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-purple-900/30"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Flash Challenge
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              The Flash Challenge game is designed to test your memory and
              focus. Players must follow a sequence of vibrant flashes and
              replicate them without mistakes. The sequences become increasingly
              complex, pushing your cognitive skills to the limit. It's a fun
              and engaging way to sharpen your memory and see how far you can go
              without slipping up.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Challenge Your Memory, Sharpen Your Focus
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              Flash Challenge is designed to improve players' reflexes, focus,
              and memory. It's a competitive game where you strive to beat your
              own high score and improve your memory and focus.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore More Section */}
        <div className="bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Discover Our Features
                </h3>
                <p className="text-purple-100 mb-6">
                  Explore our comprehensive suite of features designed to
                  enhance your gaming experience. From tournament tools to
                  community features, we've got everything you need.
                </p>
                <Link
                  to="/features"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  Explore Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Join Our Community
                </h3>
                <p className="text-purple-100 mb-6">
                  Connect with thousands of gamers worldwide. Share experiences,
                  participate in events, and make new friends who share your
                  passion for gaming.
                </p>
                <Link
                  to="/community"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  Join Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <OtherProducts />
      </div>
    </>
  );
}

// Sample data
const features = [
  {
    name: "Boost Reflexes",
    description:
      "Design challenging sequences to help players enhance their reflexes through fast-paced gameplay.",
    icon: Zap,
  },
  {
    name: "Sharpen Memory",
    description:
      "Create progressively complex patterns to improve players' memory retention.",
    icon: BrainCircuit,
  },
  {
    name: "Enhance Focus",
    description:
      "Develop engaging gameplay that requires players to stay focused and attentive.",
    icon: Telescope,
  },
  {
    name: "Break Records",
    description:
      "Encourage players to compete against themselves and strive to beat their high scores.",
    icon: Target,
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Competitive gamer turned entrepreneur with a passion for building communities.",
  },
  {
    name: "Sarah Johnson",
    role: "Community Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Dedicated to creating a positive environment where gamers can connect and thrive.",
  },
  {
    name: "Marcus Williams",
    role: "Head of Events",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Former esports coach with expertise in organizing unforgettable gaming tournaments.",
  },
  {
    name: "Leila Patel",
    role: "Content Director",
    imageUrl:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Gaming journalist with a keen eye for stories that resonate with the community.",
  },
];

export default About;
