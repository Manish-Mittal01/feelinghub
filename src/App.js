import React, { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import MyRouts from "./routes/routes";
import runAxiosSetup from "./axios";
import { useLocation, useNavigate } from "react-router-dom";
import { sign_in } from "./routes/routesPath";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { loggedinUser } = useSelector((state) => state.auth);
  const token = loggedinUser?.data?.token;

  useLayoutEffect(() => {
    runAxiosSetup({ token });
  }, [token]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (loggedinUser.data?.token) {
      navigate("/");
    }
  }, [loggedinUser, pathname]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <MyRouts />
    </>
  );
}

export default App;
