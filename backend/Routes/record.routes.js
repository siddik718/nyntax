
import { save } from "../Controllers/record.controller.js";
import express from "express";

const router = express.Router();

router.post("/", save);

export default router;
