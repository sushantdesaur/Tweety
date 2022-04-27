import express from "express";

const router = express.Router();

import {register, login} from "../controllers/auth"

// router.get is similar to app.get
router.post("/register", register);
router.post("/login", login);

module.exports = router;