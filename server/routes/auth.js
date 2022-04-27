import express from "express";

const router = express.Router();

import { register, login, logout } from "../controllers/auth";

// router.get is similar to app.get

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);





module.exports = router;