import News from "../models/newsModel.js";

//get high score
const getNews = async (req, res) => {
  try {
    const allNews = await News.find({});
    res.json({
      success: true,
      allNews,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching news" });
  }
};

export { getNews };
