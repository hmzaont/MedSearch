const express = require("express");
const router = express.Router();
const Hastalik = require("../models/hastalik");

router.get("/hastalik-ilac", async (req, res) => {
  try {
    const hastaliklar = await Hastalik.find({}, "hastalikadi ilaceslesti");
    res.status(200).json(hastaliklar);
  } catch (error) {
    console.log("Hata oluştu:", error);
    res.status(500).json({ message: "Bir hata oluştu" });
  }
});


router.get("/hastaliklar/:hastalikAdi", async (req, res) => {
  try {
    const hastalikAdi = req.params.hastalikAdi;
    const regex = new RegExp(hastalikAdi, "i");

    const hastaliklar = await Hastalik.find({ hastalikadi: regex }).select('hastalikadi ilaceslesti');

    if (!hastaliklar || hastaliklar.length === 0) {
      return res.status(404).json({ message: "Hastalık bulunamadı" });
    }

    res.json(hastaliklar);
  } catch (error) {
    console.log("Hata oluştu:", error);
    res.status(500).json({ message: "Bir hata oluştu" });
  }
});

router.get("/hastaliklar", async (req, res) => {
  try {
    const hastalikAdlari = await Hastalik.find({}, "hastalikadi");
    res.status(200).json(hastalikAdlari);
  } catch (error) {
    console.log("Hata oluştu:", error);
    res.status(500).json({ message: "Bir hata oluştu" });
  }
});



module.exports = router;
