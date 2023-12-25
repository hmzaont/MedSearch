const Ilac = require("../models/ilaclar");
const express = require("express");
const router = express.Router();

router.get("/ilaclar/:ad", async (req, res) => {
  try {
    const ilacAdi = req.params.ad;

    const ilac = await Ilac.findOne(
      { ilacadi: { $regex: ilacAdi, $options: 'i' } } 
    ).collation({ locale: 'en', strength: 2 }); 
    console.log("🚀 ~ file: ilaclar.js:12 ~ router.get ~ ilac:", ilac)
    if (!ilac) {
      return res.status(404).json({ message: "İlaç bulunamadı" });
    }

    res.json(ilac);
  } catch (error) {
    console.log("🚀 ~ file: ilaclar.js:15 ~ router.get ~ error:", error);
    res.status(500).json({ message: "Bir hata oluştu" });
  }
});


router.get("/ilaclar", async (req, res) => {
  try {
    const ilaclar = await Ilac.find();
    res.status(200).json(ilaclar);
  } catch (error) {
    console.log("🚀 ~ file: ilaclar.js:27 ~ router.get ~ error:", error);
    res.status(500).json({ message: "Bir hata oluştu" });
  }
});

module.exports = router;
