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
      <div className=".container py-4">
        {/* Container for the footer content */}
        <div className="footer-row center flex-wrap">
          {/* Row container for the footer columns */}
          <div className="footer-col">
            {/* First column */}
            <div className="heading">
              <h4>Get In Touch</h4>
            </div>
            <div className="ftr-list-cont">
              {/* Container for the contact information list */}
              <ul className="ftr-list mt-2">
                {/* List of contact information */}
                <li className="ftr-list-item my-1">
                  <div className="ftr-icon">
                    <FaPhoneAlt /> {/* Phone icon from react-icons library */}
                  </div>
                  <p>+91 98000-80000</p>
                </li>
                <li className="ftr-list-item my-1">
                  <div className="ftr-icon">
                    <FaEnvelope />{" "}
                    {/* Envelope icon from react-icons library */}
                  </div>
                  <p>email@example.com</p>
                </li>
                <li className="ftr-list-item my-1">
                  <div className="ftr-icon">
                    <FaMapMarkerAlt />{" "}
                    {/* Map marker icon from react-icons library */}
                  </div>
                  <p>Bela Chawk, Rupnagar, Punjab, India</p>
                </li>
              </ul>
            </div>
            <div className="social-handles flex">
              {/* Container for social media handles */}
              <div className="handle">
                <Link to="">
                  <FaFacebook /> {/* Facebook icon from react-icons library */}
                </Link>
              </div>
              <div className="handle">
                <Link to="">
                  <FaInstagram />{" "}
                  {/* Instagram icon from react-icons library */}
                </Link>
              </div>
              <div className="handle">
                <Link to="">
                  <FaTwitter /> {/* Twitter icon from react-icons library */}
                </Link>
              </div>
              <div className="handle">
                <Link to="">
                  <FaLinkedin /> {/* LinkedIn icon from react-icons library */}
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-col">
            {/* Second column */}
            <div className="heading">
              <h4>Quick Links</h4>
            </div>
            <div className="ftr-list-cont">
              {/* Container for quick links */}
              <ul className="ftr-list mt-2">
                {/* List of quick links */}
                <li className="ftr-list-item text-white my-1">
                  <Link to="/" className="ftr-links text-slate-200">
                    {/* Link to home */}
                    Home
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link to="/" className="ftr-links text-slate-200">
                    {/* Link to about */}
                    About
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link to="/" className="ftr-links text-slate-200">
                    {/* Link to classes */}
                    Classes
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link to="/" className="ftr-links text-slate-200">
                    {/* Link to trainers */}
                    Trainers
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link to="/" className="ftr-links text-slate-200">
                    {/* Link to contact */}
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col">
            {/* Third column */}
            <div className="heading">
              <h4>Newsletter</h4>
            </div>
            <div className="ftr-content">
              {/* Container for newsletter content */}
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
                  {/* Newsletter subscription form */}
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
      <div className="copy-rght w-full bg-zinc-950">
        {/* Container for copyright */}
        <p className="p-5 text-white text-center">
          &copy; flexfitgym.com | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
