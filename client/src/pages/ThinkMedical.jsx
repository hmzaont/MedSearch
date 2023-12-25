import React, { useState, useEffect } from "react";
import axios from "axios";
import DiseaseSelector from "./DiseaseSelector";
import RecommendedDrugs from "../components/RecommendedDrugs";

const ThinkMedical = () => {
  const [hastalikSec, setHastalikSec] = useState([]);
  const [seciliHastalik, setSeciliHastalik] = useState(null);

  useEffect(() => {
    async function hastalikAdlariniGetir() {
      try {
        const res = await axios.get("http://localhost:5002/api/hastalik-ilac");
        setHastalikSec(res.data);
        console.log(
          "🚀 ~ file: ThinkMedical.jsx:14 ~ hastalikAdlariniGetir ~ response.data:",
          res.data
        );
      } catch (error) {
        console.log("Hata oluştu:", error);
      }
    }

    hastalikAdlariniGetir();
  }, []);

  const handleSelectChange = (value) => {
    const selectedHastalik = hastalikSec.find(
      (hastalik) => hastalik.hastalikadi === value
    );
    setSeciliHastalik(selectedHastalik);
  };

  return (
    <>
      <div className="text-center mt-16">
        <h3 className="text-5xl font-extrabold text-cyan-600">
          İLAÇ TAVSİYESİ AL
        </h3>
      </div>

      <div className="pt-16 px-64 text-center">
        <DiseaseSelector options={hastalikSec} onChange={handleSelectChange} />
        <div className="home px-20 pt-16">
          <RecommendedDrugs selectedHastalik={seciliHastalik} />
        </div>
      </div>
    </>
  );
};

export default ThinkMedical;
