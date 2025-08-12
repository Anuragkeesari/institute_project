function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5>Sri Rama Chiranjeevi Code IT Pvt. Ltd.</h5>
            <p>
              A leading software training institute offering high-quality courses in Medical Coding, Medical coding ,AML KYC ,SAP FICO ,SAP ABAP and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/courses" className="text-white text-decoration-none">Courses</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: info@srichiranjeevicode.com</p>
            <p>Phone: +91-9978124071</p>
            <p>Ameerpet, Hyderabad, Telangana - 500081</p>
          </div>
        </div>

        <div className="text-center pt-3 border-top">
          © {new Date().getFullYear()} Sri Rama Chiranjeevi Code IT Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
