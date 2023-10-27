import React from "react";
import len from "../pagetwo/len.png";
import "./lenovos.css";
import sideimg from '../pagetwo/sideimg.png'
function Lenovo() {
  return (
    <>
      <div className="second-page">
        <span className="lenvo">
          <img src={len} alt="no image" />
          <img src={len} alt="no image" />
          <img src={len} alt="no image" />
          <img src={len} alt="no image" />
          <img src={len} alt="no image" />
          <img src={len} alt="no image" />
          <img src={len} alt="no image" />
        </span>
        <div className="about">About us</div>
        <div className="fewword">A few words about our law firm</div>
        <div className="trust-para">
          Trust, modernity, success. Our law firm builds relationships based on
          trust and security. We act quickly, ensuring satisfaction and comfort.
          We are your partner in business, removing legal obstacles to success
        </div>
        <div className="more-border-para">
      <div className="more-para">More information about the law firm</div>
        </div>
        <div className="img-box">
        <img className="side-img" src={sideimg} alt="no img" />

        </div>
      </div>

    </>
  );
}

export default Lenovo;
