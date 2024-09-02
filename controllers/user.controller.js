import express from "express";
import "dotenv/config"
import http from "http";
import { getEthPriceService, getNormalTransService } from "../services/user.service.js";

/**
  * @param {express.Request} req;
  * @param {express.Response} res;
  * **/
export async function healthCheck(req, res) {
  res.send("Server is running! 🦾")

}

/**
  * @param {express.Request} req 
  * @param {express.Response} res 
  * **/
export async function getNormalTransController(req, res) {

  /**
    * @type {import("../schema/trans.schema").Response} 
    * */
  const resp = {
    status: 0,
    message: "",
    details: ""
  };

  try {
    const key = process.env.KEY;
    if (key === undefined || key === "") {
      console.log("Invalid API KEY!")
      resp.status = 404;
      resp.message = http.STATUS_CODES[resp.status];
      resp.details = "🔑 API Key Invalid!"

      res.status(resp.status).json(resp);
      return;
    }

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }

    const address = "0xce94e5621a5f7068253c42558c147480f38b5e0d"

    const response = await fetch(
      "https://api.etherscan.io/api" +
      "?module=account" +
      "&action=txlist" +
      `&address=${address}` +
      "&startblock=0" +
      "&endblock=99999999" +
      "&page=1" +
      "&offset=10" +
      "&sort=asc" +
      `&apikey=${key}`, options
    )

    const data = await response.json()

    if (data === undefined || data === null) {
      resp.status = 500;
      resp.message = http.STATUS_CODES[resp.status];
      resp.details = response;

      res.status(resp.status).json(resp);
      return;
    }

    getNormalTransService(data.result, address)

    res.send("ok")

  } catch (error) {
    resp.status = 500;
    resp.message = http.STATUS_CODES[resp.status];
    resp.details = error;

    res.status(resp.status).json(resp);
  }

}

export async function getEthPriceController() {

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  };

  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr", options);

  getEthPriceService(await res.json());

}
