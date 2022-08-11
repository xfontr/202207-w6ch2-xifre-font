import express from "express";
import { getAllDocs, getDocById } from "../controllers/docsController";
import { getURL } from "../middlewares/getMainData";

const docsRouter = express.Router();

docsRouter.get("/", getURL);
docsRouter.get("/things", getAllDocs);
docsRouter.get("/things/:idThing", getDocById);

export default docsRouter;
