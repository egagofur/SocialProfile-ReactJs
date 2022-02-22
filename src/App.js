import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import TextLoop from "react-text-loop";
import Typist from "react-typist";

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: "✨",
    hideWhenDone: true,
  };

  const [darkmode, setdarkmode] = useState(false);

  return (
    <div>
      <div className={`card ${darkmode ? "dark" : ""}`}>
        <div className="toggle-btn" onClick={() => setdarkmode(!darkmode)}></div>
        <div className="dark-mode"></div>
        <div className="card_body">
          <div className="profile text-center ">
            <img src="/logo.png" className="avatar" alt="avatar" />
            <div className="bg_content rd_12 p_8">
              <h1>@EgaGofur</h1>
              <p className="mt-16">Siswa SMK</p>
              <Typist cursor={config_cursor}>Perasaan nyaman, membuatmu sulit berubah</Typist>
            </div>

            <div className="bg_content rd_12 p_8 mt-16">
              Familiar with{" "}
              <TextLoop interval={800}>
                <span className="higthlight">HTML</span>
                <span className="higthlight">CSS</span>
                <span className="higthlight">JavaScript</span>
                <span className="higthlight">Bootstrap 5</span>
                <span className="higthlight">React JS</span>
                <span className="higthlight">Node JS</span>
                <span className="higthlight">C++</span>
              </TextLoop>
            </div>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.instagram.com/egagofur_/">
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.tiktok.com/@egagofur_?lang=en">
              <FaTiktok />
              <span>Tiktok</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://t.me/INDlalapo">
              <BsTelegram />
              <span>Telegram</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://portofolio-egagofur.vercel.app/">
              <BsFillPersonFill />
              <span>Portofolio</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://github.com/egagofur">
              <BsGithub />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
