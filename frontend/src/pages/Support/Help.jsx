import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Help() {
    const faqs = [
        {
          question: "How do I play Flash Challenge?",
          answer:
            "Flash Challenge is a fast-paced memory game where you must memorize a sequence of colors and sounds. Each round, Simon will flash a pattern, and you must repeat it in the correct order. The challenge increases as the sequence gets longer and faster!",
        },
        {
          question: "How can I increase my score in Flash Challenge?",
          answer:
            "To increase your score, focus on memorizing and repeating the color and sound sequences as accurately as possible. The longer your streak, the higher your score will be. Keep practicing to beat your own high score!",
        },
        {
          question: "Are there different difficulty levels in Flash Challenge?",
          answer:
            "No, Curently Flash Challenge doesn't offers multiple difficulty levels. But diffrent level such as race against time will be added soon in future",
        },
        {
          question: "Can I compete against my friends in Flash Challenge?",
          answer:
            "Yes, you can challenge your friends by comparing your scores through the leaderboard.",
        },
      ];
  return (
    <>
      <div className="space-y-8 my-10 p-3 md:p-0">
        <div className="text-center">
          <HelpCircle className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-3xl font-bold text-white">Help Center</h1>
          <p className="mt-2 text-lg text-gray-500">
            Find answers to common questions
          </p>
        </div>

        <div className="max-w-6xl mx-auto border-2 p-2 md:p-5 rounded-md">
          <div className="rounded-lg shadow-md overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 border-b bg-white rounded-md border-gray-200 last:border-b-0 my-2"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500">Can't find what you're looking for?</p>
            <button className="mt-4 px-6 py-2 bg-gray-950 text-white rounded-md hover:bg-indigo-500">
              <Link to={"/contact"}>Contact Support</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
