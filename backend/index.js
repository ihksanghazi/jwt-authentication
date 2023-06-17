import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
	await db.authenticate();
	console.log("Database connected...");
} catch (error) {
	console.error(error);
}

app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server Running at port 5000"));
