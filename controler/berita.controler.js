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
  getBeritaByID: (req, res) => {},
  addBerita: (req, res) => {},
  deleteBeritaByID: (req, res) => {},
  updateBerita: (req, res) => {},
};
