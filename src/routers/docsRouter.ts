import express from "express";
import { getURL } from "../middlewares/getMainData";

const docsRouter = express.Router();

docsRouter.get("/", getURL);

export default docsRouter;
