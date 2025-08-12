import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">

      {/* Hero Section */}
      <section className="text-center mb-5" data-aos="fade-up">
        <h1 className="display-5 fw-bold text-primary">
          Welcome to Sri Rama Chiranjeevi Code IT Pvt. Ltd.
        </h1>
        <p className="lead text-secondary">
          Empowering You with Industry-Ready Skills in Software & Technology
        </p>
        <Link to="/contact" className="btn btn-outline-primary mt-3">
          Get in Touch
        </Link>
      </section>

      {/* About Section */}
      <section className="row mb-5" data-aos="fade-right">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="about.jpg"
            alt="About us"
            className="img-fluid rounded shadow w-50 "
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="text-success">About Us</h2>
          <p>
            Sri Rama Chiranjeevi Code Private Limited Company is a leading software
            training institute based in Hyderabad. We provide job-oriented training in
            SAP, Medical Coding, AML/KYC, Workday, and more, delivered by real-time
            industry experts. Our goal is to bridge the gap between theory and practice.
          </p>
          <Link to="/about" className="btn btn-success mt-2">
            Learn More
          </Link>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="text-center mb-5" data-aos="zoom-in">
        <h2 className="text-info mb-4">Our Top Courses</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {["Medical Coding", "SAP FICO","SAP ABAP"].map((course, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">{course}</h5>
                  <p className="card-text text-muted">
                    Learn the fundamentals and advance your career with practical,
                    hands-on training in {course}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/courses" className="btn btn-info mt-4">
          View All Courses
        </Link>
      </section>

      {/* Vision Section */}
      <section className="bg-light p-4 rounded shadow" data-aos="fade-up">
        <h3 className="text-center text-primary">Our Vision</h3>
        <p className="text-center">
          To become a trusted center of excellence for software training, empowering
          students and professionals with skills that lead to successful careers in IT.
        </p>
      </section>
    </div>
  );
};

export default Home;

