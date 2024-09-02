import express from "express";
import routes from "./src/routes.js";
import connectDB from "./utils/connectDb.js";
import cron from "cron";
import { getEthPriceController } from "./controllers/user.controller.js";

const app = express();
const PORT = 8080;
app.use(express.json());

app.listen(PORT, () => {
  const job = new cron.CronJob("*/10 * * * *", async () => {
    getEthPriceController()
  })
  job.start()
  connectDB();
  routes(app);
  console.log(`Server running on Port: ${PORT}`)
})
