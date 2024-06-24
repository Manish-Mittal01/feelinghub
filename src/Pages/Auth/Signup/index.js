import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import sideImage from "../../../assets/images/loginSideimage.jpg";
import { handleApiRequest } from "../../../services/handleApiRequest";
import { register } from "../../../redux/auth/thunk";
import validateForm from "../../../utils/formValidator";
import MyForm from "../../../Component/formComponent";
import { sign_in } from "../../../routes/routesPath";
import { genderOptions } from "../../../utils/constants";

export const registrationFields = [
  {
    value: "name",
    type: "text",
    placeholder: "Enter full name",
    label: "Full Name",
  },
  { value: "email", type: "email" },
  { value: "mobile", type: "phone" },
  { value: "birth_date", type: "date" },
  { value: "gender", type: "select", options: genderOptions },
  { value: "address", type: "text" },
  { value: "avatar", type: "file" },
  { value: "password", type: "password" },
  { value: "password_confirmation", type: "password" },
];

const defaultValues = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  password_confirmation: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const handleRegister = async (e) => {
    const formError = validateForm(userDetails, defaultValues);
    if (formError) {
      setErrors(formError);
      return;
    } else {
      setErrors({});
    }

    let request = {};
    for (let entry of Object.entries(userDetails || {})) {
      if (typeof entry[1] === "object" && entry[1]?.label && entry[1]?.value) {
        request[entry[0]] = entry[1].value;
      } else {
        request[entry[0]] = entry[1];
      }
    }

    request.file = "123";
    request.phone_number = request.phone_number.slice(request.country_code?.length);
    request.country_code = `+${request.country_code}`;

    const response = await handleApiRequest(register, request);
    if (response) {
      navigate(sign_in);
    }
  };

  return (
    <section className="position-relative">
      <div className="">
        <Row className="authContainer m-0">
          <Col lg={6} className="d-none d-lg-block p-0">
            <div className="authSideImageContainer text-start">
              <div>
                <h3>Share, Connect, Support</h3>
                <p>
                  In an age where technology dominates our daily lives, we are dedicated to provide
                  support and resources for those struggling with mental health issues, relationship
                  problems, or other challenges.
                  <br />
                  we believe in the power of sharing emotions and experiences. Founded in 2023, our
                  innovative Community Service Program aims to inspire individuals to open up,
                  connect, and grow. Join us on a journey of self-discovery and meaningful
                  connections.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="authFormContainer p-0">
            <div className="position-relative mt-3">
              <MyForm
                valueState={userDetails}
                setValueState={setUserDetails}
                errors={errors}
                formFields={registrationFields}
              />

              <button className="primaryBtn rounded w-100" onClick={handleRegister}>
                Sign Up
              </button>

              <div className="small my-4">
                <p>
                  Already have an account?
                  <Link to={sign_in}> Log in</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Signup;
