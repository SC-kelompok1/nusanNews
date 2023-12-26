const models = require("../models");
const { Berita } = models;

module.exports = {
  getAllberita: async (req, res) => {
    try {
      const allberita = await Berita.findAll();
      res.json({
        message: "success get data ",
        data: allberita,
      });
    } catch (err) {
      res.status(400).json({ message: "Maaf error", err: err.message });
    }
  },
  getBeritaByJudul: (req, res) => {},
  getBeritaByKategori: (req, res) => {},
  addBerita: (req, res) => {},
  deleteBeritaByID: (req, res) => {},
  updateBerita: (req, res) => {},
};
