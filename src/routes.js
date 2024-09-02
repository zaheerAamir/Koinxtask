import express from "express";
import { getNormalTransController, healthCheck } from "../controllers/user.controller.js";

/**
  * @param {express.Express} app 
  * */
function routes(app) {
  app.get("/healthCheck", healthCheck)

  app.get("/getNormalTrans", getNormalTransController)
}

export default routes;
