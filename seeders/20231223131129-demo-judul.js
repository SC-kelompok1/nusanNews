"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Berita", [
      {
        judul: "GUNUNG API ERUPSI",
        artikel: "wleowleo",
        kategori: "Entertainment",
        foto: "https://img.rasset.ie/0016424f-1600.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "PSM KALAHKAN SABAH 3-1",
        artikel: "Yang kalah tetap MU #GGMU",
        kategori: "Olahraga",
        foto: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb34eca27c5fd7c5e/63120a0d8345671ad1d7455e/PSM-celebration-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "DEBAT CAPRES",
        artikel: "Angin tidak punya KTP",
        kategori: "Entertainment",
        foto: "https://asset-2.tstatic.net/banten/foto/bank/images/nomor-urut-pasangan-capres-pilpres-2024.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "JOKOWI DICAP ALUMNI TERBURUK",
        artikel: "YANG NGECAP ORANG PALING PINTAR CUY,GA BERANI AKUH!",
        kategori: "Entertainment",
        foto: "https://imgcdn.solopos.com/@space/2023/12/jokowi-ugm.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "GUNUNG API ERUPSI",
        artikel: "wleowleo",
        kategori: "Entertainment",
        foto: "https://img.rasset.ie/0016424f-1600.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Berita", null, {});
  },
};
