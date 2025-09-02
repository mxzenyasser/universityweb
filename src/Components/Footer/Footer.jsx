import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Logo + About */}
          <div className="col-md-5 mb-4">
            <h5 className="d-flex align-items-center text-white">
              <img
                src="/img/footer/imgs/footer-icon.png"
                alt="Pharos University Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
              Pharos University
            </h5>
            <p className="text-white-50 mt-3">
              Inspiring students through knowledge, innovation, and creativity.
              At Pharos University, learning goes beyond the classroom —
              nurturing ambition, curiosity, and lifelong friendships.
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold text-white mb-3">
              Get In Touch
            </h6>
            <p>
              <i className="fa fa-map-marker-alt me-2"></i> Canal El Mahmoudia St,
              beside Green Plaza Complex.
            </p>
            <p>
              <i className="fa fa-phone-alt me-2"></i> +(203) 3877700
            </p>
            <p>
              <i className="fa fa-envelope me-2"></i> info@pua.edu.eg
            </p>
            <div className="d-flex gap-3 mt-2">
              <a
                href="https://www.facebook.com/pua.edu.eg"
                target="_blank"
                rel="noreferrer"
                className="text-white-50 fs-5"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/school/puaedueg/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="text-white-50 fs-5"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/pua.edu.eg/"
                target="_blank"
                rel="noreferrer"
                className="text-white-50 fs-5"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-bold text-white mb-3">
              Quick Links
            </h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white-50 d-block py-1">
                  Academic Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 d-block py-1">
                  Media Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 d-block py-1">
                  Research & Publications
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 d-block py-1">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 d-block py-1">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Footer bottom */}
        <div className="d-flex justify-content-between align-items-center">
          <div className="small">
            © {year} Pharos University. All Rights Reserved.
          </div>
          <a href="#topbar" className="btn btn-sm btn-outline-light">
            <i className="fa fa-arrow-up"></i> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};
