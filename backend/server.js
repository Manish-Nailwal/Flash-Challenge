import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from './config/mongoDb.js'
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import newsRouter from "./routes/newsRoute.js";
import questRouter from "./routes/questRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// Api endpoint
app.get("/", (req, res) => {
  res.send("Hello I am there");
});
app.use('/api/user',userRouter);
app.use('/api/news',newsRouter);
app.use('/api/quest',questRouter);

app.listen(port, () => {
  console.log("listening at port: " + port);
  console.log("http://localhost:" + port);
});
