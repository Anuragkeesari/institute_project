import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold">🏫 About Us</h1>
        <p className="text-muted fs-5">
          Sri Rama Chiranjeevi Code IT Pvt. Ltd. – A Premier Software Training Institute
        </p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4 d-flex justify-content-center">
          <img
            src="about.jpg"
            className="img-fluid rounded shadow w-50"
            alt="Training Institute"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-success">Who We Are</h3>
          <p>
            <strong>Sri Rama Chiranjeevi Code IT Private Limited Company</strong> is a leading software training institute
            located in Hyderabad. We focus on equipping students and professionals with practical,
            job-oriented skills required to succeed in today’s competitive tech industry.
          </p>
          <p>
            With expert trainers, industry-focused curriculum, and real-time project training, we have become a trusted name
            in producing employable and confident IT professionals.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-info">🌟 Why Choose Us?</h3>
        <div className="row">
          {[
            { icon: "🧠", title: "Expert Trainers", text: "All instructors are experienced industry professionals." },
            { icon: "📘", title: "Modern Curriculum", text: "Courses designed to meet the latest industry demands." },
            { icon: "💼", title: "Placement Help", text: "Resume building, mock interviews, and job referrals." },
            { icon: "⏰", title: "Flexible Batches", text: "Weekday & weekend, online/offline sessions available." },
          ].map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="border p-3 rounded shadow-sm h-100 text-center">
                <h1>{item.icon}</h1>
                <h5 className="mt-2">{item.title}</h5>
                <p className="text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-primary">📚 Our Top Courses</h3>
        <ul className="list-group list-group-flush fs-5">
          <li className="list-group-item">
            <strong>Medical Coding:</strong> Training on ICD-10, CPT, healthcare billing, and compliance.
          </li>
          <li className="list-group-item">
            <strong>AML / KYC:</strong> Compliance, verification, and financial regulation training.
          </li>
          <li className="list-group-item">
            <strong>SAP Modules:</strong> FICO, ABAP, MDG, Security, Cloud (BTP), CPI, and more.
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <h3 className="text-warning">🎯 Our Vision</h3>
        <p>
          Our goal is to become India’s most trusted software training brand — delivering value-driven, accessible,
          and industry-ready education to aspiring professionals of all backgrounds.
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-secondary">📍 Contact Information</h3>
        <p className="mb-1">📌 Address:Ameerpet, Hyderabad, Telangana - 500081</p>
        <p className="mb-1">📧 Email: <a href="mailto:info@chiranjiveicode.com">info@chiranjiveicode.com</a></p>
        <p className="mb-1">📞 Phone: +91-98765-43210</p>
      </div>
    </div>
  );
};

export default About;

