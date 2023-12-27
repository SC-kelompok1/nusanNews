const express = require("express");
const router = express.Router();
const {
  getAllberita,
  getBeritaByJudul,
  getBeritaByKategori,
  addBerita,
  deleteBeritaByID,
  updateBerita,
} = require("../controler/berita.controler");

router.get("/", getAllberita);
router.get("/:judul", getBeritaByJudul);
router.get("/", getBeritaByKategori);
router.post("/", addBerita);
router.delete("/:id", deleteBeritaByID);
router.put("/:id", updateBerita);

module.exports = router;
