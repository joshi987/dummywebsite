import "./headers.css";

function Header() {
  return (
    <div className="full-conatiner">
      
    <div className="container">
      <nav>
        <div className="logo">
          snazzy<span className="lawyer">lawyer</span>
        </div>
        <ul>
          <li>About us</li>
          <li>Offer</li>
          <li>Our Team</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="appoint"><button className="appointment">Make an appointment</button> </div>
        
      </nav>
    </div>
    </div>
  );
}

export default Header;
