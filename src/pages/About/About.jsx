import "./About.css";
import about_img from "/images/about-bodybuilder-image.jpg";
import torso_img from "/images/torso.png";
import musclebuilding_img from "/images/bodybuilding.png";
import barbell_img from "/images/barbell.png";
import team_1_img from "/images/team-1.jpg";
import team_2_img from "/images/team-2.jpg";
import team_3_img from "/images/team-3.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about-wrapper">
      <section className="about-banner banner">
        <div className="container center flex-col">
          <div className="banner-heading">
            <h1>About us</h1>
          </div>
        </div>
      </section>

      {/*About Intro*/}
      <section className="about center">
        <div className="container">
          <div className="about-row flex">
            <div className="about-col" id="img-col">
              <div className="col-img">
                <img src={about_img} className="rounded" alt="bodybuilder" />
              </div>
            </div>
            <div className="about-col" id="content-col">
              <div className="col-content">
                <div className="heading">
                  <h4
                    className="text-xl font-bold uppercase"
                    style={{ color: "orangered" }}
                  >
                    About us
                  </h4>
                </div>
                <div className="greet">
                  <p className="font-bold text-4xl py-4">
                    Welcome to Flex Fit Gym
                  </p>
                </div>
                <div className="line">
                  <p className="font-medium text-slate-700 text-2xl">
                    Empowering Your Fitness Journey
                  </p>
                </div>

                <div className="sublines">
                  <p className="mt-2">
                    Welcome to FlexFitGym, where we believe that fitness is not
                    just a destination but a lifelong journey. We are dedicated
                    to empowering individuals of all fitness levels to reach
                    their goals, exceed their expectations, and unlock their
                    full potential. Our mission is to provide a comprehensive
                    and transformative fitness experience that goes beyond
                    ordinary gyms.
                  </p>
                  <p className="mb-2">
                    At FlexFitGym, we believe that fitness is not just a
                    destination but a lifelong journey. We are dedicated to
                    empowering individuals of all fitness levels to reach their
                    goals, exceed their expectations, and unlock their full
                    potential. With our state-of-the-art facilities, expert
                    trainers, and a vibrant community, we provide an
                    unparalleled fitness experience that goes beyond ordinary
                    gyms.
                  </p>
                  <p className="py-2">
                    Our mission is to inspire and guide our members to adopt a
                    healthy and active lifestyle. We strive to create a
                    supportive environment where everyone feels welcome,
                    motivated, and empowered to transform their lives through
                    fitness. Whether you &apos;re a seasoned athlete or just
                    starting on your fitness journey, FlexFitGym is here to help
                    you achieve lasting results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Services Section*/}
      <section
        className="services center py-5"
        style={{ backgroundColor: "rgb(34,36,41)" }}
      >
        <div className="container">
          <div className="heading center mb-5">
            <h1
              className="text-4xl uppercase font-bold p-3"
              style={{ color: "orangered" }}
            >
              Fitness Offerings
            </h1>
          </div>

          <div className="services-row center flex-wrap my-3">
            <div className="services-col around flex-col">
              <div className="col-icon">
                <img src={torso_img} alt="bodybuilding" />
              </div>
              <div className="col-heading">
                <h1>Body Building</h1>
              </div>
              <div className="col-text">
                <p className="text-slate-700">
                  Sculpt your physique, build muscle, and achieve your fitness
                  goals with our specialized program.
                </p>
              </div>
              <div className="col-link">
                <Link to="/">Read More &#8811;</Link>
              </div>
            </div>
            <div className="services-col around flex-col">
              <div className="col-icon">
                <img src={barbell_img} alt="barbell" />
              </div>
              <div className="col-heading">
                <h1>Weight Lifting </h1>
              </div>
              <div className="col-text">
                <p className="text-slate-700">
                  Increase strength, power, and performance through our dynamic
                  training program.
                </p>
              </div>
              <div className="col-link">
                <Link to="/">Read More &#8811; </Link>
              </div>
            </div>
            <div className="services-col around flex-col">
              <div className="col-icon">
                <img src={musclebuilding_img} alt="musclebuilding" />
              </div>
              <div className="col-heading">
                <h1>Muscle Building</h1>
              </div>
              <div className="col-text">
                <p className="text-slate-700">
                  Maximize muscle growth, enhance definition, and transform your
                  physique with our comprehensive program.
                </p>
              </div>
              <div className="col-link">
                <Link to="/">Read More &#8811; </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/*Memberships Section*/}
        <section className="team center">
        <div className="container">
          <div className="heading">
            <h1
              className="uppercase center text-xl font-bold"
              style={{ color: "orangered" }}
            >
              Our Team
            </h1>
          </div>
          <div className="sub-heading p-2 mb-5">
            <h1 className="uppercase center text-4xl font-bold">
              Expert Trainers
            </h1>
          </div>
          <div className="team-row around flex-wrap">
            <div className="team-col">
              <div className="team-img">
                <img src={team_1_img} alt="Kuldeep Singh" />
              </div>

              <div className="team-overlay center">
                <div className="team-handles flex">
                  <div className="handle-icon">
                    <Link to="/">
                      <FaFacebook />
                    </Link>
                  </div>
                  <div className="handle-icon">
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </div>
                  <div className="handle-icon">
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-desc">
                <div className="team-name">
                  <h1 className="font-bold text-3xl text-white text-center uppercase">
                    Kuldeep Singh
                  </h1>
                </div>
                <div className="team-post">
                  <h4 className="text-2xl uppercase center text-white">
                    Trainer
                  </h4>
                </div>
              </div>
            </div>
            <div className="team-col">
              <div className="team-img">
                <img src={team_2_img} alt="Anushk Gorak" />
              </div>

              <div className="team-overlay center">
                <div className="team-handles flex">
                  <div className="handle-icon">
                    <Link to="/">
                      <FaFacebook />
                    </Link>
                  </div>
                  <div className="handle-icon">
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </div>
                  <div className="handle-icon">
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="team-desc">
                <div className="team-name">
                  <h1 className="font-bold text-3xl text-white text-center uppercase">
                    Anushk Gorak
                  </h1>
                </div>
                <div className="team-post">
                  <h4 className="text-2xl uppercase center text-white">
                    Trainer
                  </h4>
                </div>
              </div>
            </div>
            <div className="team-col">
              <div className="team-img">
                <img src={team_3_img} alt="Mahesh Dubey" />
              </div>
              <div className="team-overlay center">
                <div className="team-handles flex">
                  <div className="handle-icon">
                    <Link to="/">
                      <FaFacebook />
                    </Link>
                  </div>
                  <div className="handle-icon">
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </div>
                  <div className="handle-icon">
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-desc">
                <div className="team-name">
                  <h1 className="font-bold text-3xl text-white text-center uppercase">
                    Mahesh Dubey
                  </h1>
                </div>
                <div className="team-post">
                  <h4 className="text-2xl uppercase center text-white">
                    Trainer
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
