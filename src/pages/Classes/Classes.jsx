import "./Classes.css";
import { useState } from "react";
import ClassesList from "../../assets/api/ClassesList";

const Classes = () => {
  // Array For days of week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // To know current day
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];

  const [selectedDay, setSelectedDay] = useState(currentDay);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="classes-wrapper">
      {/* Banner */}
      <section className="banner classes-banner">
        <div className="container center">
          <div className="banner-heading">
            <h1>Classes</h1>
          </div>
        </div>
      </section>

      {/* Class Section */}
      <section className="class-timings center py-5 my-5">
        <div className="container center flex-col">
          {/* Title */}
          <div className="title">
            <h4
              className="text-lg uppercase font-bold"
              style={{ color: "orangered" }}
            >
              Classes Schedule
            </h4>
          </div>
          {/* Heading */}
          <div className="heading text-4xl uppercase font-bold mb-4 p-1">
            Working Hours
          </div>

          {/* Week Bar */}
          <nav className="weekbar rounded mb-5">
            <ul className="week-list center flex-wrap">
              {/* Day List */}
              <li
                className={`list-item mx-1 ${
                  selectedDay === "Monday" ? "active" : ""
                }`}
                onClick={() => handleDayClick("Monday")}
              >
                Monday
              </li>
              <li
                className={`list-item mx-1 ${
                  selectedDay === "Tuesday" ? "active" : ""
                }`}
                onClick={() => handleDayClick("Tuesday")}
              >
                Tuesday
              </li>
              <li
                className={`list-item mx-1 ${
                  selectedDay === "Wednesday" ? "active" : ""
                }`}
                onClick={() => handleDayClick("Wednesday")}
              >
                Wednesday
              </li>
              <li
                className={`list-item mx-1 ${
                  selectedDay === "Thursday" ? "active" : ""
                }`}
                onClick={() => handleDayClick("Thursday")}
              >
                Thursday
              </li>
              <li
                className={`list-item mx-1 ${
                  selectedDay === "Friday" ? "active" : ""
                }`}
                onClick={() => handleDayClick("Friday")}
              >
                Friday
              </li>
              <li
                className={`list-item mx-1 ${
                  selectedDay === "Saturday" ? "active" : ""
                }`}
                onClick={() => handleDayClick("Saturday")}
              >
                Saturday
              </li>
              <li
                className={`list-item mx-1 ${
                  selectedDay === "Sunday" ? "active" : ""
                }`}
                onClick={() => handleDayClick("Sunday")}
              >
                Sunday
              </li>
            </ul>
          </nav>

          {/* Time Table */}
          {selectedDay && (
            <div className="time-table center flex-wrap">
              {/* Class List */}
              {ClassesList.find((day) => day.day === selectedDay)?.classes.map(
                (classInfo) => (
                  <div
                    className="class-col center flex-col"
                    key={classInfo.name}
                  >
                    {/* Class Timings */}
                    <div className="class-timings">
                      <p className="text-white uppercase font-bold">
                        {classInfo.time}
                      </p>
                    </div>
                    {/* Class Name */}
                    <div className="class-name">
                      <h3
                        className="font-bold uppercase text-2xl p-3"
                        style={{ color: "orangered" }}
                      >
                        {classInfo.name}
                      </h3>
                    </div>
                    {/* Class Instructor */}
                    <div className="class-instructor">
                      <p className="text-white uppercase">
                        {classInfo.instructor}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Classes;
