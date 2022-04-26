import express from "express";

const router = express.Router();

import {register} from "../controllers/auth"

// router.get is similar to app.get
router.post("/register", register);

module.exports = router;