import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";
function OtherProducts() {
  return (
    <>
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Other Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to={"https://wander-lust-o5es.onrender.com"}>
            <div className="relative inline-block rounded-lg shadow-lg hover:opacity-80 transition-opacity">
              <img
                src="/media/otherProj/StaynQuest.png"
                alt="WanderLust"
                className="rounded-lg shadow-lg hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                <SquareArrowOutUpRight className="text-white" />
              </div>
            </div>
          </Link>
          <Link to={"https://fundraising-portal.onrender.com"}>
            <div className="relative inline-block rounded-lg shadow-lg hover:opacity-80 transition-opacity">
              <img
                src="/media/otherProj/CauseConnect.png"
                alt="FundRaiser"
                className="rounded-lg shadow-lg hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                <SquareArrowOutUpRight className="text-white" />
              </div>
            </div>
          </Link>
          <Link to={"https://temptrendz.netlify.app/"}>
            <div className="relative inline-block rounded-lg shadow-lg hover:opacity-80 transition-opacity">
              <img
                src="/media/otherProj/TempTrendz.png"
                alt="WeatherApp"
                className="rounded-lg shadow-lg hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                <SquareArrowOutUpRight className="text-white" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default OtherProducts;
