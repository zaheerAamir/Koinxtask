import express from "express";
import { addNormalTransController, healthCheck } from "../controllers/user.controller.js";
import { addNormalTransMiddleware } from "../middlewares/user.middleware.js";

/**
  * @param {express.Express} app 
  * */
function routes(app) {
  app.get("/healthCheck", healthCheck)

  app.post("/getNormalTrans", addNormalTransMiddleware, addNormalTransController)
}

export default routes;
