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
  getBeritaByJudul: async (req, res) => {
    try {
      const { judul } = req.params;
      const berita = await Berita.findAll({
        where: { judul },
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
    
  getBeritaByKategori: (req, res) => {
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
  
  deleteBeritaByID: (req, res) => {
  try {
        const id = req.params.id
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
  updateBerita: async (req, res) => {
    try {
      const id = req.params.id
      const {judul, artikel, kategori, foto} = req.body
      const berita = await Berita.findOne({
        where: {
          id : id,
        }
      })
      const data = await Berita.update({judul, artikel, kategori, foto}, {
        where: {
          id: berita.id,
        }
      });
      res.status(200).json({
        message: "success",
      })
    } catch (error) {
      res.status(500).json({
        message:error.message
      })
    }
    }
  }