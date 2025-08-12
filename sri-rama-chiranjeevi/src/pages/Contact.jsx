import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    reset();
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">
        Contact Us
      </h2>

      <div className="row">
        {/* Contact Details */}
        <div className="col-md-5 mb-4" data-aos="fade-right">
          <div className="p-4 border rounded bg-light shadow-sm h-100">
            <h5>📍 Address</h5>
            <p>
              Sri Rama Chiranjeevi Code IT Pvt.Ltd,  
            </p>
            <p>
                Ameerpet, Hyderabad, Telangana - 500081
            </p>

            <h5>📞 Phone</h5>
            <p>+91-9978124071</p>

            <h5>✉️ Email</h5>
            <p>
              <a href="mailto:info@srichiranjeevicode.com">info@srichiranjeevicode.com</a>
            </p>

            <h5>🕒 Office Hours</h5>
            <p>
              Mon - Sat: 9:00 AM to 6:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7" data-aos="fade-left">
          {isSubmitSuccessful && (
            <div className="alert alert-success">Form submitted successfully!</div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border p-4 rounded shadow-sm bg-white"
          >
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                rows="4"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <div className="invalid-feedback">{errors.message.message}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="mt-5" data-aos="zoom-in">
        <h4 className="text-center mb-3">📌 Find Us on Map</h4>
        <iframe
          title="Institute Location"
          className="w-100 rounded shadow"
          height="350"
          
          src="https://www.google.com/maps?q=17.4375,78.4483&z=15&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
