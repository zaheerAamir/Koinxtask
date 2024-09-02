import express from "express";
import { addNormalTransController, getTotalExpenseContoller, healthCheck } from "../controllers/user.controller.js";
import { addNormalTransMiddleware } from "../middlewares/user.middleware.js";

/**
  * @param {express.Express} app 
  * */
function routes(app) {
  app.get("/api/healthCheck", healthCheck)

  app.post("/api/getNormalTrans", addNormalTransMiddleware, addNormalTransController)

  app.get("/api/getTotalExpense/:address", getTotalExpenseContoller)
}

export default routes;
