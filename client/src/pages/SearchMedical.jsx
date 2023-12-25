import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const SearchMedical = ({
  ilaclar,
  handleIlacSecimi,
  seciliIlac,
  filterOption,
}) => {

  const [showData, setShowData] = useState(false);

  return (
    <>
      <div>
        <div className="text-center mt-16">
          <h3 className="text-5xl font-extrabold text-cyan-600">
            İLAÇ SORGULA
          </h3>
        </div>

        <div className="px-64 pt-16 text-center">
          <Select
            showSearch
            placeholder="İlaç Seçiniz veya Giriniz"
            className="w-3/5 text-black "
            onChange={(value) => {
              handleIlacSecimi(value);
              setShowData(true); 
            }}
            filterOption={filterOption}
          >
            {ilaclar.map((ilac) => (
              <Option key={ilac._id} value={ilac.ilacadi}>
                {ilac.ilacadi}
              </Option>
            ))}
          </Select>
        </div>

        {showData &&  seciliIlac && (
          <>
            <div className="home px-20 flex flex-wrap justify-between pt-16 ">
              <div className="w-3/12 h-96 overflow-y-auto bg-cyan-600 text-center rounded-xl text-slate-200 sticky top-0">
                <h1 className="py-4 text-center text-2xl font-bold text-slate-50 bg-cyan-600">
                  YAN ETKİLERİ
                </h1>
                <div className="px-4">
                  {seciliIlac.sideeffectsTR ||
                    "Seçilen ilaç için yan etki bulunamadı."}
                </div>
              </div>
              <div className="w-5/12 h-96 overflow-y-auto bg-cyan-600 text-center rounded-xl text-slate-200 sticky top-0">
                <h1 className="py-4 text-center text-2xl font-bold text-slate-50 bg-cyan-600">
                  AÇIKLAMA
                </h1>
                <div className="px-4">
                  {seciliIlac.aciklamatr ? (
                    <span>{seciliIlac.aciklamatr}</span>
                  ) : seciliIlac.aciklamaentotr ? (
                    <span>{seciliIlac.aciklamaentotr}</span>
                  ) : (
                    <span>
                      Seçilen ilaç için herhangi bir bilgi bulunamadı.
                    </span>
                  )}
                </div>
              </div>
              <div className="w-3/12 h-96 overflow-y-auto bg-cyan-600 text-center rounded-xl text-slate-200 sticky top-0">
                <h1 className="py-4 text-center text-2xl font-bold text-slate-50 bg-cyan-600">
                  MEDİKAL KULLANIM AMACI
                </h1>
                <div className="px-4">
                  {seciliIlac.medicalusestr ||
                    "Seçilen ilaç için medikal kullanım amacı bulunamadı."}
                </div>
              </div>
              <div className="rounded-xl w-full mt-12 text-center text-white bg-cyan-600 flex justify-between">
                <div className="pl-24">
                  <h5 className="font-semibold text-2xl pt-2">ATC ADI</h5>
                  <div className="py-2">
                    <span>{seciliIlac.atcadi}</span>
                  </div>
                </div>
                <div className="">
                  <h5 className="font-semibold text-2xl pt-2">Üreten Şirket</h5>
                  <div className="py-2">
                    <span>{seciliIlac.firmaadi}</span>
                  </div>
                </div>
                <div className="pr-36">
                  <h5 className="font-semibold text-2xl pt-2">ATC KODU</h5>
                  <div className="py-2">
                    <span>{seciliIlac.atckodu}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchMedical;
