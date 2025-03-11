import { Telescope, BrainCircuit, Zap, Target } from "lucide-react";
import OtherProducts from "../components/OtherProducts";
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

        {/* How To Play */}

        {/* <div className="bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
                Learn to Play
              </h2>
              <div className="flex flex-row mt-8">
                  <div className="border p-11 rounded-lg">Hello</div>
                  <div className="">
                    <img src="" alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div> */}

        
        {/* Our Story */}
        {/* <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Our Story
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-400">
                  GameZone started as a passion project by a group of gaming
                  enthusiasts who wanted to create a space where gamers could
                  connect, share experiences, and discover new games.
                </p>
                <p className="mt-3 max-w-3xl text-lg text-gray-400">
                  What began as a small blog has evolved into a thriving
                  community with thousands of members worldwide. We've hosted
                  tournaments, game jams, and charity events that have raised
                  over $500,000 for various causes.
                </p>
                <p className="mt-3 max-w-3xl text-lg text-gray-400">
                  Today, we continue to grow and evolve, always staying true to
                  our core mission: bringing gamers together and celebrating the
                  art and joy of gaming.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    alt="Team working together"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

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
