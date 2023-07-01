import "./Home.css";
import { Link } from "react-router-dom";
import about_img from "/images/about-bodybuilder-image.jpg";
import HomeCarousel from "../../assets/components/HomeCarousel/HomeCarousel";

const Home = (props) => {
  return (
    <>
      <section className="home-carousel">
        <HomeCarousel />
      </section>

      {/* About Section */}
      <section className="about center">
        <div className="container">
          <div className="about-row center">
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
                    We understand that everyone &apos;s fitness goals and
                    aspirations are unique, which is why we offer a wide range
                    of workout programs, state-of-the-art equipment, and expert
                    trainers to cater to your individual needs. Whether you
                    &apos;re a beginner looking to kickstart your fitness
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

      {/* Services Section */}
      <section
        className="services center py-5"
        style={{ backgroundColor: "rgb(34,36,41)" }}
      >
        <div className="container">
          <div className="heading center mb-5" id="services-heading">
            <h1
              className="text-4xl uppercase font-bold py-2 text-center"
              style={{ color: "orangered" }}
            >
              Fitness Offerings
            </h1>
          </div>
          <props.ServicesCard />
        </div>
      </section>

      {/* Memberships Section */}

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
            <div
              className="membrshp-col around flex-col
            "
            >
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
        style={{ backgroundColor: "rgb(34, 36, 41)", padding: "4rem 2rem" }}
      >
        <p style={{ color: "orangered" }} className=" text-2xl text-left p-2">
          Please note that specific details, pricing, and additional perks may
          vary. For complete membership information and to explore our offerings
          in more detail, we encourage you to contact our gym reception or visit
          our Gym Center.
        </p>

        <div className="contact-btn-container center mt-3">
          <Link>
            <button
              className="px-8 py-4 text-white rounded"
              style={{ backgroundColor: "orangered" }}
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>

      {/* Team Section */}
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
          {/* Team Cards */}
          <props.TeamCard />
        </div>
      </section>
    </>
  );
};

export default Home;
