import express from "express";

const router = express.Router();

// router.get is similar to app.get
router.get("/register", (req, res) => {
  res.status(200).send("OK: Register");
});

module.exports = router;