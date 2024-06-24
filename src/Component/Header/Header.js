import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { addStory, communities, profile, stories } from "../../routes/routesPath";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="headerContainer">
        <div className="header">
          <Link to="/" className="navbar-brand">
            <img
              src={
                "https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-580x435.png"
              }
              alt="logo"
              className="mainLogo img-fluid"
            />
          </Link>

          <div className="header-right">
            <div className="me-4 d-none d-md-block">
              <button
                className="textBtn headerLink"
                onClick={() => {
                  navigate(stories);
                }}
              >
                Read Stories
              </button>
              <button className="textBtn headerLink" onClick={() => navigate(communities)}>
                Support Community
                {/* Help */}
              </button>
            </div>
            <button className="primaryBtn rounded" onClick={() => navigate(addStory)}>
              Post Your Story
            </button>
            <MdAccountCircle
              className="headerIcon pointer mx-2"
              onClick={() => navigate(profile)}
            />
          </div>
        </div>
      </header>
    </>
  );
}
