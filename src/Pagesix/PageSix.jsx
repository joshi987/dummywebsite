import React from "react";
import "../Pagesix/six.css";
import Learn from "../Pagesix/img/learn.png";
import Money from "../Pagesix/img/Money.png";
import help from "../Pagesix/img/help.png";

function PageSix() {
  return (
    <div className="six">
      <div className="blog">
        Blog
        <div className="newsroom">Newsroom</div>
      </div>

      <div className="grid-container">
        <div className="boxs">
          <img className="images" src={Learn} alt="No img" />
          <div className="criminalss">
            Criminal law
            <div className="How">
              How do you prepare for a company’s RODO audit and implementation?
            </div>
            <p className="p-l">
              Lorem ipsum dolor sit amet consectetur. Parturient leo aliquet
              ligula enim lacinia .
            </p>
          </div>
        </div>
        <div className="boxs">
          <img className="images" src={Money} alt="No img" />
          <div className="criminalss">
            Criminal law
            <div className="How">
              How to successfully recover debts from an unreliable debtor?
            </div>
            <p className="p-l">
              Lorem ipsum dolor sit amet consectetur. Parturient leo aliquet
              ligula enim lacinia .
            </p>
          </div>
        </div>
        <div className="boxs">
          <img className="images" src={help} alt="No img" />
          <div className="criminalss">
            Criminal law
            <div className="How">Division of property during divorce</div>
            <p className="p-l">
              Lorem ipsum dolor sit amet consectetur. Parturient leo aliquet
              ligula enim lacinia .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSix;
