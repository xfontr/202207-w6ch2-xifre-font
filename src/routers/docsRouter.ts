import express from "express";
import getAllDocs from "../controllers/docsController";
import { getURL } from "../middlewares/getMainData";

const docsRouter = express.Router();

docsRouter.get("/", getURL);
docsRouter.get("/things", getAllDocs);

export default docsRouter;
