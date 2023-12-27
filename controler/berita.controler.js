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
      res.status(500).json({ message: "Maaf terjadi error", err: err.message });
    }
  },
  getBeritaByJudul: (req, res) => {},
  getBeritaByKategori: (req, res) => {},
  addBerita: async (req, res) => {
      try {
        
        const id = req.params.id
        const {judul, artikel, kategori, foto} = req.body
      
        const data = await Berita.create({judul, artikel, kategori, foto
        });
        res.status(200).json({
          message: "success",
        })
      } catch (error) {
        res.status(500).json({
          message:error.message})
    }
  },

  deleteBeritaByID: async (req, res) => {
    try {
        const id = req.params.id
        // Use the MongoDB model to find and delete the document by ID
        const deletedBerita = await Berita.destroy({
          where: {
            id : id
          }
        });
  
        res.status(200).json({ message: 'Berita deleted successfully'  });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
  
    }
  },
  updateBerita: (req, res) => {},
};
