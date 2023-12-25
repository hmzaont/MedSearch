import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMedical from "./pages/SearchMedical";
import ThinkMedical from "./pages/ThinkMedical";
import ChatBotComponent from "./components/ChatBotComponent";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

function App() {
  const [ilaclar, setIlaclar] = useState([]);
  console.log("🚀 ~ file: App.jsx:13 ~ App ~ ilaclar:", ilaclar)
  const [seciliIlac, setSeciliIlac] = useState(null);

  useEffect(() => {
    async function fetchIlaclar() {
      try {
        const response = await axios.get("http://localhost:5002/api/ilaclar");
        setIlaclar(response.data);
      } catch (error) {
        console.error("Error fetching ilaclar:", error);
      }
    }

    if (ilaclar.length === 0) {
      fetchIlaclar();
    }
  }, [ilaclar]);

  const handleIlacSecimi = (value) => {
    const selectedIlac = ilaclar.find((ilac) => ilac.ilacadi === value);
    setSeciliIlac(selectedIlac);
  };

  const filterOption = (input, option) => {
    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("https://i.hizliresim.com/2ecvlxq.gif")',
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/ilac-ara"
              element={
                <SearchMedical
                  ilaclar={ilaclar}
                  handleIlacSecimi={handleIlacSecimi}
                  seciliIlac={seciliIlac}
                  filterOption={filterOption}
                />
              }
            />
            <Route
              path="/ilac-tavsiye"
              element={<ThinkMedical />}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
      <ChatBotComponent />
    </>
  );
}

export default App;
