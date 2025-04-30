import './style.css'
import cdt from '../images/cdt-logo.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header container-fluid">

        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link to="#" className="logo text-decoration-none text-dark">
            <img src={cdt} alt="" style={{width:'160px'}} />
          </Link>
          <Link
            to="#contact"
            className="contact text-decoration-none text-primary"
          >
            Contact Us
          </Link>
        </div>
        
      </header>
    </>
  );
};

export default Header;
