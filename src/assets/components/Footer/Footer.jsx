import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer center flex-col">
      <div className=".container p-4">
        <div className="footer-row flex flex-wrap">
          <div className="footer-col">
            <div className="heading">
              <h4>Get In Touch</h4>
            </div>
            <div className="ftr-list-cont">
              <ul className="ftr-list  mt-2">
                <li className="ftr-list-item my-1">
                  <div className="ftr-icon">
                    <FaPhoneAlt />
                  </div>
                  <p>+91 98000-80000</p>
                </li>
                <li className="ftr-list-item my-1">
                  <div className="ftr-icon">
                    <FaEnvelope />
                  </div>
                  <p>flexfitgym@email.com</p>
                </li>
                <li className="ftr-list-item my-1">
                  <div className="ftr-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <p>Bela Chawk ,Rupnagar, Punjab, India</p>
                </li>
              </ul>
            </div>
            <div className="social-handles flex">
              <div className="handle">
                <Link to="">
                  <FaFacebook />
                </Link>
              </div>
              <div className="handle">
                <Link to="">
                  <FaInstagram />
                </Link>
              </div>
              <div className="handle">
                <Link to="">
                  <FaTwitter />
                </Link>
              </div>
              <div className="handle">
                <Link to="">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="heading">
              <h4>Quick Links</h4>
            </div>
            <div className="ftr-list-cont">
              <ul className="ftr-list mt-2">
                <li className="ftr-list-item text-white my-1">
                  <Link to="/" className="ftr-links text-slate-200">
                    Home
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link to="/" className="ftr-links text-slate-200">
                    About
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link to="/" className="ftr-links text-slate-200">
                    Classes
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link to="/" className="ftr-links text-slate-200">
                    Trainers
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link to="/" className="ftr-links text-slate-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col">
            <div className="heading">
              <h4>Newsletter</h4>
            </div>
            <div className="ftr-content">
              <div className="title  mt-2">
                <h4 className="text-white uppercase text-xl">
                  Subscribe our Newsletter
                </h4>
              </div>
              <div className="text">
                <p className="text-slate-200">
                  Subscribe to our newsletter for the latest updates, exclusive
                  offers, fitness tips, and inspirational content. Stay
                  connected with our community and elevate your fitness journey.
                  Sign up today!
                </p>
              </div>
              <div className="news-ltr-form my-3">
                <form action="">
                  <div className="ltr-form-group">
                    <input
                      type="text"
                      style={{
                        width: "200px",
                        borderRadius: "6px 0px 0px 6px",
                      }}
                      placeholder="Enter Email"
                      className="ps-4"
                    />
                    <input
                      type="submit"
                      value="signup"
                      style={{
                        backgroundColor: "orangered",
                        width: "100px",
                        borderRadius: "0px 6px 6px 0px",
                      }}
                      className="text-white uppercase cursor-pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-rght w-full bg-slate-950">
        <p className="p-5 text-white text-center">&copy; flexfitgym.com | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
