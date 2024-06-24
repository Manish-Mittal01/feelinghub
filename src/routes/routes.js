import React from "react";
import { Routes, Route } from "react-router-dom";
import MainTheme from "../themes/main-theme";
import * as Path from "./routesPath";
import { useSelector } from "react-redux";
import Pagenotfound from "../Pages/404page";
import Home from "../Pages/home";
import Stories from "../Pages/stories";
import CommunityGuide from "../Pages/community";
import Profile from "../Pages/profile";
import StoryDetails from "../Pages/storiesDetails";
import AddStory from "../Pages/addStory";
import Signin from "../Pages/Auth/Signin";
import Signup from "../Pages/Auth/Signup";
import ResetPassowrd from "../Pages/Auth/reset-password";

function MyRouts() {
  const { loggedinUser } = useSelector((state) => state.auth);

  return (
    <>
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        {/* {!loggedinUser.data?.token && (
          <>
          <Route exact path={Path.sign_in} element={<Signin />} />
        <Route exact path={Path.sign_up} element={<Signup />} />
        <Route exact path={Path.reset_password} element={<ResetPassowrd />} />
          </>
        )} */}
        <Route exact path={Path.reset_password} element={<ResetPassowrd />} />
        <Route exact path={Path.sign_up} element={<Signup />} />
        <Route exact path={Path.sign_in} element={<Signin />} />

        <Route onUpdate={() => window.scrollTo(0, 0)} path="/" element={<MainTheme className="" />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path={Path.communities} element={<CommunityGuide />} />
          <Route exact path={Path.profile} element={<Profile />} />
          <Route exact path={Path.stories} element={<Stories />} />
          <Route exact path={`${Path.storyDetails}/:storyId`} element={<StoryDetails />} />
          <Route exact path={Path.addStory} element={<AddStory />} />
        </Route>

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}
export default MyRouts;
