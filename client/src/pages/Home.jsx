import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="mt" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="text-center text-4xl" style={{ marginBottom: "50px", marginRight: "20px" }}>
        <Link to="/ilac-tavsiye">
          İLAÇ TAVSİYESİ AL!
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="ilac_tavsiyesi_al.gif"
              alt="ilaç tavsiyesi"
              style={{ width: "500px", height: "350px", objectFit: "contain" }}
            />
            Hastalığına en uygun ilaç önerimizi almak için tıkla!
          </div>
        </Link>
      </div>
      <img src="ho.gif" alt="separator" style={{ height: "200px" }} />
      <div className="text-center text-4xl" style={{ marginBottom: "50px", marginLeft: "20px" }}>
        <Link to="/ilac-ara">
          İLAÇ SORGULA!
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="ilac_sorgula.gif"
              alt="ilaç sorgula"
              style={{ width: "500px", height: "350px", objectFit: "contain" }}
            />
            İlacın özelliklerini, yan etkilerini görmek için tıkla!
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
