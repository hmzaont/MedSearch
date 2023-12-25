import React from "react";
import { Link } from "react-router-dom";

const RecommendedDrugs = ({ selectedHastalik }) => {
  if (!selectedHastalik || !selectedHastalik.ilaceslesti) {
    return (
      <div className="py-16 bg-cyan-600 rounded-xl">
        <h4 className="text-2xl font-extrabold text-slate-50">
          ÖNERİLEN İLAÇLAR
        </h4>
        <div className="p-6 cursor-pointer text-xl text-white h-54">
          <p>Önerilen ilaç bulunamadı</p>
        </div>
      </div>
    );
  }

  const ilkBesIlac = selectedHastalik.ilaceslesti.slice(0, 5);
  return (
    <div className="py-16 bg-cyan-600 rounded-xl">
      <h4 className="text-2xl font-extrabold text-slate-50">
        ÖNERİLEN İLAÇLAR
      </h4>
      <div className="p-6 cursor-pointer text-xl text-white h-54">
        {ilkBesIlac.map((ilac, index) => (
          <p key={index} className="p-4 ">
            <Link
              className="transition-all duration-300 ease-in-out hover:bg-gray-300 hover:text-cyan-600 px-2 py-1 rounded-lg"
              to="/ilac-ara"
            >
              {ilac}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default RecommendedDrugs;
