import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as OpenEyeIcon } from "../../../assets/icons/open-eye.svg";
import { ReactComponent as CloseEyeIcon } from "../../../assets/icons/close-eye.svg";
import { sign_in } from "../../../routes/routesPath";
import validateForm from "../../../utils/formValidator";
import { ErrorField } from "../../../Component/common/errorField";

const defaultValues = {
  otp: "",
  password: "",
  password_confirmation: "",
};

export default function ResetPassowrd() {
  const [userDetails, setUserDetails] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [showPass, setShowPass] = useState({});

  const handleChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendOtp = async () => {
    const error = validateForm(userDetails, { email: "" });
    if (error) {
      return setErrors(error);
    } else {
      setErrors({});
    }
    setOtpSent(true);
  };

  const handleResetPassword = async () => {
    const error = validateForm(userDetails, defaultValues);
    if (error) {
      return setErrors(error);
    } else {
      setErrors({});
    }
    alert("Password updated");
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
              <Form className="mb-3">
                {!otpSent && (
                  <div className="position-relative">
                    <label for="emailid">Email</label>
                    <input
                      id="emailid"
                      className="form-control"
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      value={userDetails.email}
                      onChange={handleChange}
                    />
                    <ErrorField error={errors.email} />
                  </div>
                )}

                {otpSent && (
                  <>
                    <div className="position-relative my-2">
                      <label for="otp">OTP</label>
                      <input
                        id="otp"
                        className="form-control"
                        type="text"
                        placeholder="Enter OTP sent to your mail"
                        name="otp"
                        value={userDetails.otp}
                        onChange={handleChange}
                      />
                      <ErrorField error={errors.otp} />
                    </div>

                    <div className="position-relative my-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <label for="passwordID">New Password</label>
                      </div>
                      <Button
                        variant=""
                        className="eye_btn d-flex align-items-center"
                        onClick={() =>
                          setShowPass((prev) => ({
                            ...prev,
                            password: !prev.password,
                          }))
                        }
                      >
                        {showPass.password ? <OpenEyeIcon /> : <CloseEyeIcon />}
                      </Button>
                      <input
                        type={showPass.password ? "text" : "password"}
                        id="passwordID"
                        className="form-control"
                        placeholder="Enter your password"
                        name="password"
                        value={userDetails.password}
                        onChange={handleChange}
                      />
                      <p className="small muted m-0">
                        *Use 8 or more characters with a mix of letters, numbers & symbols
                      </p>
                      <ErrorField error={errors.password} />
                    </div>

                    <div className="position-relative my-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <label for="passwordID">New Password</label>
                      </div>
                      <Button
                        variant=""
                        className="eye_btn"
                        onClick={() =>
                          setShowPass((prev) => ({
                            ...prev,
                            password_confirmation: !prev.password_confirmation,
                          }))
                        }
                      >
                        {showPass.password_confirmation ? <OpenEyeIcon /> : <CloseEyeIcon />}
                      </Button>
                      <input
                        id="password_confirmation"
                        className="form-control"
                        type={showPass.password_confirmation ? "text" : "password"}
                        placeholder="Enter new password again"
                        name={"password_confirmation"}
                        value={userDetails.password_confirmation}
                        onChange={handleChange}
                      />
                      <p className="small muted m-0">
                        Use 8 or more characters with a mix of letters, numbers & symbols
                      </p>
                      <ErrorField error={errors.password_confirmation} />
                    </div>
                  </>
                )}
              </Form>

              {otpSent ? (
                <button
                  variant=""
                  className="primaryBtn rounded w-100"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
              ) : (
                <button variant="" className="primaryBtn rounded w-100" onClick={handleSendOtp}>
                  Send OTP
                </button>
              )}

              <div className="small  my-4">
                <p className="mb-0">
                  Remember Password?
                  <Link to={sign_in}> Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
