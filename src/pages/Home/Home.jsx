import "./Home.css";
import { Link } from "react-router-dom";
import torso_img from "/images/torso.png";
import musclebuilding_img from "/images/bodybuilding.png";
import barbell_img from "/images/barbell.png";
import about_img from "/images/about-bodybuilder-image.jpg";
import team_1_img from "/images/team-1.jpg";
import team_2_img from "/images/team-2.jpg";
import team_3_img from "/images/team-3.jpg";
import HomeCarousel from "../../assets/components/HomeCarousel/HomeCarousel";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <section className="home-carousel">
        <HomeCarousel />
      </section>

      {/*About Section*/}
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
                  <p className="font-bold text-4xl py-4">Welcome to Flex Fit</p>
                </div>
                <div className="line">
                  <p className="font-medium text-slate-700 text-2xl">
                    We look forward to welcoming you to Flex Fit and supporting
                    you every step of the way on your fitness journey.
                  </p>
                </div>

                <div className="sublines">
                  <p className="py-2">
                    We understand that everyone&apos;s fitness goals and
                    aspirations are unique, which is why we offer a wide range
                    of workout programs, state-of-the-art equipment, and expert
                    trainers to cater to your individual needs. Whether
                    you&apos;re a beginner looking to kickstart your fitness
                    routine or an experienced athlete aiming to take your
                    performance to the next level, we have something for
                    everyone.
                  </p>
                  <p className="py-2">
                    Our mission is to create a welcoming and supportive
                    environment where you can challenge yourself, push your
                    limits, and discover your true potential. We believe that
                    fitness is not just about physical strength but also about
                    mental resilience and overall well-being. Through our
                    diverse classes, personalized training sessions, and
                    holistic approach, we strive to empower you to achieve a
                    balanced and healthy lifestyle.
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

      <section className="memberships center">
        <div className="container py-5">
          <div className="heading center">
            <h1
              className="text-4xl uppercase font-bold p-3"
              style={{ color: "orangered" }}
            >
              Memberships
            </h1>
          </div>
          <div className="membrshp-row center flex-wrap my-5">
            <div className="membrshp-col around flex-col">
              <div className="membrshp-title">
                <h3>Basic Membership</h3>
              </div>
              <div className="pricing">
                <h4 className="font-semibold text-slate-700">
                  From &#8377; 600/month
                </h4>
              </div>
              <div className="membrshp-text text-center">
                <p className="text-slate-700">
                  Access to our state-of-the-art facilities, group fitness
                  classes, and cardio equipment.
                </p>
              </div>
            </div>
            <div
              className="membrshp-col around flex-col"
              style={{ scale: "1.1" }}
            >
              <span
                style={{ backgroundColor: "orangered" }}
                className="rounded"
              >
                Recommended
              </span>

              <div className="membrshp-title">
                <h3>Premium Membership</h3>
              </div>
              <div className="pricing">
                <h4 className="font-semibold text-slate-700">
                  From &#8377; 800/month
                </h4>
              </div>
              <div className="membrshp-text text-center">
                <p className="text-slate-700">
                  All the benefits of the Basic Membership, plus unlimited
                  access to specialized training areas and priority booking for
                  personal training sessions.
                </p>
              </div>
            </div>
            <div className="membrshp-col around flex-col">
              <div className="membrshp-title">
                <h3>Gold Membership</h3>
              </div>
              <div className="pricing">
                <h4 className="font-semibold text-slate-700">
                  From &#8377; 1200/month
                </h4>
              </div>
              <div className="membrshp-text text-center">
                <p className="text-slate-700">
                  The ultimate package, including all the benefits of the
                  Premium Membership, exclusive access to premium amenities, and
                  priority registration for fitness workshops and events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="details-line p-5"
        style={{ backgroundColor: "rgb(34, 36, 41)" }}
      >
        <p style={{ color: "orangered", padding:"4rem 2rem" }} className=" text-2xl text-center">
          Please note that specific details, pricing, and additional perks may
          vary. For complete membership information and to explore our offerings
          in more detail, we encourage you to contact our gym reception or visit
          our Gym Center.
        </p>
      </div>

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
    </>
  );
};

export default Home;
