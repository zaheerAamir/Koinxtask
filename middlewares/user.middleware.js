import express from "express";
import http from "http";

/**
* @param {express.Request} req 
* @param {express.Response} res 
* @param {express.NextFunction} next 
* */
export async function addNormalTransMiddleware(req, res, next) {

  /**
    * @type {import("../schema/trans.schema").Response}
    * */
  const resp = {};

  /**
   * @type {import("../schema/trans.schema").RequestDto}
  * */
  const body = req.body;

  if (!body || body === undefined || body === null) {
    resp.status = 400;
    resp.message = http.STATUS_CODES[resp.status];
    resp.details = "Request invalid!"

    res.status(resp.status).json(resp);
    return;
  }

  if (typeof body.address !== 'string') {
    resp.status = 400;
    resp.message = http.STATUS_CODES[resp.status];
    resp.details = "Address should be type string!"

    res.status(resp.status).json(resp);
    return;
  }

  next();

}
