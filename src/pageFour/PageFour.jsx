import "../pageFour/four.css";
import Family from "../pageFour/img/Family.png";
import Crimal from "../pageFour/img/Crimal.png";
import Employ from "../pageFour/img/Employ.png";
import Realestate from "../pageFour/img/Realestate.png";
import Compensation from "../pageFour/img/Compensation.png";
import Cases from "../pageFour/img/Cases.png";
import Bankruptcy from "../pageFour/img/Bankruptcy.png";
import Arrow from "../pageFour/img/arrow.png";

function PageFour() {
  return (
    <div className="pagefour">
      <header className="special">
        Speciallsation
        <div className="Whatwe">What we do</div>
        <div className="para-1">
          Our lawyer are specialists in criminal law, civil law, commercial law,
          administrative law and new technologies. We are not afraid of
          chanllenges, including consumer bankruptcy
        </div>
      </header>
      <div className="grid">
        <div className="cell">
          <img src={Family} alt="Icon 1" />
          <div className="Law">
            <p className="grid-text">Law Family</p>
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="cell">
          <img src={Crimal} alt="Icon 1" />
          <div className="Law">
            <p className="grid-text">Law Crimial</p>
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="cell">
          <div className="bottom-right">$</div>
          <div className="Law">
            <p className="grid-text">Law Civil</p>
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="cell">
          <img src={Employ} alt="Icon 1" />
          <div className="Law">
            <p className="grid-text">Law Empoyment</p>
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="cell">
          <img src={Realestate} alt="Icon 1" />
          <div className="Law">
            <p className="grid-text">Law Real estate</p>
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="cell">
          <img src={Compensation} alt="Icon 1" />
          <div className="Law">
            <p className="grid-text">Compensation</p>
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="cell">
          <img src={Cases} alt="Icon 1" />
          <div className="Law">
            <p className="grid-text">Cases successions</p>
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="cell">
          <img src={Bankruptcy} alt="Icon 1" />
          <div className="Law">
            <p className="grid-text">Bankruptcy consumer</p>
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFour;
