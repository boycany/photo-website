import React from "react";

const About = () => {
  return (
    <div style={{ minHeight: "88vh" }}>
      <h1
        style={{
          textAlign: "center",
          padding: "3rem",
          color: "darkolivegreen",
        }}
      >
        About
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "1.2rem",
        }}
      >
        <p style={{ padding: "0.5rem" }}>本網站圖片來源使用 Pexels API。</p>
        <p style={{ padding: "0.5rem" }}>
          創作者分享的最佳免費圖庫相片，以及免權利金的影像和影片。
        </p>
        <a
          style={{ padding: "0.5rem", color: "blue" }}
          href="https://www.pexels.com/zh-tw/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.pexels.com/zh-tw/
        </a>
      </div>
    </div>
  );
};

export default About;
