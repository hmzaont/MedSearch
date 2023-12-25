import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      setIsFixed(!isScrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const footerStyle = {
    position: isFixed ? "static" : "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
    zIndex: 10,
    textAlign: "center", 
  };

  return (
    <div style={footerStyle}>
      <p>
        <code> © 2023 ∞ MedSearch® </code>  {" "}
        <a href="https://github.com/hmzaont" target="Front-End" rel="Front-End">
          Hamza ONAT
        </a>{" "}
        |{" "}
        <a href="https://github.com/cngzhn06" target="Back-End" rel="Back-End">
          Cengizhan ÇALIŞKAN
        </a>{" "}
        |{" "}
        <a href="https://github.com/eminhologlu" target="DataBase" rel="DataBase">
          Emin HOLOĞLU
        </a>{" "}
        |{" "}
        <a href="https://github.com/Enesguzel1" target="ScrumMaster" rel="ScrumMaster">
          Enes GÜZEL
        </a>
      </p>
    </div>
  );
};

export default Footer;
