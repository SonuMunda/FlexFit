import "./Home.css";
import about_img from "/images/about-bodybuilder-image.jpg";
import HomeCarousel from "../../assets/components/HomeCarousel/HomeCarousel";
const Home = () => {
  return (
    <>
      <section style={{ height: "100vh" }}>
        <HomeCarousel />
      </section>
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

      <section className="services center py-5">
        <div className="container">
          <div className="heading center mb-5">
            <h1
              className="text-4xl uppercase font-bold p-3"
              style={{ color: "orangered" }}
            >
              Fitness Offerings
            </h1>
          </div>

          <div className="services-row center my-3">
            <div className="services-col"></div>
            <div className="services-col"></div>
            <div className="services-col"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
