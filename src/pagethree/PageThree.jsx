import React from "react";
import "../pagethree/third.css";
function PageThree() {
  return (
    // <div className="pagethree">
    //   <div className="what-font">
    //     What makes us differe nt
    //     <div className="why-font">Why choose our law firm?</div>
    //   </div>
    //   <div className="mid-container">
    //   <div className="percentage">
    //     95%
    //     <div className="thamk-font">
    //       Thanks to our skills and commitment, our law firm achieves a high
    //       degree of efficiency in resolving cases.
    //     </div>
    //     <br />
    //     <div className="button"><button className="btn">Book a free consultation</button></div>
    //   </div>

    //   <div className="ten-plus">
    //   10+
    //  <div className="years-font">
    //  Years of experience is the solid foundation on which we base our law firm.

    //     </div>
    //   </div>
    //   <div className="five-plus-1">
    //   +500
    //  <div className="years-font-1">
    //  Years of experience is the solid foundation on which we base our law firm.

    //     </div>
    //   </div>
    //   </div>

    // </div>
    <div className="pagethree">
  <h1 className="heading">What makes us different</h1>
  <div className="what-font">Why choose our law firm?</div>
  <div className="content-container">

    <div className="percentage">
      95%
      <div className="thamk-font">
        Thanks to our skills and commitment, our law firm achieves a high degree of efficiency in resolving cases.
      </div>
      <div className="button">
        <button className="btn">Book a free consultation</button>
      </div>
    </div>
    <div className="other-content">
      <div className="ten-plus">
        10+
        <div className="years-font">
          Years of experience is the solid foundation on which we base our law firm.
        </div>
      </div>
      <div className="five-plus-1">
        +500
        <div className="years-font-1">
          Years of experience is the solid foundation on which we base our law firm.
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default PageThree;
