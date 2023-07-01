import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    gender: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    cpasswordError: "",
    genderError: "",
  });

  // Handle Change / handle Input  Function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, password, cpassword, gender } = userData;

    let hasError = false;

    // Name validation
    if (name.trim() === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        nameError: "Name is required",
      }));
      hasError = true;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        nameError: "Name must not contain numbers",
      }));
      hasError = true;
    } else if (name.length < 3 || name.length > 25) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        nameError: "Name must be between 3 and 25 characters",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        nameError: "",
      }));
    }

    // Email validation
    if (email.trim() === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        emailError: "Email is required",
      }));
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        emailError: "Invalid email address",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        emailError: "",
      }));
    }

    // Phone number validation
    if (phone.trim() === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        phoneError: "Phone number is required",
      }));
      hasError = true;
    } else if (!/^\d{10}$/.test(phone)) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        phoneError: "Phone number must be 10 digits",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        phoneError: "",
      }));
    }

    // Password validation
    if (password.trim() === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        passwordError: "Password is required",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        passwordError: "",
      }));
    }

    // Confirm password validation
    if (cpassword.trim() === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        cpasswordError: "Confirm password is required",
      }));
      hasError = true;
    } else if (cpassword !== password) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        cpasswordError: "Passwords do not match",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        cpasswordError: "",
      }));
    }

    // Gender validation
    if (gender === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        genderError: "Gender is required",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        genderError: "",
      }));
    }

    if (!hasError) {
      console.log(userData);
      setUserData({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        gender: "",
      });
    }
  };

  return (
    <div className="register-form-wrapper">
      <section className="registration-form-section center">
        <div className="registration-form-container center flex-col">
          <div className="form-title" style={{ color: "orangered" }}>
            <h4 className="text-2xl uppercase p-2 font-bold">Join Us</h4>
          </div>
          <form action="" onSubmit={handleSubmit} id="register-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                placeholder="Enter name"
                onChange={handleChange}
                value={userData.name}
              />
              <span className="error-message">{errorMessage.nameError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input"
                placeholder="Enter email"
                onChange={handleChange}
                value={userData.email}
              />
              <span className="error-message">{errorMessage.emailError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-input"
                placeholder="Enter phone"
                onChange={handleChange}
                value={userData.phone}
              />
              <span className="error-message">{errorMessage.phoneError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-input"
                placeholder="Enter password"
                onChange={handleChange}
                value={userData.password}
              />
              <span className="error-message">
                {errorMessage.passwordError}
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                className="form-input"
                placeholder="Confirm password"
                onChange={handleChange}
                value={userData.cpassword}
              />
              <span className="error-message">
                {errorMessage.cpasswordError}
              </span>
            </div>
            <div className="form-group around flex-wrap px-1">
              <label>Choose Gender</label>
              <div className="gender-selector center">
                <div className="center">
                  <input
                    type="radio"
                    name="gender"
                    id="male-selector"
                    onChange={handleChange}
                    checked={userData.gender === "male"}
                    value="male"
                  />
                  <label htmlFor="male-selector">Male</label>
                </div>

                <div className="px-4 mx-3 center">
                  <input
                    type="radio"
                    name="gender"
                    id="female-selector"
                    onChange={handleChange}
                    checked={userData.gender === "female"}
                    value="female"
                  />
                  <label htmlFor="female-selector">Female</label>
                </div>
              </div>
            </div>
            <span className="error-message ms-3">
              {errorMessage.genderError}
            </span>
            <div className="form-group">
              <input type="submit" id="register-btn" value="Register Me" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
