import React from "react";
import "./para.css";
import Img from  '../img/Girl.png'

function Para() {
  return (
    <>

    <div className="para">
      Overcome legal abstacles to your <span className="sucess">success!</span>
    </div>
      <span className="span-img"><img className="girl" src={Img} alt="No img" /></span>
    </>
  );
}

export default Para;
