import React from "react";
import "./regiform.scss";
import InputValidationGroup from "../RegiInput/RegiInput";
import { Link } from "react-router-dom";
import regibg from "../../images/image2.png";

export default function RegiForm() {
  return (
    <>
      <div className="home_container">
        <div className="regibg">
          <div className="regiimg__container">
            <img src={regibg} alt="regibg" />
          </div>
          <div className="regitext__container">
            <h2>Choose a date range</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              error. Lorem, ipsum dolor.
            </p>
          </div>
        </div>

        <div className="regiform__container">
          <div className="regiform__heading">
            <h1>Create an account</h1>
          </div>
          <div>
            <InputValidationGroup
              type="email"
              name="email"
              label="Your email address"
            />
            <InputValidationGroup
              type="password"
              name="password"
              label="Your password"
            />
            <InputValidationGroup
              type="text"
              name="fullName"
              label="Your full name"
            />
            <InputValidationGroup
              type="tel"
              name="tel"
              label="Your phone number"
            />
            {/* <input
              type="checkbox"
              id="checked"
              name="checkbox"
              defaultChecked
            />
            <label htmlFor="agreeTerms">
              I read and agree Terms and Conditions
            </label> */}

            <Link to="bar" className="regibtn__link">
              <button className="register__btn">Create account</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
