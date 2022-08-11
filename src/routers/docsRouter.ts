import express from "express";
import {
  deleteDocById,
  getAllDocs,
  getDocById,
  postDoc,
} from "../controllers/docsController";

const docsRouter = express.Router();

docsRouter.get("/", getAllDocs);
docsRouter.get("/:idThing", getDocById);

docsRouter.delete("/:idThing", deleteDocById);

docsRouter.post("/", postDoc);

export default docsRouter;
