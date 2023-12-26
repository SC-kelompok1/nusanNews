const express = require("express");
const router = express.Router();
const beritas = require("./berita.router");

router.use("/berita", beritas);

module.exports = router;
