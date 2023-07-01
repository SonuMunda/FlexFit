import "./Contact.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/* Contact banner */}
      <section className="contact-banner  banner">
        <div className="container center">
          <div className="banner-heading">
            <h1>Contact</h1>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact center my-5">
        <div className="container py-5">
          {/* Heading */}
          <div className="heading">
            <h1
              className="uppercase center text-xl font-bold"
              style={{ color: "orangered" }}
            >
              Contact Us
            </h1>
          </div>

          {/* Sub-heading */}
          <div className="sub-heading p-2 mb-5">
            <h1 className="uppercase center text-4xl font-bold">
              Get in Touch
            </h1>
          </div>

          {/* Contacts */}
          <div className="contacts-row center flex-wrap">
            {/* Contact column 1 */}
            <div className="contact-col center flex-col">
              <div className="col-icon">
                <FaPhoneAlt />
              </div>
              <div className="col-heading">
                <h4>Call Us</h4>
              </div>
              <div className="col-text">
                <p>98000-80000</p>
              </div>
            </div>

            {/* Contact column 2 */}
            <div className="contact-col center flex-col">
              <div className="col-icon">
                <FaEnvelope />
              </div>
              <div className="col-heading">
                <h4>Email us</h4>
              </div>
              <div className="col-text">
                <p>flexfitgym@email.com</p>
              </div>
            </div>

            {/* Contact column 3 */}
            <div className="contact-col center flex-col">
              <div className="col-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="col-heading">
                <h4>Visit us</h4>
              </div>
              <div className="col-text">
                <p> Bela Chawk, Rupnagar, Punjab, India</p>
              </div>
            </div>
          </div>

          {/* Contact us row */}
          <div className="contact-us-row p-5 center flex-wrap">
            {/* Contact form column */}
            <div className="contact-us-col" id="message-form-col">
              <div className="form-container center flex-col">
                <div className="heading m-2 p-2">
                  <h3 className="uppercase text-center font-bold text-white">
                    Message us
                  </h3>
                </div>
                {/* Contact form */}
                <form action="" id="message-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="input-controls"
                    />
                  </div>
                  <div className="form-row center">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="input-controls"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone"
                        className="input-controls"
                      />
                    </div>
                  </div>
                  {/* Subject */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="input-controls"
                    />
                  </div>
                  {/* Message */}
                  <div className="form-group">
                    <textarea
                      name="message-box"
                      placeholder="Message"
                      style={{ height: "100px" }}
                      className="input-controls"
                    ></textarea>
                  </div>
                  {/* Submit button */}
                  <div className="form-group center">
                    <input type="submit" value="Send Message" id="send-btn" />
                  </div>
                </form>
              </div>
            </div>

            {/* Map column */}
            <div className="contact-us-col" id="map-col">
              <div className="map-container">
                {/* Google Maps embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.976135284972!2d76.52068467571907!3d30.966135274472556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905544afe15d749%3A0x7d2c7d7ce72c4557!2sBela%20Chowk%2C%20Rupnagar%2C%20Punjab%20140001!5e1!3m2!1sen!2sin!4v1688117316436!5m2!1sen!2sin"
                  loading="lazy"
                  className="address-map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
