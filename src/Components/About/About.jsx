import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const About = () => {
  useEffect(() => {
    const onScroll = () => {
      const topbarEl = document.getElementById("topbar");
      const navEl = document.getElementById("navbar-container");

      if (topbarEl && navEl) {
        const topbarSize = topbarEl.offsetHeight;
        if (window.scrollY > topbarSize) {
          navEl.classList.add("scrolled-navbar");
          document.body.style.paddingTop = `${navEl.offsetHeight}px`;
        } else {
          navEl.classList.remove("scrolled-navbar");
          document.body.style.paddingTop = "0";
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="col-md-4 mb-5">
        <h3 className="text-white mb-4">Student Help</h3>
        <div className="d-flex flex-column justify-content-start">
          <a href="#" className="text-white-50 mb-2">
            <i className="fa fa-angle-right mr-2"></i>Academic Rules
          </a>
          <a href="#" className="text-white-50 mb-2">
            <i className="fa fa-angle-right mr-2"></i>Campus Activities
          </a>
          <a href="#" className="text-white-50 mb-2">
            <i className="fa fa-angle-right mr-2"></i>Campus life
          </a>
        </div>
      </div>

      <div className="col-md-4 mb-5">
        <h3 className="text-white mb-4">Resources</h3>
        <div className="d-flex flex-column justify-content-start">
          <a href="#" className="text-white-50 mb-2">
            <i className="fa fa-angle-right mr-2"></i>Media Gallery
          </a>
          <a href="#" className="text-white-50 mb-2">
            <i className="fa fa-angle-right mr-2"></i>Useful links
          </a>
          <a href="#" className="text-white-50 mb-2">
            <i className="fa fa-angle-right mr-2"></i>Privacy Policy
          </a>
          <a href="#" className="text-white-50 mb-2">
            <i className="fa fa-angle-right mr-2"></i>Brochure
          </a>
          <a href="#" className="text-white-50">
            <i className="fa fa-angle-right mr-2"></i>Academic Calendar
          </a>
        </div>
      </div>

      <a
        href="#"
        className="btn btn-lg btn-primary rounded-0 btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
};
