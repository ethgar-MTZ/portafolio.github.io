import React, { useEffect, useState } from "react";

export default function AboutSection() {
  const [text, setText] = useState("");
  const fullText = "DESARROLLO WEB + BACKEND DEVELOPER";

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < fullText.length) {
        setText((prev) => prev + fullText[current]);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section aboutme" data-anchor="aboutme">
      <div className="opaque-bg">
        <h1 style={{ color: "white" }}>MDH<span style={{ color: "#FF6363" }}>/</span>Desarrollos</h1>
        <p><span>{text}</span><span className="blinking-cursor">|</span></p>
      </div>
      <i id="moveDown" className="fa fa-chevron-down fa-3x bounce"></i>
    </div>
  );
}