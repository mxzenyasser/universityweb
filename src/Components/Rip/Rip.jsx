import React from "react";

export const Rip = () => {
  return (
    <>
      <div
        className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom"
        style={{ marginBottom: "90px" }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white display-1">
            Research And International Publishing
          </h1>

          <div className="d-inline-flex text-white mb-5">
            <p className="m-0 text-uppercase">
              <a href="index.html" className="text-white">
                Home
              </a>
            </p>
            <i className="fa fa-angle-double-right pt-1 px-3"></i>
            <p className="m-0 text-uppercase">
              Research And International Publishing
            </p>
          </div>

          <div
            className="mx-auto mb-5"
            style={{ width: "100%", maxWidth: "600px" }}
          ></div>
        </div>
      </div>
    </>
  );
};
