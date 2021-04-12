import express, { urlencoded } from "express";
import dotenv from "dotenv";
import storyRouter from "./routes/stories";

const app = express();

//  For Enviroment

dotenv.config({ path: "./config/dev.env" });

//  For Connect DB
require("./dbConnect/db");

const PORT = process.env.PORT;

app.use(urlencoded({ extended: false }));
app.use(express.json());

app.use("/stories", storyRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
