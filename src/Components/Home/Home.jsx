import React from "react";

export const Home = () => {
  return (
    <>
      {/* ===== Latest News Section ===== */}
      <section className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Latest News & Events</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card bg-dark text-white h-100 border-0 shadow">
              <img
                src="/img/news/Chinese Language Course Registration July 2025.jpg"
                alt="Chinese Language Course Registration July 2025"
                className="card-img"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-50">
                <h5 className="card-title">
                  Chinese Language Course Registration July 2025
                </h5>
                <p className="card-text">
                  <small>June 3, 2025</small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-dark text-white h-100 border-0 shadow">
              <img
                src="/img/news/Applied Health Sciences’ Job Fair.jpg"
                alt="Applied Health Sciences’ Job Fair"
                className="card-img"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-50">
                <h5 className="card-title">
                  Applied Health Sciences’ Job Fair
                </h5>
                <p className="card-text">
                  <small>May 22, 2025</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services / Highlights Carousel ===== */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Discover PUA</h2>
          <div
            id="highlightsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <img
                  src="/img/services/Branding Guidelines.png"
                  alt="Branding Guidelines"
                  className="d-block mx-auto img-fluid rounded shadow"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="mt-4">
                  <h5>Branding Guidelines</h5>
                  <p className="text-muted">
                    Explore the official identity standards of Pharos University.
                  </p>
                  <a href="#" className="btn btn-primary btn-sm">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="/img/services/Admission.png"
                  alt="Admission"
                  className="d-block mx-auto img-fluid rounded shadow"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="mt-4">
                  <h5>Admission</h5>
                  <p className="text-muted">
                    Join PUA and unlock opportunities for your future.
                  </p>
                  <a href="#" className="btn btn-primary btn-sm">
                    Apply Now
                  </a>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="/img/services/Systems and Programs.jpeg"
                  alt="Systems and Programs"
                  className="d-block mx-auto img-fluid rounded shadow"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="mt-4">
                  <h5>Systems and Programs</h5>
                  <p className="text-muted">
                    Explore cutting-edge systems that power our education.
                  </p>
                  <a href="#" className="btn btn-primary btn-sm">
                    View Details
                  </a>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="/img/services/PharosUniversityPUAVirtualTour.png"
                  alt="PUA Virtual Tour"
                  className="d-block mx-auto img-fluid rounded shadow"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="mt-4">
                  <h5>Virtual Campus Tour</h5>
                  <p className="text-muted">
                    Experience PUA online — walk through our vibrant campus.
                  </p>
                  <a href="#" className="btn btn-primary btn-sm">
                    Start Tour
                  </a>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              type="button"
              className="carousel-control-prev"
              data-bs-target="#highlightsCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              type="button"
              className="carousel-control-next"
              data-bs-target="#highlightsCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
