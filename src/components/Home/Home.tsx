import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lightbox from "./LightBox";
import sertificate from "../../assets/sertificate/sertificate.png";
import degree from "../../assets/sertificate/degree.png";

export default function Home() {
    const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  return (
    <>
      <div className="home">
        <h1>
          Hi, I’m <span className="highlight">David Krstevski</span>, <br /> web developer
        </h1>
        <p className="subtitle">&lt;𝓹&gt;</p>
        <p className="subtitle">𝓕𝓾𝓵𝓵 𝓼𝓽𝓪𝓬𝓴 𝔀𝓮𝓫 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻</p>
        <p className="subtitle">&lt;/𝓹&gt;</p>
        <Link to="/contact" className="btn">Contact me!</Link>
      </div>

      <div className="sertificate-container">
        <img
          className="sertificate"
          src={sertificate}
          alt="sertificate"
          onClick={() => setFullscreenImg(sertificate)}
        />
        <img
          className="sertificate"
          src={degree}
          alt="degree"
          onClick={() => setFullscreenImg(degree)}
        />
      </div>

      <Lightbox src={fullscreenImg} onClose={() => setFullscreenImg(null)} />
    </>
  );
}
