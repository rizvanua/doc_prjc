const express = require("express");
const { login } = require("../controllers/login");
const router = express.Router();

// router.get("/login", (req, res) => {
//   console.log("!!!GET");
//   res.send("LOG IN PAGE!");
// });
router.post("/login", login);

module.exports = router;
