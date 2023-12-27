const models = require("../models");
const { Berita } = models;

module.exports = {
  getAllberita: async (req, res) => {
    try {
      const allberita = await Berita.findAll();
      res.status(200).json({
        message: "success get data ",
        data: allberita,
      });
    } catch (err) {
      res.status(500).json({ message: "Maaf error", err: err.message });
    }
  },
  getBeritaByJudul: (req, res) => {},

  getBeritaByKategori: async (req, res) => {
    try {
      const { kategori } = req.params;
      const berita = await Berita.findAll({
        where: { kategori },
      });

      if (!berita) {
        return res.status(404).json({ message: "tidak ada datanya" });
      }
      res.status(200).json({
        message: "success get data",
        data: berita,
      });
    } catch (err) {
      res.status(500).json({ message: "maaf error", err: err.message });
    }
  },

  addBerita: (req, res) => {},
  deleteBeritaByID: (req, res) => {},
  updateBerita: (req, res) => {},
};
