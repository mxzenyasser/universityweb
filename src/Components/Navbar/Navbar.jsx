import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="container-fluid p-0" id="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 py-lg-0 px-lg-5">
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center ml-lg-3"
          >
            <img
              src="/images/pharos-logo.png"
              alt="Pharos University"
              style={{ height: "50px" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            id="navbarCollapse"
            className="collapse navbar-collapse justify-content-between px-lg-5"
          >
            <div
              className="navbar-nav mx-auto py-0"
              style={{ paddingLeft: "25vw" }}
            >
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Faculties
                </a>
                <div className="dropdown-menu m-0">
                  <a href="Pharmacy.html" className="dropdown-item">
                    Faculty of Pharmacy
                  </a>
                  <a href="Engineering.html" className="dropdown-item">
                    Faculty of Engineering
                  </a>
                  <a href="Arts.html" className="dropdown-item">
                    Faculty of Arts and Design
                  </a>
                  <a href="CSAndAI.html" className="dropdown-item">
                    Faculty of Computer Science & Artificial Intelligence
                  </a>
                </div>
              </div>

              <a href="RIP.html" className="nav-item nav-link">
                ResearchAndInternationalPublishing
              </a>
              <a href="CommunityService.html" className="nav-item nav-link">
                CommunityService
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
