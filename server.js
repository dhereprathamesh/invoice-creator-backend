import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import inoviceRoute from "./routes/invoiceRoute.js";

//configure env
dotenv.config();

//databaseConfig
connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

// Configure CORS
app.use(
  cors({
    origin: "*", // Update this to restrict allowed origins
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// Routes
app.use("/api/invoice", inoviceRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
