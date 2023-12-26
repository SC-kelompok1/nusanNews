const express = require("express");
const router = express.Router();
const {
  getAllberita,
  getBeritaByID,
  addBerita,
  deleteBeritaByID,
  updateBerita,
} = require("../controler/berita.controler");

router.get("/", getAllberita);
router.get("/:id", getBeritaByID);
router.post("/", addBerita);
router.delete("/:id", deleteBeritaByID);
router.put("/:id", updateBerita);

module.exports = router;
