import { Router } from "express";
import { conversation } from "./gemini.js";

const router = Router();

router.post("/", conversation);

export default router;
