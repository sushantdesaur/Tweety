import express from "express";

const router = express.Router();

import { register, login, logout } from "../controllers/auth";
import { postTweet } from "../controllers/tweet";

// router.get is similar to app.get

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

// Tweet
router.post("/tweet", postTweet);


module.exports = router;