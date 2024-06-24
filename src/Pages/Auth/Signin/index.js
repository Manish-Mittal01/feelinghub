import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { ReactComponent as FaceBookIcon } from "../../../assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";
import { ReactComponent as OpenEyeIcon } from "../../../assets/icons/open-eye.svg";
import { ReactComponent as CloseEyeIcon } from "../../../assets/icons/close-eye.svg";
import sideImage from "../../../assets/images/loginSideimage.jpg";
import { login, socialLogin } from "../../../redux/auth/thunk";
import validateForm from "../../../utils/formValidator";
import { ErrorField } from "../../../Component/common/errorField";
import { handleApiRequest } from "../../../services/handleApiRequest";
import { reset_password, sign_up } from "../../../routes/routesPath";

const Signin = () => {
  const { rememberedUser } = useSelector((state) => state.auth);

  const [showpass, setshowpass] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    remember: false,
    ...rememberedUser,
  });
  const [errors, setErrors] = useState({});

  const eyetoggle = () => {
    setshowpass(!showpass);
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setUserDetails((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleSocialLogin = async (provider, data) => {
    const request = {
      provider: provider,
      access_token: data.access_token,
    };
    const response = await handleApiRequest(socialLogin, request);
    console.log("response", response);
  };

  const handleLogin = async () => {
    const formError = validateForm(userDetails, { email: "", password: "" });
    if (formError) {
      setErrors(formError);
      return;
    } else {
      setErrors({});
    }

    const response = await handleApiRequest(login, userDetails);
    console.log("response", response);
  };

  return (
    <section className="position-relative">
      <div className="">
        <Row className="authContainer  m-0">
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
              <Form className="">
                <div className="position-relative">
                  <label for="emailid">Email</label>
                  <input
                    type="email"
                    id="emailid"
                    className="form-control"
                    placeholder="Enter your email address"
                    name="email"
                    value={userDetails.email}
                    onChange={handleChange}
                  />
                  <ErrorField error={errors.email} />
                </div>

                <div className="position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <label for="passwordID">Password</label>
                  </div>
                  <Button
                    variant=""
                    className="eye_btn d-flex align-items-center"
                    onClick={eyetoggle}
                  >
                    {showpass ? <OpenEyeIcon /> : <CloseEyeIcon />}
                  </Button>
                  <input
                    type={showpass ? "text" : "password"}
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

                <div className="small d-flex align-items-center mt-3 mb-1">
                  <input
                    type="checkbox"
                    id="remember"
                    className="checkbox me-1"
                    name="remember"
                    checked={userDetails.remember}
                    onChange={handleChange}
                  />
                  <label for="remember"> Remember me</label>
                </div>
              </Form>
              <Button className="btn_common w-100" onClick={handleLogin}>
                Login
              </Button>
              {/* <p className="my-lg-4 my-3">OR</p> */}

              {/* <LoginSocialGoogle
                  client_id={process.env.REACT_APP_GG_APP_ID || ""}
                  onLoginStart={() => {
                    console.log("Google login started");
                  }}
                  // redirect_uri={REDIRECT_URI}
                  // access_type="offline"
                  onResolve={({ provider, data }) => {
                    handleSocialLogin(provider, data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <Button className="btn_sign_in w-100 mt-2 mb-2  d-flex align-items-center justify-content-center">
                    <span className="me-2">
                      <GoogleIcon />
                    </span>
                    Sign in with google
                  </Button>
                </LoginSocialGoogle>
                <LoginSocialFacebook
                  appId={process.env.REACT_APP_FB_APP_ID || ""}
                  // isOnlyGetToken={true}
                  // fieldsProfile={
                  //   "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                  // }
                  onLoginStart={() => {
                    console.log("Facebook login started");
                  }}
                  // redirect_uri={"https://localhost:3000"}
                  onResolve={({ provider, data }) => {
                    console.log("provider", provider);
                    console.log("data", data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <Button className="btn_sign_in w-100 mt-2 mb-4 d-flex align-items-center justify-content-center">
                    <span className="me-2">
                      <FaceBookIcon />
                    </span>
                    Sign in with facebook
                  </Button>
                </LoginSocialFacebook> */}
              <div className="small my-4">
                <p className="mb-0">
                  Forgot Password?
                  <Link to={reset_password} className="text-decoration-none">
                    {" "}
                    Reset here
                  </Link>
                </p>
                <p className="mb-0">
                  Don't have an account?
                  <Link to={sign_up} className="text-decoration-none">
                    {" "}
                    Create
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Signin;
