const express = require("express");
const router = express.Router();
const {
  getAllberita,
  addBerita,
  deleteBeritaByID,
  updateBerita,
  getBeritaByJudul,
  getBeritaByKategori,
} = require("../controler/berita.controler");

router.get("/", getAllberita);
router.get("/", getBeritaByJudul);
router.get("/:kategori", getBeritaByKategori);
router.post("/", addBerita);
router.delete("/:id", deleteBeritaByID);
router.put("/:id", updateBerita);

module.exports = router;
