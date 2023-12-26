const models = require("../models");
const { Berita } = models;

module.exports = {
  getAllberita: async (req, res) => {
    const allberita = await Berita.findAll();
    res.json({
      message: "success get data ",
      data: allberita,
    });
  },
  getBeritaByJudul: (req, res) => {},
  getBeritaByKategori: (req, res) => {},
  addBerita: (req, res) => {},
  deleteBeritaByID: (req, res) => {},
  updateBerita: (req, res) => {},
};
