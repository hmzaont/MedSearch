import React from "react";
import { Select } from "antd";

const DiseaseSelector = ({ options, onChange }) => {
  return (
    <Select
      placeholder="Hastalık Seçiniz veya Giriniz"
      className="w-3/5 text-black"
      onChange={onChange}
    >
      {options.map((secenek) => (
        <Select.Option key={secenek._id} value={secenek.hastalikadi}>
          {secenek.hastalikadi}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DiseaseSelector;
