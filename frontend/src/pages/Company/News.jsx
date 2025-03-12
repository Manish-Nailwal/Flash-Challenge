import { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../../App";
import { Newspaper } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const upadateNews = async () => {
      const res = await axios.get(`${backend}/api/news/news`);
      if (res.data.success) {
        setNews(res.data.allNews);
      }
    };
    upadateNews();
  }, []);
  return (
    <>
      <div className="space-y-8 mt-10">
        <div className="text-center">
          <Newspaper className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-3xl font-bold text-white">Latest News</h1>
          <p className="mt-2 text-lg text-gray-500">
            Stay updated with Flash Challenge
          </p>
        </div>

        <div className=" gap-8 flex items-start justify-start md:px-44 pb-10 flex-wrap">
          {news.reverse().map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden w-80 md:w-96"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500">{item.date}</div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 h-14">
                  {item.excerpt.length > 85
                    ? item.excerpt.slice(0, 85) + "....."
                    : item.excerpt}
                </p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-500">
                  <Link to={`${item.link}`}>Read more →</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
