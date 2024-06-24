import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

export default function MainTheme() {
  return (
    <div className="mainWrapper">
      <Header />
      <main className="mainBody">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
